
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard,
  Users,
  BarChart2,
  Heart,
  Settings,
} from 'lucide-react';

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  title: string;
  active: boolean;
}

const NavItem = ({ to, icon: Icon, title, active }: NavItemProps) => {
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all ${
        active 
          ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
          : 'text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent/50'
      }`}
    >
      <Icon size={20} />
      <span>{title}</span>
    </Link>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;
  
  const navItems = [
    { to: '/', icon: LayoutDashboard, title: 'Dashboard' },
    { to: '/customers', icon: Users, title: 'Customers' },
    { to: '/analytics', icon: BarChart2, title: 'Analytics' },
    { to: '/retention', icon: Heart, title: 'Retention' },
    { to: '/settings', icon: Settings, title: 'Settings' },
  ];

  return (
    <div className="flex flex-col h-screen w-64 bg-sidebar py-6 text-sidebar-foreground">
      <div className="px-6 mb-8">
        <h1 className="text-xl font-bold flex items-center">
          <span className="text-sidebar-primary">Churn</span>
          <span>Guard</span>
        </h1>
      </div>
      
      <div className="px-3 flex flex-col gap-1 flex-1">
        {navItems.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            icon={item.icon}
            title={item.title}
            active={
              item.to === '/' 
                ? path === '/' 
                : path.startsWith(item.to)
            }
          />
        ))}
      </div>
      
      <div className="px-6 mt-auto">
        <div className="py-3 px-3 rounded-md bg-sidebar-accent/30 text-sm">
          <p className="font-medium">ChurnGuard Pro</p>
          <p className="text-sidebar-foreground/70 text-xs mt-1">
            Your trial ends in 13 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
