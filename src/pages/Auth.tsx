
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";

const Auth = () => {
  const { user } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // If user is already logged in, redirect to dashboard
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center mb-8">ChurnSight</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>{isLogin ? "Login" : "Create an account"}</CardTitle>
            <CardDescription>
              {isLogin ? "Sign in to your account to continue" : "Sign up for a new account"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLogin ? (
              <LoginForm 
                onSwitchToSignup={toggleForm} 
              />
            ) : (
              <SignupForm 
                onSwitchToLogin={toggleForm} 
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
