
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface RiskFactorsChartProps {
  data: {
    name: string;
    value: number;
  }[];
}

const RiskFactorsChart = ({ data }: RiskFactorsChartProps) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Top Churn Risk Factors</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 100,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} horizontal={false} />
            <XAxis type="number" domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
            <YAxis type="category" dataKey="name" />
            <Tooltip formatter={(value) => [`${value}%`, 'Impact']} />
            <Bar dataKey="value" fill="#5499C7" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RiskFactorsChart;
