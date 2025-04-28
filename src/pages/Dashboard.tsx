
import React from 'react';
import MetricCard from '@/components/dashboard/MetricCard';
import ChurnRiskChart from '@/components/dashboard/ChurnRiskChart';
import ChurnTrendChart from '@/components/dashboard/ChurnTrendChart';
import RiskFactorsChart from '@/components/dashboard/RiskFactorsChart';
import CustomerTable from '@/components/customers/CustomerTable';
import { Users, AlertCircle, TrendingDown } from 'lucide-react';

const Dashboard = () => {
  // Sample data
  const churnRiskData = [
    { name: 'High Risk', value: 120, color: '#FF5252' },
    { name: 'Medium Risk', value: 240, color: '#FFC107' },
    { name: 'Low Risk', value: 640, color: '#4CAF50' },
  ];
  
  const churnTrendData = [
    { name: 'Jan', churnRate: 3.2 },
    { name: 'Feb', churnRate: 3.8 },
    { name: 'Mar', churnRate: 4.1 },
    { name: 'Apr', churnRate: 3.5 },
    { name: 'May', churnRate: 3.9 },
    { name: 'Jun', churnRate: 4.2 },
    { name: 'Jul', churnRate: 4.5 },
  ];
  
  const riskFactorsData = [
    { name: 'Decreasing Transaction Volume', value: 78 },
    { name: 'Multiple Service Issues', value: 65 },
    { name: 'Account Dormancy', value: 52 },
    { name: 'Competitor Inquiry', value: 48 },
    { name: 'Fee Complaints', value: 42 },
  ];
  
  const topRiskCustomers = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.j@example.com',
      accountType: 'Premium',
      riskScore: 82,
      lastActivity: '2 days ago',
      status: 'active' as const,
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      accountType: 'Business',
      riskScore: 76,
      lastActivity: '5 days ago',
      status: 'active' as const,
    },
    {
      id: 3,
      name: 'Carol Williams',
      email: 'carol.w@example.com',
      accountType: 'Standard',
      riskScore: 71,
      lastActivity: '1 week ago',
      status: 'inactive' as const,
    },
    {
      id: 4,
      name: 'David Brown',
      email: 'david.b@example.com',
      accountType: 'Premium',
      riskScore: 68,
      lastActivity: '3 days ago',
      status: 'active' as const,
    },
    {
      id: 5,
      name: 'Emma Davis',
      email: 'emma.d@example.com',
      accountType: 'Standard',
      riskScore: 65,
      lastActivity: '4 days ago',
      status: 'active' as const,
    },
  ];
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold mb-2">Customer Churn Dashboard</h1>
        <p className="text-muted-foreground">Monitor and analyze customer churn metrics and risks.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <MetricCard 
          title="Total Customers" 
          value="1,243" 
          change={2.5} 
          trend="up"
          icon={<Users className="h-5 w-5 text-primary" />}
        />
        <MetricCard 
          title="Churn Rate" 
          value="4.5%" 
          change={0.3} 
          trend="up"
          icon={<TrendingDown className="h-5 w-5 text-primary" />}
        />
        <MetricCard 
          title="At Risk Customers" 
          value="120" 
          change={12} 
          trend="up"
          icon={<AlertCircle className="h-5 w-5 text-primary" />}
        />
        <MetricCard 
          title="Retention Rate" 
          value="95.5%" 
          change={-0.3} 
          trend="down"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChurnTrendChart data={churnTrendData} />
        <ChurnRiskChart data={churnRiskData} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">High-Risk Customers</h2>
          <CustomerTable customers={topRiskCustomers} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Top Risk Factors</h2>
          <RiskFactorsChart data={riskFactorsData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
