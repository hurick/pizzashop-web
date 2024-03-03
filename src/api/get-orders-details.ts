import { api } from '@/lib/axios'

export interface GetOrdersDetailsQuery {
  orderId: string
}

export interface GetOrdersDetailsResponse {
  id: string
  createdAt: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export const getOrderDetails = async ({ orderId }: GetOrdersDetailsQuery) => {
  const response = await api.get<GetOrdersDetailsResponse>(`/orders/${orderId}`)

  return response.data
}
