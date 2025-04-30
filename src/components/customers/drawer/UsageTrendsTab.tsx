
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface UsageData {
  month: string;
  usage: number;
}

interface UsageTrendsTabProps {
  productUsage: UsageData[];
}

const UsageTrendsTab = ({ productUsage }: UsageTrendsTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Product Usage Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={productUsage}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
              <Tooltip formatter={(value) => [`${value}%`, 'Usage']} />
              <Line 
                type="monotone" 
                dataKey="usage" 
                stroke="#2C74B3" 
                strokeWidth={2}
                activeDot={{ r: 8 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default UsageTrendsTab;
