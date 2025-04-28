
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CustomerTable from '@/components/customers/CustomerTable';
import { Search, FilterX } from 'lucide-react';

const Customers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [riskFilter, setRiskFilter] = useState('all');
  
  // Sample customer data
  const allCustomers = [
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
    {
      id: 6,
      name: 'Frank Miller',
      email: 'frank.m@example.com',
      accountType: 'Business',
      riskScore: 55,
      lastActivity: '1 day ago',
      status: 'active' as const,
    },
    {
      id: 7,
      name: 'Grace Wilson',
      email: 'grace.w@example.com',
      accountType: 'Premium',
      riskScore: 48,
      lastActivity: '6 days ago',
      status: 'active' as const,
    },
    {
      id: 8,
      name: 'Henry Taylor',
      email: 'henry.t@example.com',
      accountType: 'Standard',
      riskScore: 42,
      lastActivity: '3 days ago',
      status: 'inactive' as const,
    },
    {
      id: 9,
      name: 'Ivy Martin',
      email: 'ivy.m@example.com',
      accountType: 'Business',
      riskScore: 35,
      lastActivity: '2 weeks ago',
      status: 'active' as const,
    },
    {
      id: 10,
      name: 'Jack Thompson',
      email: 'jack.t@example.com',
      accountType: 'Standard',
      riskScore: 22,
      lastActivity: '1 day ago',
      status: 'active' as const,
    }
  ];
  
  // Filter customers based on search query and risk filter
  const filteredCustomers = allCustomers.filter(customer => {
    const matchesSearch = 
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      customer.email.toLowerCase().includes(searchQuery.toLowerCase());
      
    let matchesRisk = true;
    if (riskFilter === 'high') {
      matchesRisk = customer.riskScore >= 70;
    } else if (riskFilter === 'medium') {
      matchesRisk = customer.riskScore >= 40 && customer.riskScore < 70;
    } else if (riskFilter === 'low') {
      matchesRisk = customer.riskScore < 40;
    }
    
    return matchesSearch && matchesRisk;
  });
  
  const resetFilters = () => {
    setSearchQuery('');
    setRiskFilter('all');
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold mb-2">Customers</h1>
        <p className="text-muted-foreground">
          View and manage your customer base and their risk profiles.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search customers..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Select value={riskFilter} onValueChange={setRiskFilter}>
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Risk Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Risks</SelectItem>
              <SelectItem value="high">High Risk</SelectItem>
              <SelectItem value="medium">Medium Risk</SelectItem>
              <SelectItem value="low">Low Risk</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="icon" onClick={resetFilters}>
            <FilterX className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <CustomerTable customers={filteredCustomers} />
      
      <div className="text-center text-sm text-muted-foreground">
        Showing {filteredCustomers.length} of {allCustomers.length} customers
      </div>
    </div>
  );
};

export default Customers;
