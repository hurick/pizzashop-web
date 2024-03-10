import { http, HttpResponse } from 'msw'

import { GetMonthlyCanceledOrderAmountResponse } from '../get-monthly-canceled-order-amount'

export const getMonthlyCanceledOrderAmountMock = http.get<
  never,
  never,
  GetMonthlyCanceledOrderAmountResponse
>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 4,
    diffFromLastMonth: -9,
  })
})
