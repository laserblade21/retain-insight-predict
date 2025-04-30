
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Phone, Mail, Calendar, AlertCircle, TrendingUp } from 'lucide-react';

interface CustomerOverviewProps {
  customer: {
    name: string;
    email: string;
    accountType: string;
    riskScore: number;
    lastActivity: string;
  };
  customerDetails: {
    phoneNumber: string;
    joinDate: string;
  };
}

const CustomerOverview = ({ customer, customerDetails }: CustomerOverviewProps) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg">Customer Overview</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 p-2 rounded-full">
            <Mail className="h-5 w-5 text-banking-teal" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">{customer.email}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 p-2 rounded-full">
            <Phone className="h-5 w-5 text-banking-teal" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <p className="font-medium">{customerDetails.phoneNumber}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 p-2 rounded-full">
            <User className="h-5 w-5 text-banking-teal" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Account Type</p>
            <p className="font-medium">{customer.accountType}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 p-2 rounded-full">
            <Calendar className="h-5 w-5 text-banking-teal" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Customer Since</p>
            <p className="font-medium">{customerDetails.joinDate}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 p-2 rounded-full">
            <AlertCircle className="h-5 w-5 text-banking-teal" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Risk Score</p>
            <p className="font-medium">{customer.riskScore}%</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 p-2 rounded-full">
            <TrendingUp className="h-5 w-5 text-banking-teal" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Last Activity</p>
            <p className="font-medium">{customer.lastActivity}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerOverview;
