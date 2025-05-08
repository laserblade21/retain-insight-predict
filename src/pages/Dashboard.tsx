
import React, { useState, useEffect } from 'react';
import MetricCard from '@/components/dashboard/MetricCard';
import ChurnRiskChart from '@/components/dashboard/ChurnRiskChart';
import ChurnTrendChart from '@/components/dashboard/ChurnTrendChart';
import RiskFactorsChart from '@/components/dashboard/RiskFactorsChart';
import CustomerTable from '@/components/customers/CustomerTable';
import { Users, AlertCircle, TrendingDown, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  // Check if welcome message should be shown
  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (hasSeenWelcome) {
      setShowWelcome(false);
    }
  }, []);

  // Function to dismiss welcome message
  const dismissWelcome = () => {
    setShowWelcome(false);
    localStorage.setItem('hasSeenWelcome', 'true');
  };

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
  
  // Simulate prediction loading
  const handlePredictionRefresh = () => {
    setIsLoading(true);
    
    toast({
      title: "Updating predictions",
      description: "Analyzing customer data and updating risk assessments..."
    });
    
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Predictions updated",
        description: "Customer risk assessments have been refreshed",
      });
    }, 2500);
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Message */}
      {showWelcome && (
        <Card className="bg-white border border-banking-teal/30 mb-4 overflow-hidden">
          <div className="flex justify-between items-start p-5">
            <div>
              <h2 className="text-xl font-semibold text-banking-teal mb-2">Welcome to ChurnSight</h2>
              <p className="text-gray-600">
                Your AI-powered platform for predicting and reducing customer churn. 
                Start by analyzing your dashboard metrics and identifying at-risk customers.
              </p>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={dismissWelcome}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}

      {/* Hero Section */}
      <Card className="bg-gradient-to-r from-banking-blue to-banking-teal p-8 text-white mb-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Predict Customer Churn. Retain More Clients.</h1>
          <p className="text-xl mb-6 opacity-90">
            Use AI-powered insights to identify at-risk customers and implement targeted retention strategies.
          </p>
          <Button 
            onClick={handlePredictionRefresh}
            disabled={isLoading}
            className="bg-white text-banking-blue hover:bg-gray-100 font-medium"
          >
            {isLoading ? (
              <>
                <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-banking-blue border-t-transparent"></span>
                Processing...
              </>
            ) : (
              <>
                Refresh Predictions 
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <MetricCard 
          title="Total Customers" 
          value="1,243" 
          change={2.5} 
          trend="up"
          icon={<Users className="h-5 w-5 text-primary" />}
          isLoading={isLoading}
        />
        <MetricCard 
          title="Churn Rate" 
          value="4.5%" 
          change={0.3} 
          trend="up"
          icon={<TrendingDown className="h-5 w-5 text-primary" />}
          isLoading={isLoading}
        />
        <MetricCard 
          title="At Risk Customers" 
          value="120" 
          change={12} 
          trend="up"
          icon={<AlertCircle className="h-5 w-5 text-primary" />}
          isLoading={isLoading}
        />
        <MetricCard 
          title="Retention Rate" 
          value="95.5%" 
          change={-0.3} 
          trend="down"
          isLoading={isLoading}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChurnTrendChart data={churnTrendData} isLoading={isLoading} />
        <ChurnRiskChart data={churnRiskData} isLoading={isLoading} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">High-Risk Customers</h2>
          <CustomerTable customers={topRiskCustomers} isLoading={isLoading} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Top Risk Factors</h2>
          <RiskFactorsChart data={riskFactorsData} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
