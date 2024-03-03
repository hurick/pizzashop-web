import { api } from '@/lib/axios'

export interface GetDailyOrderAmountResponse {
  amount: number
  diffFromYesterday: number
}

export const getDailyOrderAmount = async () => {
  const response = await api.get<GetDailyOrderAmountResponse>(
    '/metrics/day-orders-amount',
  )

  return response.data
}
