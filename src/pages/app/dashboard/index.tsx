import { Helmet } from 'react-helmet-async'

import {
  DailyOrderAmount,
  MonthlyCanceledOrderAmount,
  MonthlyOrderAmount,
  MonthlyRevenue,
} from './cards'
import { PopularProducts, Revenue } from './graphs'

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
          <PopularProducts />
        </div>
      </div>
    </>
  )
}
