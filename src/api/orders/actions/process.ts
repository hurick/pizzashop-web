import { api } from '@/lib/axios'

export interface ProcessingOrderQuery {
  orderId: string
}

export const processOrder = async ({ orderId }: ProcessingOrderQuery) => {
  await api.patch(`/orders/${orderId}/approve`)
}
