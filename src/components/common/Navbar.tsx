import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  BookOpen, 
  Search, 
  Menu, 
  X,
  Moon,
  Sun,
  CircleUserRound
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import UserProfile from '../auth/UserProfile';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { t } = useTranslation();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { user } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <BookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400 hover:scale-110 transition-transform" />
            <span className="mx-3 text-xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Zakerly </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:justify-center flex-1">
            <div className="flex space-x-12 space-x-reverse">
              <Link 
                to="/" 
                className="relative text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 inline-flex items-center px-3 pt-1 text-sm font-medium transition-colors after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-transform hover:after:scale-x-100"
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/tools" 
                className="relative text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 inline-flex items-center px-3 pt-1 text-sm font-medium transition-colors after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-transform hover:after:scale-x-100"
              >
                {t('nav.tools')}
              </Link>
              <Link 
                to="/about" 
                className="relative text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 inline-flex items-center px-3 pt-1 text-sm font-medium transition-colors after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-transform hover:after:scale-x-100"
              >
                {t('nav.about')}
              </Link>
            </div>
          </div>
          
          {/* Desktop Actions */}
          <div className="hidden sm:flex sm:items-center sm:ml-6 sm:space-x-4 sm:space-x-reverse">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 dark:text-gray-400 dark:hover:text-indigo-400 dark:hover:bg-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button 
              onClick={toggleSearch}
              className="p-2 rounded-full text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 dark:text-gray-400 dark:hover:text-indigo-400 dark:hover:bg-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <Search className="h-5 w-5" />
            </button>
            
            {user ? (
              <UserProfile />
            ) : (
              <Link 
                to="/auth"                className="inline-flex items-center px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
              >
                <CircleUserRound className="ml-2 h-5 w-5" />
                ابدأ الآن
              </Link>
            )}
          </div>
          
          {/* Mobile Actions */}
          <div className="flex items-center gap-2 sm:hidden">
            {!user && (
              <Link 
                to="/auth"                className="inline-flex items-center p-2 bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                aria-label="تسجيل الدخول"
              >
                <CircleUserRound className="h-5 w-5" />
              </Link>
            )}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 dark:text-gray-400 dark:hover:text-indigo-400 dark:hover:bg-gray-700 transition-all"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link 
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/tools"
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                {t('nav.tools')}
              </Link>
              <Link 
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                {t('nav.about')}
              </Link>
            </div>
            {user && (
              <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
                <UserProfile />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute inset-x-0 top-full bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900 p-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder={t('search.placeholder')}
                className="w-full pl-4 pr-10 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 text-right placeholder-gray-500 dark:placeholder-gray-400"
                dir="rtl"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;