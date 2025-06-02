export type ToolCategory = 'Writing' | 'Research' | 'Math' | 'Science' | 'Language Learning' | 'Productivity' | 'Studying' | 'Test Prep' | 'Teaching';
export type ToolPricing = 'Free' | 'Freemium' | 'Paid' | 'Subscription';
export type ToolStatus = 'pending' | 'approved' | 'rejected' | 'approved_pending';

export interface Tool {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  category: ToolCategory;
  url: string;
  imageUrl?: string;
  pricing: ToolPricing;
  tags: string[];
  features: string[];
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  status?: ToolStatus;
  submittedBy: string;
  submittedAt?: string;
  reviewedBy?: string;
  reviewedAt?: string;
  rejectionReason?: string;
  votes?: {
    helpful: string[];
    notHelpful: string[];
  };
  savedBy?: string[]; // Array of user IDs who saved this tool
}