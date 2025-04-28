
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const { toast } = useToast();
  
  const handleSaveGeneral = () => {
    toast({
      title: "Settings updated",
      description: "Your general settings have been saved successfully.",
    });
  };
  
  const handleSaveAlerts = () => {
    toast({
      title: "Notification preferences saved",
      description: "Your notification settings have been updated.",
    });
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your application preferences and configurations.</p>
      </div>
      
      <Tabs defaultValue="general">
        <TabsList className="mb-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="alerts">Notifications</TabsTrigger>
          <TabsTrigger value="model">AI Model</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure your basic application settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" defaultValue="BankCorp Financial" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date-format">Date Format</Label>
                <Select defaultValue="MM/DD/YYYY">
                  <SelectTrigger>
                    <SelectValue placeholder="Select date format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                    <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                    <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="EST">
                  <SelectTrigger>
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EST">Eastern Time (EST)</SelectItem>
                    <SelectItem value="CST">Central Time (CST)</SelectItem>
                    <SelectItem value="MST">Mountain Time (MST)</SelectItem>
                    <SelectItem value="PST">Pacific Time (PST)</SelectItem>
                    <SelectItem value="UTC">Universal Time (UTC)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <div>
                  <h4 className="font-medium">Dark Mode</h4>
                  <p className="text-sm text-muted-foreground">Toggle between light and dark themes.</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="pt-4">
                <Button onClick={handleSaveGeneral}>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="alerts">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure when and how you receive alerts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">High Risk Customer Alerts</h4>
                    <p className="text-sm text-muted-foreground">Get notified when customers enter high risk status.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Weekly Reports</h4>
                    <p className="text-sm text-muted-foreground">Receive weekly churn analytics summary.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Retention Plan Updates</h4>
                    <p className="text-sm text-muted-foreground">Get notifications about retention plan progress.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-muted-foreground">Receive alerts via email.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Mobile Push Notifications</h4>
                    <p className="text-sm text-muted-foreground">Receive alerts on your mobile device.</p>
                  </div>
                  <Switch />
                </div>
              </div>
              
              <div className="pt-4">
                <Button onClick={handleSaveAlerts}>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="model">
          <Card>
            <CardHeader>
              <CardTitle>AI Model Settings</CardTitle>
              <CardDescription>Configure the prediction model parameters.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="model-type">Prediction Model Type</Label>
                <Select defaultValue="gradient">
                  <SelectTrigger>
                    <SelectValue placeholder="Select model type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gradient">Gradient Boosting</SelectItem>
                    <SelectItem value="neural">Neural Network</SelectItem>
                    <SelectItem value="random">Random Forest</SelectItem>
                    <SelectItem value="logistic">Logistic Regression</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="prediction-window">Prediction Window</Label>
                <Select defaultValue="90">
                  <SelectTrigger>
                    <SelectValue placeholder="Select prediction window" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 Days</SelectItem>
                    <SelectItem value="60">60 Days</SelectItem>
                    <SelectItem value="90">90 Days</SelectItem>
                    <SelectItem value="180">180 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="risk-threshold">High Risk Threshold</Label>
                <div className="flex items-center gap-4">
                  <Input id="risk-threshold" type="range" min="50" max="90" defaultValue="70" className="w-full" />
                  <span className="text-sm font-medium min-w-[40px]">70%</span>
                </div>
                <p className="text-xs text-muted-foreground">Customers with a risk score above this threshold will be flagged as high risk.</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="model-refresh">Model Refresh Frequency</Label>
                <Select defaultValue="daily">
                  <SelectTrigger>
                    <SelectValue placeholder="Select refresh frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="realtime">Real-time</SelectItem>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="pt-4">
                <Button>Update Model Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>Connect with other systems and data sources.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border rounded-lg divide-y">
                <IntegrationItem 
                  name="Core Banking System" 
                  description="Connect to your core banking system for transaction data."
                  status="connected" 
                />
                <IntegrationItem 
                  name="CRM System" 
                  description="Integrate with your customer relationship management system."
                  status="connected" 
                />
                <IntegrationItem 
                  name="Email Marketing Platform" 
                  description="Connect to your email marketing platform for retention campaigns."
                  status="not-connected" 
                />
                <IntegrationItem 
                  name="Call Center Software" 
                  description="Integrate with your call center software for service metrics."
                  status="connected" 
                />
                <IntegrationItem 
                  name="Data Warehouse" 
                  description="Connect to your enterprise data warehouse for historical data."
                  status="not-connected" 
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface IntegrationItemProps {
  name: string;
  description: string;
  status: 'connected' | 'not-connected';
}

const IntegrationItem = ({ name, description, status }: IntegrationItemProps) => {
  return (
    <div className="flex items-center justify-between p-4">
      <div>
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div>
        {status === 'connected' ? (
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-banking-success mr-2"></div>
            <span className="text-sm font-medium mr-4">Connected</span>
            <Button variant="outline" size="sm">Configure</Button>
          </div>
        ) : (
          <Button>Connect</Button>
        )}
      </div>
    </div>
  );
};

export default Settings;
