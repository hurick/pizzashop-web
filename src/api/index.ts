import { setupWorker } from 'msw/browser'

import { env } from '@/lib/env'

import { signInMock } from './auth/mocks/sign-in'
import { signUpRestaurantMock } from './auth/mocks/sign-up-restaurant'
import { getDailyOrderAmountMock } from './dashboard/cards/mocks/get-daily-order-amount'
import { getMonthlyCanceledOrderAmountMock } from './dashboard/cards/mocks/get-monthly-canceled-order-amount'
import { getMonthlyOrderAmountMock } from './dashboard/cards/mocks/get-monthly-order-amount'
import { getMonthlyRevenueMock } from './dashboard/cards/mocks/get-monthly-revenue'
import { getDailyRevenueInPeriodMock } from './dashboard/graphs/mocks/get-daily-revenue-in-period'
import { getPopularProductsMock } from './dashboard/graphs/mocks/get-popular-products'
import { cancelOrderMock } from './orders/actions/mocks/cancel'
import { deliveredOrderMock } from './orders/actions/mocks/delivered'
import { deliveringOrderMock } from './orders/actions/mocks/delivering'
import { processOrderMock } from './orders/actions/mocks/process'
import { getOrdersMock } from './orders/mocks/get-orders'
import { getOrdersDetailsMocks } from './orders/mocks/get-orders-details'
import { getProfileMock } from './profile/mocks/get-profile'
import { updateProfileMock } from './profile/mocks/update-profile'
import { getManagedRestaurantMock } from './restaurant/mocks/get-restaurant'

export const worker = setupWorker(
  signInMock,
  signUpRestaurantMock,
  getDailyOrderAmountMock,
  getMonthlyOrderAmountMock,
  getMonthlyCanceledOrderAmountMock,
  getMonthlyRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  updateProfileMock,
  getManagedRestaurantMock,
  getOrdersMock,
  getOrdersDetailsMocks,
  cancelOrderMock,
  deliveredOrderMock,
  deliveringOrderMock,
  processOrderMock,
)

export const enableMSW = async () => {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
