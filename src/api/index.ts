import { setupWorker } from 'msw/browser'

import { env } from '@/lib/env'

import { signInMock } from './auth/mocks/sign-in'
import { signUpRestaurantMock } from './auth/mocks/sign-up-restaurant'

export const worker = setupWorker(signInMock, signUpRestaurantMock)

export const enableMSW = async () => {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
