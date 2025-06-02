export type ToolStatus = 'pending' | 'approved' | 'rejected' | 'approved_pending';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  pricing: string;
  tags: string[];
  submittedBy: string;
  submittedAt: string;
  status: ToolStatus;
  reviewedBy?: string;
  reviewedAt?: string;
  rejectionReason?: string;
  rating: number;
  reviewCount: number;
  votes: {
    helpful: string[];
    notHelpful: string[];
  };
}