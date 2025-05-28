import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import PageLayout from '../components/layout/PageLayout';
import { Tool } from '../types';
import { useAuth } from '../context/AuthContext';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

export const AdminToolsReviewPage: React.FC = () => {
  const [pendingTools, setPendingTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchPendingTools = async () => {
      try {
        const toolsRef = collection(db, 'tools');
        const q = query(toolsRef, where('status', '==', 'pending'));
        const querySnapshot = await getDocs(q);
        const tools = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Tool));
        setPendingTools(tools);
      } catch (error) {
        console.error('Error fetching pending tools:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingTools();
  }, []);

  const handleToolAction = async (toolId: string, action: 'approve' | 'reject') => {
    try {
      const toolRef = doc(db, 'tools', toolId);
      await updateDoc(toolRef, {
        status: action === 'approve' ? 'approved' : 'rejected',
        reviewedBy: user?.email,
        reviewedAt: new Date().toISOString()
      });
      
      // Update local state
      setPendingTools(current => current.filter(tool => tool.id !== toolId));
    } catch (error) {
      console.error(`Error ${action}ing tool:`, error);
    }
  };

  if (loading) {
    return (
      <PageLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">مراجعة الأدوات المقترحة</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {pendingTools.length === 0 
              ? 'لا توجد أدوات في انتظار المراجعة' 
              : `${pendingTools.length} أدوات في انتظار المراجعة`}
          </p>
        </div>

        <div className="grid gap-6">
          {pendingTools.map((tool) => (
            <div 
              key={tool.id} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-right">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-right">
                    {tool.description}
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1 text-right">
                    <p>التصنيف: {tool.category}</p>
                    <p>الرابط: <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline" dir="ltr">{tool.url}</a></p>
                    <p>مقترح بواسطة: <span dir="ltr">{tool.submittedBy}</span></p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 space-x-reverse mr-6">
                  <button
                    onClick={() => handleToolAction(tool.id, 'approve')}
                    className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md transition-colors"
                  >
                    <ThumbsUp className="ml-2 h-4 w-4" />
                    موافقة
                  </button>
                  <button
                    onClick={() => handleToolAction(tool.id, 'reject')}
                    className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md transition-colors"
                  >
                    <ThumbsDown className="ml-2 h-4 w-4" />
                    رفض
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};