
import React from 'react';
import { 
  Drawer, 
  DrawerContent, 
  DrawerFooter,
  DrawerClose
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Import refactored components
import CustomerDrawerHeader from './drawer/CustomerDrawerHeader';
import CustomerOverview from './drawer/CustomerOverview';
import RiskFactorsTab from './drawer/RiskFactorsTab';
import InteractionsTab from './drawer/InteractionsTab';
import UsageTrendsTab from './drawer/UsageTrendsTab';
import RetentionActionsTab from './drawer/RetentionActionsTab';

interface Customer {
  id: number;
  name: string;
  email: string;
  accountType: string;
  riskScore: number;
  lastActivity: string;
  status: 'active' | 'inactive';
}

interface CustomerDrawerProps {
  customer: Customer | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CustomerDrawer = ({ customer, open, onOpenChange }: CustomerDrawerProps) => {
  if (!customer) return null;

  // Sample data for the customer details
  const customerDetails = {
    phoneNumber: "+1 (555) 123-4567",
    joinDate: "March 15, 2020",
    riskFactors: [
      { factor: "Decreasing Transaction Volume", score: 85 },
      { factor: "Multiple Service Issues", score: 62 },
      { factor: "Account Dormancy", score: 48 },
      { factor: "Competitor Inquiry", score: 35 }
    ],
    interactions: [
      { date: "Aug 15, 2023", type: "Support Call", details: "Billing inquiry" },
      { date: "Jul 28, 2023", type: "Complaint", details: "Service interruption" },
      { date: "Jul 10, 2023", type: "Email", details: "Feature request" },
      { date: "Jun 22, 2023", type: "Support Call", details: "Technical issue" }
    ],
    productUsage: [
      { month: "Jan", usage: 85 },
      { month: "Feb", usage: 82 },
      { month: "Mar", usage: 78 },
      { month: "Apr", usage: 75 },
      { month: "May", usage: 70 },
      { month: "Jun", usage: 65 },
      { month: "Jul", usage: 60 }
    ],
    recommendedActions: [
      { title: "Personal Account Review", description: "Schedule a one-on-one meeting to discuss their needs and concerns." },
      { title: "Loyalty Offer", description: "Provide a 15% discount on their next renewal to acknowledge their loyalty." },
      { title: "Feature Education", description: "Send tutorial on premium features they're not utilizing that could benefit them." }
    ]
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[90vh] overflow-y-auto">
        <CustomerDrawerHeader customer={customer} />
        
        <div className="px-4 py-6">
          {/* Customer Overview Component */}
          <CustomerOverview customer={customer} customerDetails={customerDetails} />
          
          <Tabs defaultValue="risk-factors">
            <TabsList className="w-full mb-4">
              <TabsTrigger value="risk-factors" className="flex-1">Risk Factors</TabsTrigger>
              <TabsTrigger value="interactions" className="flex-1">Interaction History</TabsTrigger>
              <TabsTrigger value="usage-trends" className="flex-1">Usage Trends</TabsTrigger>
              <TabsTrigger value="retention-actions" className="flex-1">Retention Actions</TabsTrigger>
            </TabsList>
            
            {/* Tab content components */}
            <TabsContent value="risk-factors">
              <RiskFactorsTab riskFactors={customerDetails.riskFactors} />
            </TabsContent>
            
            <TabsContent value="interactions">
              <InteractionsTab interactions={customerDetails.interactions} />
            </TabsContent>
            
            <TabsContent value="usage-trends">
              <UsageTrendsTab productUsage={customerDetails.productUsage} />
            </TabsContent>
            
            <TabsContent value="retention-actions">
              <RetentionActionsTab recommendedActions={customerDetails.recommendedActions} />
            </TabsContent>
          </Tabs>
        </div>
        
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomerDrawer;
