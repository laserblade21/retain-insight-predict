
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface RecommendedAction {
  title: string;
  description: string;
}

interface RetentionActionsTabProps {
  recommendedActions: RecommendedAction[];
}

const RetentionActionsTab = ({ recommendedActions }: RetentionActionsTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recommended Retention Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendedActions.map((action, index) => (
            <div key={index} className="bg-muted/50 p-4 rounded-md">
              <h4 className="font-medium mb-1">{action.title}</h4>
              <p className="text-sm text-muted-foreground">{action.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RetentionActionsTab;
