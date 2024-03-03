import { api } from '@/lib/axios'

export interface DeliveringOrderQuery {
  orderId: string
}

export const deliveringOrder = async ({ orderId }: DeliveringOrderQuery) => {
  await api.patch(`/orders/${orderId}/dispatch`)
}
