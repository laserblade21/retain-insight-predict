
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
  isLoading?: boolean;
}

const MetricCard = ({ 
  title, 
  value, 
  change, 
  trend = 'neutral',
  icon,
  className,
  isLoading = false
}: MetricCardProps) => {
  return (
    <Card className={cn("p-5 hover:shadow-md transition-shadow", className)}>
      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
          <div className="h-7 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      ) : (
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
      )}
    </Card>
  );
};

export default MetricCard;
