
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface Customer {
  id: number;
  name: string;
  email: string;
  accountType: string;
  riskScore: number;
  lastActivity: string;
  status: 'active' | 'inactive';
}

interface CustomerTableProps {
  customers: Customer[];
}

const CustomerTable = ({ customers }: CustomerTableProps) => {
  const getRiskLevel = (score: number) => {
    if (score >= 70) return { level: 'high', color: 'bg-banking-danger' };
    if (score >= 40) return { level: 'medium', color: 'bg-banking-warning' };
    return { level: 'low', color: 'bg-banking-success' };
  };

  return (
    <div className="w-full overflow-auto border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Account Type</TableHead>
            <TableHead>Risk Score</TableHead>
            <TableHead>Last Activity</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => {
            const risk = getRiskLevel(customer.riskScore);
            return (
              <TableRow key={customer.id}>
                <TableCell>
                  <div>
                    <p className="font-medium">{customer.name}</p>
                    <p className="text-sm text-muted-foreground">{customer.email}</p>
                  </div>
                </TableCell>
                <TableCell>{customer.accountType}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${risk.color}`}></div>
                    <span>{customer.riskScore}%</span>
                  </div>
                </TableCell>
                <TableCell>{customer.lastActivity}</TableCell>
                <TableCell>
                  <Badge variant={customer.status === 'active' ? 'default' : 'outline'}>
                    {customer.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Link 
                    to={`/customers/${customer.id}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    View Details
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomerTable;
