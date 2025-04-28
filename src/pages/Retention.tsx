
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlusCircle } from 'lucide-react';

const Retention = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold mb-2">Retention Plans</h1>
        <p className="text-muted-foreground">
          Track and manage customer retention strategies and campaigns.
        </p>
      </div>
      
      <Tabs defaultValue="active">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="active">Active Plans</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
          </TabsList>
          
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Plan
          </Button>
        </div>
        
        <TabsContent value="active" className="space-y-4">
          <RetentionPlanCard 
            title="Premium Service Renewal"
            description="Targeted campaign for premium customers nearing the end of their subscription term."
            targetGroup="Premium accounts"
            targetSize={142}
            metrics={{ improved: 28, unchanged: 86, churned: 4 }}
            status="In progress"
            startDate="Apr 15, 2025"
            endDate="May 30, 2025"
            owner="Sarah Johnson"
          />
          
          <RetentionPlanCard 
            title="Digital Banking Adoption"
            description="Initiative to encourage customers to adopt digital banking features."
            targetGroup="Branch-only users"
            targetSize={235}
            metrics={{ improved: 85, unchanged: 115, churned: 8 }}
            status="In progress"
            startDate="Mar 1, 2025"
            endDate="Jun 30, 2025"
            owner="Michael Chen"
          />
          
          <RetentionPlanCard 
            title="Small Business Support"
            description="Enhanced support and services for small business customers showing churn risk indicators."
            targetGroup="Small business accounts"
            targetSize={87}
            metrics={{ improved: 32, unchanged: 48, churned: 2 }}
            status="In progress"
            startDate="Apr 1, 2025"
            endDate="Jul 31, 2025"
            owner="David Wilson"
          />
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-4">
          <RetentionPlanCard 
            title="Fee Structure Update"
            description="Plan to address customer concerns about fee structure and improve transparency."
            targetGroup="Fee-sensitive customers"
            targetSize={310}
            metrics={{ improved: 180, unchanged: 98, churned: 32 }}
            status="Completed"
            startDate="Jan 15, 2025"
            endDate="Mar 31, 2025"
            owner="Jessica Taylor"
          />
          
          <RetentionPlanCard 
            title="Account Activity Re-engagement"
            description="Campaign to re-engage dormant accounts showing inactivity patterns."
            targetGroup="Low activity accounts"
            targetSize={425}
            metrics={{ improved: 215, unchanged: 165, churned: 45 }}
            status="Completed"
            startDate="Feb 1, 2025"
            endDate="Apr 15, 2025"
            owner="Robert Martinez"
          />
        </TabsContent>
        
        <TabsContent value="drafts" className="space-y-4">
          <RetentionPlanCard 
            title="Mobile App Enhancement"
            description="Plan to address customer feedback about mobile app limitations."
            targetGroup="Mobile app users"
            targetSize={580}
            metrics={{ improved: 0, unchanged: 0, churned: 0 }}
            status="Draft"
            startDate="Upcoming"
            endDate="TBD"
            owner="Priya Sharma"
          />
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardHeader>
          <CardTitle>Retention Strategy Templates</CardTitle>
          <CardDescription>
            Ready-to-use templates for common retention scenarios.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <StrategyTemplateCard
              title="Fee Sensitivity"
              description="For customers showing concerns about fees and charges."
              target="Fee-sensitive"
            />
            
            <StrategyTemplateCard
              title="Dormant Account"
              description="For accounts showing reduced activity over time."
              target="Low activity"
            />
            
            <StrategyTemplateCard
              title="Competitor Interest"
              description="For customers showing interest in competitor services."
              target="Risk of switching"
            />
            
            <StrategyTemplateCard
              title="Service Issues"
              description="For customers who have experienced service problems."
              target="Dissatisfied"
            />
            
            <StrategyTemplateCard
              title="Digital Adoption"
              description="For customers not utilizing digital banking options."
              target="Branch-only"
            />
            
            <StrategyTemplateCard
              title="Relationship Building"
              description="For building deeper customer relationships."
              target="New customers"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface RetentionPlanCardProps {
  title: string;
  description: string;
  targetGroup: string;
  targetSize: number;
  metrics: {
    improved: number;
    unchanged: number;
    churned: number;
  };
  status: string;
  startDate: string;
  endDate: string;
  owner: string;
}

const RetentionPlanCard = ({
  title,
  description,
  targetGroup,
  targetSize,
  metrics,
  status,
  startDate,
  endDate,
  owner
}: RetentionPlanCardProps) => {
  const getStatusColor = (status: string) => {
    switch(status.toLowerCase()) {
      case 'in progress': return 'bg-blue-500';
      case 'completed': return 'bg-green-500';
      case 'draft': return 'bg-gray-500';
      default: return 'bg-blue-500';
    }
  };
  
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
          <Badge className={getStatusColor(status)}>{status}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div>
            <p className="text-sm text-muted-foreground">Target Group</p>
            <p className="font-medium">{targetGroup}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Target Size</p>
            <p className="font-medium">{targetSize} customers</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Timeline</p>
            <p className="font-medium">{startDate} — {endDate}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Owner</p>
            <p className="font-medium">{owner}</p>
          </div>
        </div>
        
        {status !== 'Draft' && (
          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Results</p>
            <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
              <div className="flex h-full">
                <div 
                  className="bg-banking-success text-xs flex items-center justify-center text-white"
                  style={{ width: `${(metrics.improved / targetSize) * 100}%` }}
                >
                  {Math.round((metrics.improved / targetSize) * 100)}%
                </div>
                <div 
                  className="bg-banking-warning text-xs flex items-center justify-center text-white"
                  style={{ width: `${(metrics.unchanged / targetSize) * 100}%` }}
                >
                  {Math.round((metrics.unchanged / targetSize) * 100)}%
                </div>
                <div 
                  className="bg-banking-danger text-xs flex items-center justify-center text-white"
                  style={{ width: `${(metrics.churned / targetSize) * 100}%` }}
                >
                  {Math.round((metrics.churned / targetSize) * 100)}%
                </div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Improved: {metrics.improved}</span>
              <span>Unchanged: {metrics.unchanged}</span>
              <span>Churned: {metrics.churned}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

interface StrategyTemplateCardProps {
  title: string;
  description: string;
  target: string;
}

const StrategyTemplateCard = ({ title, description, target }: StrategyTemplateCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <Badge variant="outline">{target}</Badge>
          <Button size="sm" variant="outline">Use Template</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Retention;
