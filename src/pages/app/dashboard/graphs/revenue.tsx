import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const Revenue = () => {
  const data = [
    { date: '10/12', revenue: 1230 },
    { date: '11/12', revenue: 200 },
    { date: '12/12', revenue: 928 },
    { date: '13/12', revenue: 129 },
    { date: '14/12', revenue: 986 },
    { date: '15/12', revenue: 640 },
    { date: '16/12', revenue: 1012 },
  ]

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart style={{ fontSize: 12 }} data={data}>
            <CartesianGrid vertical={false} className="stroke-muted" />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />

            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />

            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet[400]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
