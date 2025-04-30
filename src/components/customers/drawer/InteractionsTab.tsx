
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

interface Interaction {
  date: string;
  type: string;
  details: string;
}

interface InteractionsTabProps {
  interactions: Interaction[];
}

const InteractionsTab = ({ interactions }: InteractionsTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Interactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {interactions.map((interaction, index) => (
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
  );
};

export default InteractionsTab;
