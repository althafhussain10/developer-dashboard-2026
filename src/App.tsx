import { useState } from 'react';
import {
  Activity,
  Database,
  Code2,
  Zap,
  Settings,
  Terminal,
  GitBranch,
  Server,
  BarChart3,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Users,
  FileCode,
  Gauge,
  Cloud,
  Lock,
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'API Requests', value: '1.2M', change: '+12.3%', icon: Activity, trend: 'up' },
    { label: 'Active Users', value: '8,432', change: '+5.2%', icon: Users, trend: 'up' },
    { label: 'Database Size', value: '2.4 GB', change: '+8.1%', icon: Database, trend: 'up' },
    { label: 'Uptime', value: '99.9%', change: '0.0%', icon: Gauge, trend: 'stable' },
  ];

  const services = [
    { name: 'API Gateway', status: 'operational', latency: '45ms', icon: Server },
    { name: 'Database', status: 'operational', latency: '12ms', icon: Database },
    { name: 'Authentication', status: 'operational', latency: '23ms', icon: Lock },
    { name: 'CDN', status: 'operational', latency: '8ms', icon: Cloud },
  ];

  const recentActivity = [
    { action: 'Deployed to production', time: '2 min ago', status: 'success', icon: GitBranch },
    { action: 'Database backup completed', time: '15 min ago', status: 'success', icon: Database },
    { action: 'API rate limit reached', time: '1 hour ago', status: 'warning', icon: AlertCircle },
    { action: 'New user registered', time: '2 hours ago', status: 'info', icon: Users },
  ];

  const quickActions = [
    { label: 'Run Migration', icon: Database, color: 'bg-blue-500' },
    { label: 'Deploy', icon: GitBranch, color: 'bg-green-500' },
    { label: 'View Logs', icon: Terminal, color: 'bg-gray-500' },
    { label: 'API Docs', icon: FileCode, color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Developer Dashboard</h1>
                <p className="text-sm text-gray-500">All your development tools in one place</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <Settings className="w-4 h-4" />
              <span className="text-sm font-medium">Settings</span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="px-6">
          <div className="flex flex-col sm:flex-row gap-1 w-full">
            {['overview', 'analytics', 'database', 'api', 'monitoring'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium capitalize transition-colors border-b-2 ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-6 py-8 max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                  index === 0 ? 'from-blue-500 to-cyan-500' :
                  index === 1 ? 'from-green-500 to-emerald-500' :
                  index === 2 ? 'from-orange-500 to-amber-500' :
                  'from-gray-500 to-slate-500'
                } flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-gray-500'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Services Status */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Server className="w-5 h-5" />
                Services Status
              </h2>
              <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                All Systems Operational
              </span>
            </div>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                      <service.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{service.name}</h3>
                      <p className="text-sm text-gray-500">Latency: {service.latency}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-green-600 capitalize">{service.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activity.status === 'success' ? 'bg-green-100' :
                    activity.status === 'warning' ? 'bg-orange-100' :
                    'bg-blue-100'
                  }`}>
                    <activity.icon className={`w-4 h-4 ${
                      activity.status === 'success' ? 'text-green-600' :
                      activity.status === 'warning' ? 'text-orange-600' :
                      'text-blue-600'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Chart */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Performance Metrics
            </h2>
            <div className="space-y-4">
              {[
                { label: 'CPU Usage', value: 45, color: 'bg-blue-500' },
                { label: 'Memory', value: 67, color: 'bg-green-500' },
                { label: 'Network', value: 32, color: 'bg-orange-500' },
                { label: 'Storage', value: 78, color: 'bg-cyan-500' },
              ].map((metric, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                    <span className="text-sm font-bold text-gray-900">{metric.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full ${metric.color} rounded-full transition-all duration-500`}
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-900">Performance is good</p>
                <p className="text-xs text-blue-700 mt-1">All metrics are within normal ranges</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <p className="text-center text-gray-500 text-sm">Developed by Mohamed Althaf Hussain N</p>
      </footer>
    </div>
  );
}

export default App;
