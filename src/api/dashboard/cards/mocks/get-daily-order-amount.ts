import { http, HttpResponse } from 'msw'

import { GetDailyOrderAmountResponse } from '../get-daily-order-amount'

export const getDailyOrderAmountMock = http.get<
  never,
  never,
  GetDailyOrderAmountResponse
>('/metrics/day-orders-amount', () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5,
  })
})
