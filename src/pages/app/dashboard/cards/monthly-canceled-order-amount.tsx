import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthlyCanceledOrderAmount } from '@/api/dashboard/cards/get-monthly-canceled-order-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const MonthlyCanceledOrderAmount = () => {
  const { data: monthlyCanceledOrderAmount } = useQuery({
    queryKey: ['metrics', 'monthly-canceled-order-amount'],
    queryFn: getMonthlyCanceledOrderAmount,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (Mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {monthlyCanceledOrderAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthlyCanceledOrderAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthlyCanceledOrderAmount.diffFromLastMonth < 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {monthlyCanceledOrderAmount.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês anterior
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    +{monthlyCanceledOrderAmount.diffFromLastMonth}%
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
