import React, { createContext, useState, useEffect } from 'react';
import { collection, getDocs, doc, setDoc, onSnapshot, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Tool, FilterOptions } from '../types';
import { filterTools } from '../utils/filterTools';
import { tools as initialTools } from '../data/toolsData';

interface ToolsContextType {
  tools: Tool[];
  isLoading: boolean;
  error: string | null;
  featuredTools: Tool[];
  popularTools: Tool[];
  newTools: Tool[];
  getToolById: (id: string) => Tool | undefined;
  getRelatedTools: (tool: Tool, limit?: number) => Tool[];
  filterToolsByOptions: (options: FilterOptions) => Tool[];
}

export const ToolsContext = createContext<ToolsContextType | null>(null);

const convertFirestoreDoc = (doc: QueryDocumentSnapshot<DocumentData>): Tool => {
  const data = doc.data();
  const id = doc.id; // ID is already padded in Firestore
  return {
    id,
    ...data,
    votes: data.votes || { helpful: [], notHelpful: [] }
  } as Tool;
};

export const ToolsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeTools = async () => {
      try {
        const toolsRef = collection(db, 'tools');
        const snapshot = await getDocs(toolsRef);
        
        if (snapshot.empty) {
          console.log('Initializing Firestore with tools data...');
            // Initialize tools with padded IDs
          for (const tool of initialTools) {
            const paddedId = tool.id.toString().padStart(3, '0');
            const toolDocRef = doc(db, 'tools', paddedId);
            await setDoc(toolDocRef, {
              ...tool,
              id: paddedId, // Update the ID in the tool data as well
              votes: { helpful: [], notHelpful: [] }
            });
          }
          setTools(initialTools);
        } else {
          const fetchedTools = snapshot.docs.map(convertFirestoreDoc);
          setTools(fetchedTools.length > 0 ? fetchedTools : initialTools);
        }
      } catch (err) {
        console.error('Error initializing tools:', err);
        setError('Error initializing tools');
        setTools(initialTools);
      } finally {
        setIsLoading(false);
      }
    };

    initializeTools();

    // Listen for real-time updates
    const unsubscribe = onSnapshot(
      collection(db, 'tools'),
      (snapshot) => {
        const updatedTools = snapshot.docs.map(convertFirestoreDoc);
        setTools(updatedTools);
        setIsLoading(false);
      },
      (err) => {
        console.error('Error listening to tools updates:', err);
        setError('Error listening to tools updates');
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const featuredTools = tools.filter(tool => tool.isFeatured);
  const popularTools = tools.filter(tool => tool.isPopular);
  const newTools = tools.filter(tool => tool.isNew);

  const getToolById = (id: string) => tools.find(tool => tool.id === id);

  const getRelatedTools = (tool: Tool, limit: number = 3) => {
    return tools
      .filter(t => 
        t.id !== tool.id && 
        (t.category === tool.category || 
         t.tags.some(tag => tool.tags.includes(tag)))
      )
      .sort(() => Math.random() - 0.5)
      .slice(0, limit);
  };

  const filterToolsByOptions = (options: FilterOptions) => {
    return filterTools(tools, options);
  };

  const value: ToolsContextType = {
    tools,
    isLoading,
    error,
    featuredTools,
    popularTools,
    newTools,
    getToolById,
    getRelatedTools,
    filterToolsByOptions
  };

  return (
    <ToolsContext.Provider value={value}>
      {children}
    </ToolsContext.Provider>
  );
};
