import { http, HttpResponse } from 'msw'

import {
  GetOrdersDetailsQuery,
  GetOrdersDetailsResponse,
} from '../get-orders-details'

export const getOrdersDetailsMocks = http.get<
  GetOrdersDetailsQuery,
  never,
  GetOrdersDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@xample.com',
      phone: '(12) 34567890',
    },
    status: 'pending',
    createdAt: '2024-01-01T00:00:00.000Z',
    totalInCents: 19000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 6000,
        quantity: 2,
        product: {
          name: 'Pizza de Pepperoni',
        },
      },
      {
        id: 'order-item-2',
        priceInCents: 7000,
        quantity: 1,
        product: {
          name: 'Pizza de Calabresa',
        },
      },
    ],
  })
})
