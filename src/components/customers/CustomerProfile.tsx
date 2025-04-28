
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { Badge } from '@/components/ui/badge';

interface CustomerProfileProps {
  customer: {
    id: number;
    name: string;
    email: string;
    phone: string;
    accountType: string;
    riskScore: number;
    joinDate: string;
    balanceTrend: Array<{
      month: string;
      balance: number;
    }>;
    transactions: Array<{
      month: string;
      count: number;
    }>;
    riskFactors: Array<{
      factor: string;
      score: number;
    }>;
    status: 'active' | 'inactive';
  };
}

const CustomerProfile = ({ customer }: CustomerProfileProps) => {
  const getRiskLevel = (score: number) => {
    if (score >= 70) return { level: 'High Risk', color: 'bg-banking-danger text-white' };
    if (score >= 40) return { level: 'Medium Risk', color: 'bg-banking-warning text-white' };
    return { level: 'Low Risk', color: 'bg-banking-success text-white' };
  };

  const risk = getRiskLevel(customer.riskScore);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <div>
              <CardTitle>{customer.name}</CardTitle>
              <CardDescription className="mt-1">
                {customer.email} • {customer.phone}
              </CardDescription>
            </div>
            <Badge className={risk.color}>
              {risk.level}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Account Type</p>
              <p className="font-medium">{customer.accountType}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Risk Score</p>
              <p className="font-medium">{customer.riskScore}%</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Customer Since</p>
              <p className="font-medium">{customer.joinDate}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="activity">
        <TabsList className="mb-4">
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="risk">Risk Factors</TabsTrigger>
          <TabsTrigger value="retention">Retention Plan</TabsTrigger>
        </TabsList>
        
        <TabsContent value="activity" className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium">Balance History</CardTitle>
            </CardHeader>
            <CardContent className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={customer.balanceTrend}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}`, 'Balance']} />
                  <Line 
                    type="monotone" 
                    dataKey="balance" 
                    stroke="#2C74B3" 
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium">Transaction Activity</CardTitle>
            </CardHeader>
            <CardContent className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={customer.transactions}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}`, 'Transactions']} />
                  <Bar dataKey="count" fill="#5499C7" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="risk">
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium">Risk Factor Analysis</CardTitle>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={customer.riskFactors}
                  margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
                  <YAxis type="category" dataKey="factor" />
                  <Tooltip formatter={(value) => [`${value}%`, 'Impact']} />
                  <Bar dataKey="score" fill="#0A2647" barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="retention">
          <Card>
            <CardHeader>
              <CardTitle>Retention Plan</CardTitle>
              <CardDescription>Suggested actions to retain this customer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-md">
                  <h4 className="font-medium mb-1">Personalized Offer</h4>
                  <p className="text-sm text-muted-foreground">
                    Based on transaction history, offer a targeted incentive like reduced fees on frequently used services.
                  </p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-md">
                  <h4 className="font-medium mb-1">Account Review Meeting</h4>
                  <p className="text-sm text-muted-foreground">
                    Schedule a one-on-one meeting to discuss financial goals and how your services can better meet their needs.
                  </p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-md">
                  <h4 className="font-medium mb-1">Product Education</h4>
                  <p className="text-sm text-muted-foreground">
                    Send materials about services they're not utilizing that could benefit them based on their profile.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CustomerProfile;
