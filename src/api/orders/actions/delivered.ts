import { api } from '@/lib/axios'

export interface DeliverOrderQuery {
  orderId: string
}

export const deliveredOrder = async ({ orderId }: DeliverOrderQuery) => {
  await api.patch(`/orders/${orderId}/deliver`)
}
