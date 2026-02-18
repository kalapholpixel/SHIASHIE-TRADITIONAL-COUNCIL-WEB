export interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

export interface LandInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest_type: string;
  message: string;
  created_at: string;
}

export interface Donation {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  amount: number;
  paystack_reference: string;
  payment_status: 'pending' | 'completed' | 'failed';
  created_at: string;
}

export interface PropertyListing {
  id: string;
  title: string;
  location: string;
  type: string;
  price: string;
  description: string;
  image_url: string;
}
