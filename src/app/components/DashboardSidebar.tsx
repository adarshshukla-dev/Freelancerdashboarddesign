import { LayoutDashboard, Briefcase, DollarSign, MessageSquare, Settings, HelpCircle, User } from 'lucide-react';

interface NavItem {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

export function DashboardSidebar() {
  const mainNav: NavItem[] = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Briefcase, label: 'My Gigs', active: false },
    { icon: DollarSign, label: 'Earnings', active: false },
    { icon: MessageSquare, label: 'Messages', active: false },
  ];

  const secondaryNav: NavItem[] = [
    { icon: Settings, label: 'Settings', active: false },
    { icon: HelpCircle, label: 'Help', active: false },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-card flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-sm">A</span>
          </div>
          <span className="font-semibold text-lg tracking-tight">Adoragigs</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        <div className="space-y-1">
          {mainNav.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                item.active
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-1">
          {secondaryNav.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-border">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-all">
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
            <User className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-medium">Sarah Johnson</p>
            <p className="text-xs text-muted-foreground">Pro Designer</p>
          </div>
        </button>
      </div>
    </aside>
  );
}
