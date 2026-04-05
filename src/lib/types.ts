export type ServiceCategory =
  | 'administrative'
  | 'education'
  | 'social'
  | 'culture'
  | 'environment'
  | 'safety';

export type ServiceStatus = 'online' | 'inPerson' | 'mixed';

export interface Service {
  id: string;
  category: ServiceCategory;
  icon: string;
  estimatedTime: string;
  requiredDocs: string[];
  status: ServiceStatus;
  url?: string;
}

export type ReportCategory =
  | 'infrastructure'
  | 'cleanliness'
  | 'safety'
  | 'noise'
  | 'greenSpaces'
  | 'other';

export type ReportStatus = 'received' | 'underReview' | 'inProgress' | 'resolved';

export interface Report {
  id: string;
  category: ReportCategory;
  title: string;
  description: string;
  location: string;
  status: ReportStatus;
  date: string;
  votes: number;
}

export type EventCategory =
  | 'culture'
  | 'sports'
  | 'family'
  | 'senior'
  | 'community';

export interface CommuneEvent {
  id: string;
  category: EventCategory;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  image?: string;
}

export interface CouncilDecision {
  id: string;
  title: string;
  summary: string;
  date: string;
  result: 'approved' | 'rejected' | 'pending';
  votesFor: number;
  votesAgainst: number;
  abstentions: number;
}

export interface BudgetItem {
  category: string;
  amount: number;
  color: string;
}

export interface Department {
  id: string;
  icon: string;
  phone: string;
  email: string;
  hours: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}
