import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getMonthlyOrderAmount } from '@/api/dashboard/cards/get-monthly-order-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const MonthlyOrderAmount = () => {
  const { data: monthlyOrderAmount } = useQuery({
    queryKey: ['metrics', 'monthly-order-amount'],
    queryFn: getMonthlyOrderAmount,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (Mês)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {monthlyOrderAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthlyOrderAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthlyOrderAmount.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthlyOrderAmount.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês anterior
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthlyOrderAmount.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês anterior
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
