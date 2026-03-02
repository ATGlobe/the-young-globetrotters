import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  ShieldAlert,
  Loader2
} from 'lucide-react';
import { adminApi } from '../lib/api';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const { user, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const [stats, setStats] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!isAuthenticated || user?.role !== 'admin') {
      navigate('/');
      return;
    }

    const fetchStats = async () => {
      try {
        const data = await adminApi.getStats();
        setStats(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [isAuthenticated, user, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
          <p className="text-slate-500">Overview of your ebook empire</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            { label: 'Total Sales', value: `$${stats?.totalSales?.total?.toFixed(2) || '0.00'}`, icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50', trend: '+12.5%' },
            { label: 'Total Orders', value: stats?.totalOrders?.count || '0', icon: ShoppingBag, color: 'text-blue-600', bg: 'bg-blue-50', trend: '+5.2%' },
            { label: 'Active Users', value: '1,284', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50', trend: '+18.1%' },
            { label: 'Security Alerts', value: '0', icon: ShieldAlert, color: 'text-red-600', bg: 'bg-red-50', trend: '0%' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`${stat.bg} ${stat.color} p-3 rounded-2xl`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                  <ArrowUpRight className="w-3 h-3 mr-1" />
                  {stat.trend}
                </div>
              </div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Recent Activity */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[48px] border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-xl font-bold text-slate-900">Security & Audit Logs</h3>
                <button className="text-sm font-bold text-blue-600 hover:underline">View All</button>
              </div>
              <div className="divide-y divide-slate-50">
                {stats?.recentLogs?.map((log: any) => (
                  <div key={log.id} className="p-6 flex items-center gap-4">
                    <div className="bg-slate-50 p-2 rounded-xl">
                      <Activity className="w-5 h-5 text-slate-400" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-bold text-slate-900">{log.action}</p>
                      <p className="text-xs text-slate-500">{log.details}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-400">{new Date(log.created_at).toLocaleTimeString()}</p>
                      <p className="text-[10px] text-slate-300">{log.ip_address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Management Form */}
            <div className="bg-white rounded-[48px] border border-slate-100 shadow-sm p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-8">Add New Activity</h3>
              <form onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());
                try {
                  await adminApi.createActivity(data);
                  alert('Activity created!');
                  (e.target as HTMLFormElement).reset();
                } catch (err: any) {
                  alert(err.message);
                }
              }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input name="title" placeholder="Title" required className="bg-slate-50 p-4 rounded-2xl border border-slate-100" />
                <select name="type" required className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <option value="coloring">Coloring Page</option>
                  <option value="comics">Comics</option>
                  <option value="game">Game</option>
                  <option value="pack">Activity Pack</option>
                </select>
                <select name="category" required className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <option value="free">Free</option>
                  <option value="premium">Premium (Buyers Only)</option>
                </select>
                <input name="city" placeholder="City" className="bg-slate-50 p-4 rounded-2xl border border-slate-100" />
                <input name="difficulty" placeholder="Difficulty (easy/medium/hard)" className="bg-slate-50 p-4 rounded-2xl border border-slate-100" />
                <input name="age_group" placeholder="Age Group (e.g. 6-8)" className="bg-slate-50 p-4 rounded-2xl border border-slate-100" />
                <input name="file_key" placeholder="S3 File Key" required className="bg-slate-50 p-4 rounded-2xl border border-slate-100" />
                <input name="image_url" placeholder="Preview Image URL" required className="bg-slate-50 p-4 rounded-2xl border border-slate-100" />
                <textarea name="description" placeholder="Description" className="md:col-span-2 bg-slate-50 p-4 rounded-2xl border border-slate-100 h-32" />
                <button type="submit" className="md:col-span-2 bg-blue-600 text-white font-bold py-4 rounded-2xl hover:bg-blue-700 transition-all">
                  Create Activity
                </button>
              </form>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900 rounded-[48px] p-8 text-white">
              <h3 className="text-xl font-bold mb-8">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-bold text-sm transition-all text-left px-6 flex items-center justify-between group">
                  Upload New Volume
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </button>
                <button className="w-full py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-bold text-sm transition-all text-left px-6 flex items-center justify-between group">
                  Manage Users
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </button>
                <button className="w-full py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-bold text-sm transition-all text-left px-6 flex items-center justify-between group">
                  System Settings
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
