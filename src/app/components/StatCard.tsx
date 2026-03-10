import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  iconColor?: string;
}

export function StatCard({ title, value, change, changeType = 'neutral', icon: Icon, iconColor = 'text-primary' }: StatCardProps) {
  const changeColorClass = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-muted-foreground'
  }[changeType];

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-semibold tracking-tight mb-2">{value}</p>
          {change && (
            <p className={`text-sm ${changeColorClass}`}>
              {change}
            </p>
          )}
        </div>
        <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center ${iconColor}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
