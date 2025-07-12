import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, 
  BookOpen, 
  Trophy, 
  Clock, 
  AlertCircle,
  TrendingUp,
  Calendar,
  Bell
} from "lucide-react";

const quickStats = [
  {
    title: "Outstanding Fees",
    value: "₹25,000",
    description: "Due by 15th March",
    icon: DollarSign,
    trend: "urgent",
    color: "destructive"
  },
  {
    title: "Enrolled Courses",
    value: "8",
    description: "Current semester",
    icon: BookOpen,
    trend: "stable",
    color: "primary"
  },
  {
    title: "Current CGPA",
    value: "8.7",
    description: "Excellent performance",
    icon: Trophy,
    trend: "up",
    color: "success"
  },
  {
    title: "Attendance",
    value: "92%",
    description: "Above required 75%",
    icon: TrendingUp,
    trend: "up",
    color: "success"
  }
];

const recentActivities = [
  {
    title: "Data Structures Assignment",
    description: "Submitted successfully",
    time: "2 hours ago",
    type: "success"
  },
  {
    title: "Physics Lab Report",
    description: "Due tomorrow",
    time: "Due in 18 hours",
    type: "warning"
  },
  {
    title: "Semester Fee Payment",
    description: "Overdue by 3 days",
    time: "3 days ago",
    type: "destructive"
  }
];

const upcomingEvents = [
  {
    title: "Mid-term Exams",
    date: "March 20-25, 2024",
    description: "Mathematics, Physics, Chemistry"
  },
  {
    title: "Course Registration",
    date: "April 1-10, 2024", 
    description: "Next semester registration opens"
  },
  {
    title: "Industrial Visit",
    date: "March 30, 2024",
    description: "Tech companies in Guwahati"
  }
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="bg-gradient-hero rounded-xl p-6 text-white shadow-float">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
            <p className="text-white/90">Here's what's happening with your academics today.</p>
          </div>
          <div className="text-right">
            <p className="text-white/80 text-sm">Current Semester</p>
            <p className="text-xl font-semibold">1st Year - Semester 2</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <Card key={stat.title} className="border-0 shadow-card hover:shadow-float transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg bg-${stat.color}/10`}>
                <stat.icon className={`h-4 w-4 text-${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <Card className="lg:col-span-2 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Recent Activities
            </CardTitle>
            <CardDescription>Your latest academic activities and updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className={`w-2 h-2 rounded-full mt-2 bg-${activity.type}`}></div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="p-3 border border-border/50 rounded-lg">
                <h4 className="font-medium text-sm">{event.title}</h4>
                <p className="text-xs text-primary font-medium mt-1">{event.date}</p>
                <p className="text-xs text-muted-foreground mt-1">{event.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Academic Progress */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Academic Progress</CardTitle>
          <CardDescription>Your current semester performance overview</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Overall Progress</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Assignment Completion</span>
                <span>88%</span>
              </div>
              <Progress value={88} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Attendance Rate</span>
                <span>92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Frequently used student services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/5 hover:border-primary/20">
              <DollarSign className="h-6 w-6" />
              <span className="text-sm">Pay Fees</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/5 hover:border-primary/20">
              <BookOpen className="h-6 w-6" />
              <span className="text-sm">Register Courses</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/5 hover:border-primary/20">
              <Trophy className="h-6 w-6" />
              <span className="text-sm">View Results</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/5 hover:border-primary/20">
              <Bell className="h-6 w-6" />
              <span className="text-sm">Announcements</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};