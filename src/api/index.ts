import { setupWorker } from 'msw/browser'

import { env } from '@/lib/env'

import { signInMock } from './auth/mocks/sign-in'
import { signUpRestaurantMock } from './auth/mocks/sign-up-restaurant'
import { getDailyOrderAmountMock } from './dashboard/cards/mocks/get-daily-order-amount'

export const worker = setupWorker(
  signInMock,
  signUpRestaurantMock,
  getDailyOrderAmountMock,
)

export const enableMSW = async () => {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
