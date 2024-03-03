import { api } from '@/lib/axios'

export interface GetMonthlyCanceledOrderAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export const getMonthlyCanceledOrderAmount = async () => {
  const response = await api.get<GetMonthlyCanceledOrderAmountResponse>(
    '/metrics/month-canceled-orders-amount',
  )

  return response.data
}
