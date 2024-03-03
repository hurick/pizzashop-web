import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getDailyOrderAmount } from '@/api/dashboard/cards/get-daily-order-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const DailyOrderAmount = () => {
  const { data: dailyOrderAmount } = useQuery({
    queryKey: ['metrics', 'daily-order-amount'],
    queryFn: getDailyOrderAmount,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (Dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {dailyOrderAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dailyOrderAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {dailyOrderAmount.diffFromYesterday >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{dailyOrderAmount.diffFromYesterday}%
                  </span>{' '}
                  em relação ao dia anterior
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {dailyOrderAmount.diffFromYesterday}%
                  </span>{' '}
                  em relação ao dia anterior
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
