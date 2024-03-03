import { api } from '@/lib/axios'

export interface CancelOrderQuery {
  orderId: string
}

export const cancelOrder = async ({ orderId }: CancelOrderQuery) => {
  await api.patch(`/orders/${orderId}/cancel`)
}
