import { setupWorker } from 'msw/browser'

import { env } from '@/lib/env'

import { signInMock } from './auth/mocks/sign-in'
import { signUpRestaurantMock } from './auth/mocks/sign-up-restaurant'
import { getDailyOrderAmountMock } from './dashboard/cards/mocks/get-daily-order-amount'
import { getMonthlyCanceledOrderAmountMock } from './dashboard/cards/mocks/get-monthly-canceled-order-amount'
import { getMonthlyOrderAmountMock } from './dashboard/cards/mocks/get-monthly-order-amount'

export const worker = setupWorker(
  signInMock,
  signUpRestaurantMock,
  getDailyOrderAmountMock,
  getMonthlyOrderAmountMock,
  getMonthlyCanceledOrderAmountMock,
)

export const enableMSW = async () => {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
