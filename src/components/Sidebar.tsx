import { 
  Home, 
  CreditCard, 
  BookOpen, 
  GraduationCap, 
  User, 
  Calendar, 
  Bell, 
  FileText,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const navigationItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "#",
    isActive: true,
  },
  {
    title: "Fee Payment", 
    icon: CreditCard,
    href: "#fee-payment",
    badge: "Due",
    badgeVariant: "destructive" as const,
  },
  {
    title: "Course Registration",
    icon: BookOpen,
    href: "#course-registration",
  },
  {
    title: "Exam Results",
    icon: GraduationCap,
    href: "#exam-results",
    badge: "New",
    badgeVariant: "success" as const,
  },
  {
    title: "Academic Calendar",
    icon: Calendar,
    href: "#calendar",
  },
  {
    title: "Profile",
    icon: User,
    href: "#profile",
  },
  {
    title: "Announcements",
    icon: Bell,
    href: "#announcements",
    badge: "3",
    badgeVariant: "secondary" as const,
  },
  {
    title: "Documents",
    icon: FileText,
    href: "#documents",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "#settings",
  },
];

export const Sidebar = () => {
  return (
    <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-card border-r border-border/50 shadow-card">
      <div className="flex flex-col h-full">
        <div className="p-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Navigation</h2>
            <p className="text-sm text-muted-foreground">Student Services</p>
          </div>
        </div>

        <nav className="flex-1 px-4 pb-4 space-y-2">
          {navigationItems.map((item) => (
            <Button
              key={item.title}
              variant={item.isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-11 transition-all duration-200",
                item.isActive 
                  ? "bg-gradient-primary text-primary-foreground shadow-elegant" 
                  : "hover:bg-muted/70 hover:translate-x-1"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="flex-1 text-left">{item.title}</span>
              {item.badge && (
                <Badge 
                  variant={item.badgeVariant}
                  className="ml-auto text-xs px-2 py-0.5"
                >
                  {item.badge}
                </Badge>
              )}
            </Button>
          ))}
        </nav>

        <div className="p-4 border-t border-border/50">
          <div className="bg-gradient-accent rounded-lg p-4 text-center">
            <h3 className="text-sm font-medium text-accent-foreground mb-1">
              Academic Year 2024-25
            </h3>
            <p className="text-xs text-accent-foreground/80">
              Semester 1 - Week 12
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};