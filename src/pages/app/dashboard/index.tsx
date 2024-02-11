import { Helmet } from 'react-helmet-async'

import { DailyOrderAmount } from './cards/daily-order-amount'
import { MonthlyCanceledOrderAmount } from './cards/monthly-canceled-order-amount'
import { MonthlyOrderAmount } from './cards/monthly-order-amount'
import { MonthlyRevenue } from './cards/monthly-revenue'
import { Revenue } from './graphs/revenue'

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <DailyOrderAmount />
          <MonthlyOrderAmount />
          <MonthlyCanceledOrderAmount />
          <MonthlyRevenue />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <Revenue />
        </div>
      </div>
    </>
  )
}