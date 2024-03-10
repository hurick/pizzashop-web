import { http, HttpResponse } from 'msw'

import { DeliveringOrderQuery } from '../delivering'

export const deliveringOrderMock = http.patch<
  DeliveringOrderQuery,
  never,
  never
>('/orders/:orderId/dispatch', async ({ params }) => {
  if (params.orderId === 'error-order-id') {
    return new HttpResponse(null, { status: 400 })
  }

  return new HttpResponse(null, { status: 204 })
})
