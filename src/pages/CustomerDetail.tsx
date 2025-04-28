
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import CustomerProfile from '@/components/customers/CustomerProfile';

const CustomerDetail = () => {
  const { id } = useParams();
  
  // Sample customer data (in a real app, you would fetch this based on the ID)
  const customer = {
    id: parseInt(id as string),
    name: 'Alice Johnson',
    email: 'alice.j@example.com',
    phone: '+1 (555) 123-4567',
    accountType: 'Premium',
    riskScore: 82,
    joinDate: 'March 15, 2020',
    balanceTrend: [
      { month: 'Jan', balance: 15200 },
      { month: 'Feb', balance: 14800 },
      { month: 'Mar', balance: 13900 },
      { month: 'Apr', balance: 12500 },
      { month: 'May', balance: 11200 },
      { month: 'Jun', balance: 10500 },
      { month: 'Jul', balance: 9800 },
    ],
    transactions: [
      { month: 'Jan', count: 24 },
      { month: 'Feb', count: 22 },
      { month: 'Mar', count: 18 },
      { month: 'Apr', count: 16 },
      { month: 'May', count: 12 },
      { month: 'Jun', count: 10 },
      { month: 'Jul', count: 8 },
    ],
    riskFactors: [
      { factor: 'Balance Decline', score: 85 },
      { factor: 'Reduced Activity', score: 76 },
      { factor: 'Service Complaints', score: 62 },
      { factor: 'Competitor Inquiry', score: 55 },
      { factor: 'Missed Payments', score: 40 },
    ],
    status: 'active' as const,
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-4">
        <Link to="/customers">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Customer Profile</h1>
      </div>
      
      <CustomerProfile customer={customer} />
    </div>
  );
};

export default CustomerDetail;
