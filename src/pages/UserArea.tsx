import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { 
  User as UserIcon,
  Settings,
  LogOut,
  Globe
} from 'lucide-react';
import { authApi } from '../lib/api';

export default function UserArea() {
  const { user, logout, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
      return;
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = async () => {
    await authApi.logout();
    logout();
    navigate('/');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserIcon className="w-12 h-12 text-blue-600" />
                </div>
                <h2 className="font-bold text-xl text-slate-900">{user?.name || 'Explorer'}</h2>
                <p className="text-sm text-slate-500">Member since Feb 2026</p>
              </div>
              
              <nav className="space-y-2">
                <button className="w-full flex items-center px-4 py-3 bg-blue-50 text-blue-600 rounded-xl font-bold text-sm">
                  <UserIcon className="w-5 h-5 mr-3" />
                  Profile
                </button>
                <button className="w-full flex items-center px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl font-bold text-sm transition-all">
                  <Settings className="w-5 h-5 mr-3" />
                  Settings
                </button>
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-bold text-sm transition-all mt-8"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white p-12 rounded-[48px] border border-slate-100 shadow-sm text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-4">Welcome back, {user?.name}!</h1>
              <p className="text-slate-500 mb-8 max-w-md mx-auto">
                Ready for your next adventure? Explore our collection of 50 cities and discover the world with Axel & Tino.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/ebooks" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all">
                  Browse Ebooks
                </Link>
                <Link to="/shop" className="inline-flex items-center px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all">
                  Visit Merch Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
