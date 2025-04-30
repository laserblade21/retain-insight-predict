
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface RiskFactor {
  factor: string;
  score: number;
}

interface RiskFactorsTabProps {
  riskFactors: RiskFactor[];
}

const RiskFactorsTab = ({ riskFactors }: RiskFactorsTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Risk Factor Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={riskFactors}
              margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.2} />
              <XAxis type="number" domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
              <YAxis type="category" dataKey="factor" />
              <Tooltip formatter={(value) => [`${value}%`, 'Impact']} />
              <Bar dataKey="score" fill="#0A2647" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskFactorsTab;
