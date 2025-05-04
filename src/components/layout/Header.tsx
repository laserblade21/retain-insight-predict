
import React from 'react';
import { Bell, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const { toast } = useToast();
  
  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: "You have no new notifications.",
    });
  };

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
