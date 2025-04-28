
# RetainInsight - AI-Powered Customer Churn Prediction Platform


## Overview

RetainInsight is an AI-powered platform designed to help financial institutions identify at-risk customers and implement targeted retention strategies. By leveraging advanced analytics and machine learning, the platform predicts customer churn before it happens, allowing banks to take proactive measures to improve customer satisfaction and retention.

## Features

### 📊 Comprehensive Dashboard
- Real-time overview of key customer metrics
- Visual representation of churn risk distribution
- Historical churn rate trends
- Top contributors to customer churn

### 🔍 Customer Risk Analysis
- Individual customer risk scoring
- Detailed customer profiles with historical activity
- Risk factor identification per customer
- Behavioral pattern recognition

### 📈 Analytics & Reporting
- Detailed churn analytics
- Segmentation by customer demographics
- Performance tracking of retention initiatives
- Customizable reports and exports

### 🎯 Retention Strategy Tools
- Recommended intervention actions
- Automated customer outreach workflows
- A/B testing for retention strategies
- ROI calculation for retention campaigns

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Data Visualization**: Recharts
- **State Management**: React Context API
- **Responsive Design**: Mobile and desktop optimized interface

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```sh
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. Install dependencies
   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view the application in your browser

## Project Structure

```
src/
├── components/         # UI components
│   ├── customers/      # Customer-related components
│   ├── dashboard/      # Dashboard widgets and charts
│   ├── layout/         # Layout components (header, sidebar, etc.)
│   └── ui/             # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and helpers
├── pages/              # Page components
└── main.tsx            # Application entry point
```

## Dashboard Metrics Explained

### Churn Rate
The percentage of customers who have discontinued their relationship with the bank over a specific period. Lower is better.

### At Risk Customers
Customers identified by the AI model as having a high probability of churning in the near future. These are your priority retention targets.

### Retention Rate
The percentage of customers who maintain their relationship with the bank over a specific period. Higher is better.

### Risk Factors
Key indicators that contribute to a customer's likelihood to churn, such as decreasing transaction volume, service issues, or account dormancy.

## Deploying to Production

The project can be deployed through Lovable's built-in deployment feature:

1. Navigate to your project in Lovable
2. Click on the "Share" button in the top-right corner
3. Select "Publish" to deploy your application

## Custom Domain Setup

To connect your RetainInsight application to a custom domain:

1. Navigate to Project > Settings > Domains in Lovable
2. Click "Connect Domain" and follow the instructions
3. Update your DNS settings as specified

## Future Roadmap

- Integration with CRM systems
- Advanced predictive models using additional data sources
- Customer journey mapping
- Mobile app for on-the-go monitoring
- API integration with third-party retention tools

## License

This project is licensed under the MIT License - see the LICENSE file for details.



## Support

For questions or support, please contact me.
