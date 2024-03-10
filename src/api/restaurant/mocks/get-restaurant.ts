import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    description: 'Custom restaurant description',
    name: 'Pizza Shop',
    managerId: 'custom-user-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
