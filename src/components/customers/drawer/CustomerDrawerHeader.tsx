
import React from 'react';
import { DrawerHeader, DrawerTitle, DrawerDescription } from '@/components/ui/drawer';
import { Badge } from '@/components/ui/badge';

interface CustomerDrawerHeaderProps {
  customer: {
    id: number;
    name: string;
    riskScore: number;
  };
}

const CustomerDrawerHeader = ({ customer }: CustomerDrawerHeaderProps) => {
  const getRiskLevel = (score: number) => {
    if (score >= 70) return { level: 'High Risk', color: 'bg-red-500' };
    if (score >= 40) return { level: 'Medium Risk', color: 'bg-amber-500' };
    return { level: 'Low Risk', color: 'bg-green-500' };
  };
  
  const risk = getRiskLevel(customer.riskScore);

  return (
    <DrawerHeader className="border-b pb-4">
      <div className="flex items-center justify-between">
        <div>
          <DrawerTitle className="text-xl">{customer.name}</DrawerTitle>
          <DrawerDescription>Customer ID: {customer.id}</DrawerDescription>
        </div>
        <Badge className={risk.color}>{risk.level}</Badge>
      </div>
    </DrawerHeader>
  );
};

export default CustomerDrawerHeader;
