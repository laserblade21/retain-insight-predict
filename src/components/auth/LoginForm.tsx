
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { isValidEmail } from "@/utils/authUtils";

// Make email validation less restrictive
const loginSchema = z.object({
  email: z.string().min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormProps = {
  onSuccess?: () => void;
  onSwitchToSignup: () => void;
};

const LoginForm = ({ onSuccess, onSwitchToSignup }: LoginFormProps) => {
  const { signIn } = useAuth();
  
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit", // Only validate on submit
  });

  const handleLogin = async (values: z.infer<typeof loginSchema>) => {
    // Basic email format validation before submission
    if (!isValidEmail(values.email)) {
      toast({
        variant: "destructive",
        title: "Invalid email",
        description: "Please enter a valid email address",
      });
      return;
    }

    const { error } = await signIn(values.email, values.password);
    
    if (error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: error.message || "Please check your credentials and try again",
      });
    } else if (onSuccess) {
      onSuccess();
    }
  };

  const handleDemoLogin = async () => {
    const demoEmail = "demo@example.com";
    const demoPassword = "demopassword";
    
    // Set form values to demo credentials
    form.setValue("email", demoEmail);
    form.setValue("password", demoPassword);
    
    // Show toast to inform user
    toast({
      title: "Demo mode",
      description: "Logging in with demo account...",
    });
    
    // Sign in with demo credentials
    const { error } = await signIn(demoEmail, demoPassword);
    
    if (error) {
      toast({
        variant: "destructive",
        title: "Demo login failed",
        description: "The demo account may not exist yet. Please sign up first.",
      });
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    type="text" 
                    placeholder="email@example.com" 
                    {...field} 
                    autoComplete="email"
                    autoCapitalize="none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input 
                    type="password" 
                    placeholder="••••••••" 
                    {...field}
                    autoComplete="current-password" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Signing In..." : "Sign In"}
          </Button>
          
          {/* Demo Account Button */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or</span>
            </div>
          </div>
          
          <Button 
            type="button" 
            className="w-full" 
            variant="outline" 
            onClick={handleDemoLogin}
          >
            Try Demo Account
          </Button>
        </form>
      </Form>
      <div className="flex justify-center mt-4">
        <Button variant="link" onClick={onSwitchToSignup}>
          Don't have an account? Sign up
        </Button>
      </div>
    </>
  );
};

export default LoginForm;
