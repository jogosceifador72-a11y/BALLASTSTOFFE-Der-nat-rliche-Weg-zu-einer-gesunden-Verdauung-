export interface PurchaseNotificationItem {
  id: string;
  timeAgo: string;
  city: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BookChapter {
  number: string;
  title: string;
  subtitle: string;
  pages: string;
  highlights: string[];
}

export interface FiberFoodItem {
  id: string;
  name: string;
  category: 'breakfast' | 'lunch' | 'snack' | 'dinner';
  portion: string;
  fiberGrams: number;
  tip: string;
}
