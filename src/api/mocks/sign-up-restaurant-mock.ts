import { http, HttpResponse } from 'msw'

import { SignUpRestaurantBody } from '../auth/sign-up-restaurant'

export const signUpRestaurantMock = http.post<never, SignUpRestaurantBody>(
  '/restaurants',
  async ({ request }) => {
    const { restaurantName } = await request.json()

    if (restaurantName === 'Pizza Shop') {
      return new HttpResponse(null, { status: 201 })
    }

    return new HttpResponse(null, { status: 400 })
  },
)
