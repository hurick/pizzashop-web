import { http, HttpResponse } from 'msw'

import { ProcessingOrderQuery } from '../process'

export const processOrderMock = http.patch<ProcessingOrderQuery, never, never>(
  '/orders/:orderId/approve',
  async ({ params }) => {
    if (params.orderId === 'error-order-id') {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, { status: 204 })
  },
)
