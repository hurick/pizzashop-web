import { api } from '@/lib/axios'

export interface GetMonthlyOrderAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export const getMonthlyOrderAmount = async () => {
  const response = await api.get<GetMonthlyOrderAmountResponse>(
    '/metrics/month-orders-amount',
  )

  return response.data
}
