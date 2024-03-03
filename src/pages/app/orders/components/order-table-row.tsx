import { useMutation, useQueryClient } from '@tanstack/react-query'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Search, X } from 'lucide-react'
import { useState } from 'react'

import { cancelOrder } from '@/api/orders/actions/cancel'
import { deliveredOrder } from '@/api/orders/actions/delivered'
import { deliveringOrder } from '@/api/orders/actions/delivering'
import { processOrder } from '@/api/orders/actions/process'
import { GetOrdersResponse } from '@/api/orders/get-orders'
import { OrderStatus } from '@/components/order-status'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderTableDetails } from './order-table-details'

export interface OrdertableRowProps {
  order: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }
}

export const OrderTableRow = ({
  order: { orderId, status, customerName, total, createdAt },
}: OrdertableRowProps) => {
  const queryClient = useQueryClient()

  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const updateOrderStatusOnCache = (orderId: string, status: OrderStatus) => {
    const orderListCache = queryClient.getQueriesData<GetOrdersResponse>({
      queryKey: ['orders'],
    })

    orderListCache.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) return

      queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
        ...cacheData,
        orders: cacheData.orders.map((order) => {
          if (order.orderId === orderId) {
            return { ...order, status }
          }

          return order
        }),
      })
    })
  }

  const { mutateAsync: cancelOrderFn, isPending: isCancelingOrder } =
    useMutation({
      mutationFn: cancelOrder,
      async onSuccess(_data, { orderId }) {
        updateOrderStatusOnCache(orderId, 'canceled')
      },
    })

  const { mutateAsync: processOrderFn, isPending: isProcessingOrder } =
    useMutation({
      mutationFn: processOrder,
      async onSuccess(_data, { orderId }) {
        updateOrderStatusOnCache(orderId, 'processing')
      },
    })

  const { mutateAsync: deliveringOrderFn, isPending: isDeliveringOrder } =
    useMutation({
      mutationFn: deliveringOrder,
      async onSuccess(_data, { orderId }) {
        updateOrderStatusOnCache(orderId, 'delivering')
      },
    })

  const { mutateAsync: deliveredOrderFn, isPending: isDeliveredOrder } =
    useMutation({
      mutationFn: deliveredOrder,
      async onSuccess(_data, { orderId }) {
        updateOrderStatusOnCache(orderId, 'delivered')
      },
    })

  return (
    <TableRow>
      <TableCell>
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderTableDetails orderId={orderId} open={isDetailsOpen} />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">{orderId}</TableCell>
      <TableCell
        title={`Realizado dia ${format(createdAt, 'dd/MM/yyyy')} às ${format(createdAt, 'HH:mm')}`}
        className="text-muted-foreground"
      >
        {formatDistanceToNow(createdAt, { locale: ptBR, addSuffix: true })}
      </TableCell>
      <TableCell>
        <OrderStatus status={status} />
      </TableCell>
      <TableCell className="font-medium">{customerName}</TableCell>
      <TableCell className="font-medium">
        {(total / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell>
      <TableCell>
        {status === 'pending' && (
          <Button
            onClick={() => processOrderFn({ orderId })}
            disabled={isProcessingOrder}
            variant="outline"
            size="xs"
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            Aprovar
          </Button>
        )}

        {status === 'processing' && (
          <Button
            onClick={() => deliveringOrderFn({ orderId })}
            disabled={isDeliveringOrder}
            variant="outline"
            size="xs"
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            Em entrega
          </Button>
        )}

        {status === 'delivering' && (
          <Button
            onClick={() => deliveredOrderFn({ orderId })}
            disabled={isDeliveredOrder}
            variant="outline"
            size="xs"
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            Entregue
          </Button>
        )}
      </TableCell>
      <TableCell>
        <Button
          disabled={
            !['pending', 'processing'].includes(status) || isCancelingOrder
          }
          onClick={() => cancelOrderFn({ orderId })}
          variant="ghost"
          size="xs"
        >
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
