
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Analytics = () => {
  // Sample data for charts
  const monthlyChurnData = [
    { month: 'Jan', churnRate: 3.2, retention: 96.8 },
    { month: 'Feb', churnRate: 3.8, retention: 96.2 },
    { month: 'Mar', churnRate: 4.1, retention: 95.9 },
    { month: 'Apr', churnRate: 3.5, retention: 96.5 },
    { month: 'May', churnRate: 3.9, retention: 96.1 },
    { month: 'Jun', churnRate: 4.2, retention: 95.8 },
    { month: 'Jul', churnRate: 4.5, retention: 95.5 },
    { month: 'Aug', churnRate: 4.7, retention: 95.3 },
    { month: 'Sep', churnRate: 4.4, retention: 95.6 },
    { month: 'Oct', churnRate: 4.2, retention: 95.8 },
    { month: 'Nov', churnRate: 4.3, retention: 95.7 },
    { month: 'Dec', churnRate: 4.6, retention: 95.4 },
  ];

  const segmentChurnData = [
    { name: 'Standard', value: 5.7, color: '#5499C7' },
    { name: 'Premium', value: 3.2, color: '#2C74B3' },
    { name: 'Business', value: 2.4, color: '#0A2647' },
  ];

  const ageChurnData = [
    { name: '18-24', rate: 6.8 },
    { name: '25-34', rate: 5.2 },
    { name: '35-44', rate: 3.7 },
    { name: '45-54', rate: 2.9 },
    { name: '55-64', rate: 2.3 },
    { name: '65+', rate: 1.8 },
  ];

  const channelChurnData = [
    { name: 'Mobile App', rate: 2.8 },
    { name: 'Website', rate: 3.6 },
    { name: 'Branch', rate: 1.9 },
    { name: 'Call Center', rate: 4.7 },
  ];

  const regionData = [
    { name: 'North', rate: 4.2 },
    { name: 'South', rate: 3.8 },
    { name: 'East', rate: 4.7 },
    { name: 'West', rate: 3.5 },
    { name: 'Central', rate: 2.9 },
  ];
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-2">Churn Analytics</h1>
          <p className="text-muted-foreground">In-depth analysis of customer churn patterns and trends.</p>
        </div>
        
        <div className="w-full md:w-48">
          <Select defaultValue="last12months">
            <SelectTrigger>
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last3months">Last 3 months</SelectItem>
              <SelectItem value="last6months">Last 6 months</SelectItem>
              <SelectItem value="last12months">Last 12 months</SelectItem>
              <SelectItem value="ytd">Year to date</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Churn Rate Over Time</CardTitle>
        </CardHeader>
        <CardContent className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={monthlyChurnData}
              margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(tick) => `${tick}%`} />
              <Tooltip formatter={(value) => [`${value}%`, 'Rate']} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="churnRate" 
                name="Churn Rate"
                stroke="#FF5252" 
                activeDot={{ r: 8 }} 
              />
              <Line 
                type="monotone" 
                dataKey="retention" 
                name="Retention Rate"
                stroke="#4CAF50" 
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="segments">
        <TabsList className="mb-4">
          <TabsTrigger value="segments">Segments</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="channels">Channels</TabsTrigger>
          <TabsTrigger value="geography">Geography</TabsTrigger>
        </TabsList>
        
        <TabsContent value="segments" className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Churn by Account Type</CardTitle>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={segmentChurnData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {segmentChurnData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Churn Rate']} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Churn Reasons by Segment</CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-[350px] overflow-hidden">
              <div className="p-6 h-full flex flex-col justify-center items-center">
                <p className="text-center text-muted-foreground">
                  Standard Account customers primarily leave due to fees and better competitors' rates.
                </p>
                <p className="text-center text-muted-foreground mt-4">
                  Premium Account customers mostly churn due to service quality issues and mobile app limitations.
                </p>
                <p className="text-center text-muted-foreground mt-4">
                  Business Account customers typically churn because of limited product offerings and support response times.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="demographics">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Churn Rate by Age Group</CardTitle>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={ageChurnData}
                  margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(tick) => `${tick}%`} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Churn Rate']} />
                  <Bar 
                    dataKey="rate" 
                    name="Churn Rate"
                    fill="#5499C7" 
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="channels">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Churn Rate by Channel</CardTitle>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={channelChurnData}
                  margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(tick) => `${tick}%`} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Churn Rate']} />
                  <Bar 
                    dataKey="rate" 
                    name="Churn Rate"
                    fill="#2C74B3" 
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="geography">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Churn Rate by Region</CardTitle>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={regionData}
                  margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(tick) => `${tick}%`} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Churn Rate']} />
                  <Bar 
                    dataKey="rate" 
                    name="Churn Rate"
                    fill="#0A2647" 
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
