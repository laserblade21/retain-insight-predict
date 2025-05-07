
import React, { useState } from 'react';
import { Bell, Search, FileDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLocation } from 'react-router-dom';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ExportOptionsButton from '@/components/common/ExportOptionsButton';

// Sample data for export based on current page
const getSampleDataForExport = (pathname: string) => {
  switch (pathname) {
    case '/dashboard':
      return [
        { customer: 'Alice Johnson', riskScore: 82, lastActivity: '2 days ago', accountType: 'Premium' },
        { customer: 'Bob Smith', riskScore: 76, lastActivity: '5 days ago', accountType: 'Business' },
        { customer: 'Carol Williams', riskScore: 71, lastActivity: '1 week ago', accountType: 'Standard' },
        { customer: 'David Brown', riskScore: 68, lastActivity: '3 days ago', accountType: 'Premium' },
        { customer: 'Emma Davis', riskScore: 65, lastActivity: '4 days ago', accountType: 'Standard' }
      ];
    case '/customers':
      return [
        { id: 1, name: 'Alice Johnson', email: 'alice.j@example.com', riskScore: 82, status: 'Active' },
        { id: 2, name: 'Bob Smith', email: 'bob.smith@example.com', riskScore: 76, status: 'Active' },
        { id: 3, name: 'Carol Williams', email: 'carol.w@example.com', riskScore: 71, status: 'Inactive' },
        { id: 4, name: 'David Brown', email: 'david.b@example.com', riskScore: 68, status: 'Active' },
        { id: 5, name: 'Emma Davis', email: 'emma.d@example.com', riskScore: 65, status: 'Active' }
      ];
    case '/analytics':
      return [
        { month: 'January', churnRate: 3.2, newCustomers: 45, retentionRate: 96.8 },
        { month: 'February', churnRate: 3.8, newCustomers: 52, retentionRate: 96.2 },
        { month: 'March', churnRate: 4.1, newCustomers: 48, retentionRate: 95.9 },
        { month: 'April', churnRate: 3.5, newCustomers: 56, retentionRate: 96.5 },
        { month: 'May', churnRate: 3.9, newCustomers: 61, retentionRate: 96.1 }
      ];
    default:
      return [{ note: 'No data available for export on this page' }];
  }
};

// Get export title based on current page
const getExportTitle = (pathname: string) => {
  switch (pathname) {
    case '/dashboard':
      return 'Dashboard Overview';
    case '/customers':
      return 'Customers List';
    case '/analytics':
      return 'Analytics Report';
    case '/retention':
      return 'Retention Strategies';
    default:
      return 'Churn-Sight Export';
  }
};

const Header = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: "You have no new notifications.",
    });
  };

  const exportData = getSampleDataForExport(location.pathname);
  const exportTitle = getExportTitle(location.pathname);

  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6">
      <div className="flex-1 flex items-center">
        <h1 className="text-xl font-bold text-banking-teal mr-6">Churn-Sight</h1>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Export button */}
        <ExportOptionsButton
          data={exportData}
          filename={`churn-sight-${location.pathname.replace('/', '')}`}
          title={exportTitle}
          variant="ghost"
        />
        
        <button onClick={handleNotificationClick} className="p-2 rounded-md hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-banking-teal flex items-center justify-center text-white font-medium">
            JD
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
