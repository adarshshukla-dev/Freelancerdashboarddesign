import { DashboardSidebar } from './components/DashboardSidebar';
import { DashboardHeader } from './components/DashboardHeader';
import { StatCard } from './components/StatCard';
import { ProjectsTable } from './components/ProjectsTable';
import { DollarSign, Briefcase, TrendingUp, Users } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="ml-64">
        <DashboardHeader />
        
        <main className="p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold tracking-tight mb-1">Welcome back, Sarah 👋</h1>
            <p className="text-muted-foreground">Here's what's happening with your projects today</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Earnings"
              value="$34,200"
              change="+12.5% from last month"
              changeType="positive"
              icon={DollarSign}
              iconColor="text-primary"
            />
            <StatCard
              title="Active Gigs"
              value="8"
              change="3 pending review"
              changeType="neutral"
              icon={Briefcase}
              iconColor="text-primary"
            />
            <StatCard
              title="Success Rate"
              value="98.5%"
              change="+2.1% from last month"
              changeType="positive"
              icon={TrendingUp}
              iconColor="text-primary"
            />
            <StatCard
              title="Total Clients"
              value="42"
              change="+5 this month"
              changeType="positive"
              icon={Users}
              iconColor="text-primary"
            />
          </div>

          {/* Projects Table */}
          <ProjectsTable />

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Create New Gig</h3>
              <p className="text-sm text-muted-foreground mb-4">
                List a new service and start getting client requests
              </p>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Create Gig
              </button>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Recent Activity</h3>
              <div className="space-y-3 mt-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                  <div>
                    <p className="text-sm">New project from <span className="font-medium">TechCorp Inc.</span></p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5"></div>
                  <div>
                    <p className="text-sm">Payment received: <span className="font-medium">$5,800</span></p>
                    <p className="text-xs text-muted-foreground">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></div>
                  <div>
                    <p className="text-sm">Message from <span className="font-medium">ShopMaster</span></p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
