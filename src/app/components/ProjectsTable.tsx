import { MoreVertical, Clock, CheckCircle2, Circle } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  client: string;
  status: 'in-progress' | 'completed' | 'pending';
  deadline: string;
  budget: string;
  progress: number;
}

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Website Redesign',
    client: 'TechCorp Inc.',
    status: 'in-progress',
    deadline: 'Mar 15, 2026',
    budget: '$4,500',
    progress: 65
  },
  {
    id: '2',
    name: 'Mobile App UI/UX',
    client: 'StartupXYZ',
    status: 'in-progress',
    deadline: 'Mar 20, 2026',
    budget: '$8,200',
    progress: 40
  },
  {
    id: '3',
    name: 'Brand Identity Design',
    client: 'GreenLeaf Co.',
    status: 'pending',
    deadline: 'Mar 25, 2026',
    budget: '$3,000',
    progress: 0
  },
  {
    id: '4',
    name: 'E-commerce Platform',
    client: 'ShopMaster',
    status: 'in-progress',
    deadline: 'Apr 05, 2026',
    budget: '$12,500',
    progress: 80
  },
  {
    id: '5',
    name: 'Dashboard Analytics',
    client: 'DataFlow Systems',
    status: 'completed',
    deadline: 'Mar 08, 2026',
    budget: '$5,800',
    progress: 100
  },
];

export function ProjectsTable() {
  const getStatusBadge = (status: Project['status']) => {
    const styles = {
      'in-progress': {
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        icon: Clock,
        label: 'In Progress'
      },
      'completed': {
        bg: 'bg-green-50',
        text: 'text-green-700',
        icon: CheckCircle2,
        label: 'Completed'
      },
      'pending': {
        bg: 'bg-gray-50',
        text: 'text-gray-700',
        icon: Circle,
        label: 'Pending'
      }
    };

    const { bg, text, icon: Icon, label } = styles[status];

    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium ${bg} ${text}`}>
        <Icon className="w-3.5 h-3.5" />
        {label}
      </span>
    );
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-border">
        <h2 className="text-lg font-semibold">Current Projects</h2>
        <p className="text-sm text-muted-foreground mt-0.5">Track and manage your active projects</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Project
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Client
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Deadline
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Budget
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Progress
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {mockProjects.map((project) => (
              <tr key={project.id} className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-foreground">{project.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-muted-foreground">{project.client}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(project.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-muted-foreground">{project.deadline}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-foreground">{project.budget}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-muted rounded-full h-2 max-w-[120px]">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground min-w-[40px]">{project.progress}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
