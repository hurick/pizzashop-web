import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Produto 1', amount: 123 },
    { product: 'Produto 2', amount: 64 },
    { product: 'Produto 3', amount: 79 },
    { product: 'Produto 4', amount: 89 },
    { product: 'Produto 5', amount: 48 },
  ])
})
