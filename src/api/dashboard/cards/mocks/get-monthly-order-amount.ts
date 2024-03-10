import { http, HttpResponse } from 'msw'

import { GetMonthlyOrderAmountResponse } from '../get-monthly-order-amount'

export const getMonthlyOrderAmountMock = http.get<
  never,
  never,
  GetMonthlyOrderAmountResponse
>('/metrics/month-orders-amount', () => {
  return HttpResponse.json({
    amount: 67,
    diffFromLastMonth: 18,
  })
})
