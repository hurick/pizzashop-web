import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthlyRevenue } from '@/api/dashboard/cards/get-monthly-revenue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardsSkeleton } from './skeletons/metric-cards'

export const MonthlyRevenue = () => {
  const { data: monthlyRevenue } = useQuery({
    queryKey: ['metrics', 'monthly-revenue'],
    queryFn: getMonthlyRevenue,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (Mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {monthlyRevenue ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {(monthlyRevenue.receipt / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthlyRevenue.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthlyRevenue.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês anterior
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthlyRevenue.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês anterior
                </>
              )}
            </p>
          </>
        ) : (
          <MetricCardsSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
