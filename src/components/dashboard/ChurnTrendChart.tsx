
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChurnTrendChartProps {
  data: {
    name: string;
    churnRate: number;
  }[];
}

const ChurnTrendChart = ({ data }: ChurnTrendChartProps) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Churn Rate Trend</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="name" />
            <YAxis 
              tickFormatter={(tick) => `${tick}%`} 
              domain={[0, 'dataMax + 1']}
            />
            <Tooltip formatter={(value) => [`${value}%`, 'Churn Rate']} />
            <Area 
              type="monotone" 
              dataKey="churnRate" 
              stroke="#2C74B3" 
              fill="#2C74B3" 
              fillOpacity={0.2} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ChurnTrendChart;
