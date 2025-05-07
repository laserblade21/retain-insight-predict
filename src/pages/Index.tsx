
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Navigate, Link } from "react-router-dom";

// Landing page or redirect to dashboard if authenticated
const Index = () => {
  const { user } = useAuth();

  // If already authenticated, redirect to dashboard
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl text-center px-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block text-gray-900">ChurnSight</span>
          <span className="block text-blue-600 mt-2">Reduce Customer Churn</span>
        </h1>
        
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Analyze, predict, and prevent customer churn with our powerful analytics platform.
          Make data-driven decisions to improve customer retention.
        </p>
        
        <div className="mt-10 flex gap-4 justify-center">
          <Link to="/auth">
            <Button size="lg">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
