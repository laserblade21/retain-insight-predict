
import React from "react";
import { Bell, Settings } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/AuthContext";
import ExportOptionsButton from "@/components/common/ExportOptionsButton";

// Sample data for export functionality
const sampleExportData = [
  { id: 1, name: "Sample Data 1", value: 100 },
  { id: 2, name: "Sample Data 2", value: 200 },
];

const Header = () => {
  const { user, signOut } = useAuth();
  
  // Get initials for avatar fallback
  const getInitials = () => {
    if (!user) return "U";
    
    // Try to get full name from metadata
    const fullName = (user?.user_metadata?.full_name as string) || "";
    if (fullName) {
      return fullName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .substring(0, 2);
    }
    
    // Fall back to email
    return user.email?.substring(0, 2).toUpperCase() || "U";
  };

  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div className="font-semibold">ChurnSight</div>
      <div className="flex items-center gap-4">
        <ExportOptionsButton 
          data={sampleExportData} 
          filename="export-data" 
        />
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarFallback>{getInitials()}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => signOut()}>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
