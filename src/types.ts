export type CategoryType = 'lifestyle' | 'comedy' | 'brand';

export interface VideoItem {
  id: string;
  category: CategoryType;
  title: string;
  description?: string;
  videoUrl: string;
  thumbnailUrl: string;
  views: string;
  likes?: string;
  comments?: string;
  shares?: string;
  duration?: string;
  brand?: string;
  embedType?: 'direct' | 'youtube' | 'instagram' | 'tiktok' | 'custom';
}

export interface AnalyticsMetric {
  id: string;
  label: string;
  value: string;
  subtext: string;
  iconName: string;
  trend?: string;
  highlight?: boolean;
}

export interface AnalyticsScreenshot {
  id: string;
  key: 'views' | 'reach' | 'audience' | 'engagement' | 'followers';
  title: string;
  description: string;
  imageUrl?: string;
  dateRange: string;
}

export interface PartnerBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  turnaround: string;
  popular?: boolean;
  icon: string;
}

export interface CreatorProfile {
  name: string;
  tagline: string;
  bio1: string;
  bio2: string;
  email: string;
  phone: string;
  portraitUrl: string;
  aboutPortraitUrl?: string;
  instagramHandle: string;
  instagramUrl: string;
  tiktokHandle: string;
  tiktokUrl: string;
  location: string;
}

export interface CampaignInquiry {
  brandName: string;
  contactName: string;
  email: string;
  phone?: string;
  serviceType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}
