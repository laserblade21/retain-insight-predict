
import React from 'react';
import { 
  Drawer, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose
} from '@/components/ui/drawer';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  LineChart, 
  Line, 
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { User, Phone, Mail, Calendar, MessageSquare, AlertCircle, TrendingUp } from 'lucide-react';

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

  const getRiskLevel = (score: number) => {
    if (score >= 70) return { level: 'High Risk', color: 'bg-red-500' };
    if (score >= 40) return { level: 'Medium Risk', color: 'bg-amber-500' };
    return { level: 'Low Risk', color: 'bg-green-500' };
  };
  
  const risk = getRiskLevel(customer.riskScore);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[90vh] overflow-y-auto">
        <DrawerHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <div>
              <DrawerTitle className="text-xl">{customer.name}</DrawerTitle>
              <DrawerDescription>Customer ID: {customer.id}</DrawerDescription>
            </div>
            <Badge className={risk.color}>{risk.level}</Badge>
          </div>
        </DrawerHeader>
        
        <div className="px-4 py-6">
          {/* Customer Overview Section */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Customer Overview</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-banking-teal" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{customer.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-banking-teal" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{customerDetails.phoneNumber}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <User className="h-5 w-5 text-banking-teal" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Account Type</p>
                  <p className="font-medium">{customer.accountType}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-banking-teal" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Customer Since</p>
                  <p className="font-medium">{customerDetails.joinDate}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <AlertCircle className="h-5 w-5 text-banking-teal" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Risk Score</p>
                  <p className="font-medium">{customer.riskScore}%</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <TrendingUp className="h-5 w-5 text-banking-teal" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Last Activity</p>
                  <p className="font-medium">{customer.lastActivity}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="risk-factors">
            <TabsList className="w-full mb-4">
              <TabsTrigger value="risk-factors" className="flex-1">Risk Factors</TabsTrigger>
              <TabsTrigger value="interactions" className="flex-1">Interaction History</TabsTrigger>
              <TabsTrigger value="usage-trends" className="flex-1">Usage Trends</TabsTrigger>
              <TabsTrigger value="retention-actions" className="flex-1">Retention Actions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="risk-factors">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Risk Factor Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        layout="vertical"
                        data={customerDetails.riskFactors}
                        margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.2} />
                        <XAxis type="number" domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
                        <YAxis type="category" dataKey="factor" />
                        <Tooltip formatter={(value) => [`${value}%`, 'Impact']} />
                        <Bar dataKey="score" fill="#0A2647" barSize={20} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="interactions">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Interactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {customerDetails.interactions.map((interaction, index) => (
                      <div key={index} className="flex border-b pb-3 last:border-0 last:pb-0">
                        <div className="mr-3 bg-gray-100 p-2 rounded-full h-fit">
                          <MessageSquare className="h-5 w-5 text-banking-teal" />
                        </div>
                        <div>
                          <div className="flex justify-between items-start">
                            <p className="font-medium">{interaction.type}</p>
                            <p className="text-sm text-muted-foreground">{interaction.date}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">{interaction.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="usage-trends">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Product Usage Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={customerDetails.productUsage}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                        <XAxis dataKey="month" />
                        <YAxis domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
                        <Tooltip formatter={(value) => [`${value}%`, 'Usage']} />
                        <Line 
                          type="monotone" 
                          dataKey="usage" 
                          stroke="#2C74B3" 
                          strokeWidth={2}
                          activeDot={{ r: 8 }} 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="retention-actions">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recommended Retention Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {customerDetails.recommendedActions.map((action, index) => (
                      <div key={index} className="bg-muted/50 p-4 rounded-md">
                        <h4 className="font-medium mb-1">{action.title}</h4>
                        <p className="text-sm text-muted-foreground">{action.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
