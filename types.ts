export interface ServiceItem {
  id: string;
  title: string;
  duration: number; // minutes
  price: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingState {
  serviceId: string | null;
  date: Date | null;
  timeSlot: string | null;
  name: string;
  email: string;
  inquiry: string;
}