import { http, HttpResponse } from 'msw'

import { DeliverOrderQuery } from '../delivered'

export const deliveredOrderMock = http.patch<DeliverOrderQuery, never, never>(
  '/orders/:orderId/deliver',
  async ({ params }) => {
    if (params.orderId === 'error-order-id') {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, { status: 204 })
  },
)
