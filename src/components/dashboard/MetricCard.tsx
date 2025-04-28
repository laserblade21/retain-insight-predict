
import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  className?: string;
}

const MetricCard = ({ 
  title, 
  value, 
  change, 
  trend = 'neutral',
  icon,
  className 
}: MetricCardProps) => {
  return (
    <Card className={cn("p-5 hover:shadow-md transition-shadow", className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
          
          {typeof change !== 'undefined' && (
            <div className={cn(
              "flex items-center mt-2 text-xs font-medium",
              trend === 'up' ? 'text-banking-danger' : trend === 'down' ? 'text-banking-success' : 'text-gray-500'
            )}>
              {trend === 'up' && <ArrowUp className="h-3 w-3 mr-1" />}
              {trend === 'down' && <ArrowDown className="h-3 w-3 mr-1" />}
              <span>{Math.abs(change)}% from last month</span>
            </div>
          )}
        </div>
        
        {icon && (
          <div className="bg-primary/10 p-2 rounded-md">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};

export default MetricCard;
