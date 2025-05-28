import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LogOut, User } from 'lucide-react';

const UserProfile: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="relative group">
      <button className="flex items-center space-x-3 space-x-reverse focus:outline-none">
        <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName || 'User profile'}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <User className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          )}
        </div>
        <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
          {user.displayName || 'المستخدم'}
        </span>
      </button>

      {/* Dropdown menu */}
      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">        <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-700">
          <p className="font-medium text-right">{user.displayName || 'المستخدم'}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 truncate text-right" dir="ltr">
            {user.email}
          </p>
        </div>
        <button
          onClick={() => navigate('/profile')}
          className="w-full text-right px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-end"
        >
          <User className="ml-2 h-4 w-4" />
          الملف الشخصي
        </button>
        <button
          onClick={handleLogout}
          className="w-full text-right px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-end"
        >
          <LogOut className="ml-2 h-4 w-4" />
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
};

export default UserProfile;