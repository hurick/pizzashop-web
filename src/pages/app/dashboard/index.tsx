import { Helmet } from 'react-helmet-async'

import { CardDailyOrderAmount } from './components/card-daily-order-amount'
import { CardMonthlyCanceledOrderAmount } from './components/card-monthly-canceled-order-amount'
import { CardMonthlyOrderAmount } from './components/card-monthly-order-amount'
import { CardMonthlyRevenue } from './components/card-monthly-revenue'

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <CardMonthlyRevenue />
          <CardMonthlyOrderAmount />
          <CardDailyOrderAmount />
          <CardMonthlyCanceledOrderAmount />
        </div>
      </div>
    </>
  )
}
