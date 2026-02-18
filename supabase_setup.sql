-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create land_inquiries table
CREATE TABLE IF NOT EXISTS land_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  interest_type VARCHAR(255) NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create donations table
CREATE TABLE IF NOT EXISTS donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  paystack_reference VARCHAR(255) UNIQUE NOT NULL,
  payment_status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX idx_messages_email ON messages(email);
CREATE INDEX idx_messages_created_at ON messages(created_at);

CREATE INDEX idx_land_inquiries_email ON land_inquiries(email);
CREATE INDEX idx_land_inquiries_created_at ON land_inquiries(created_at);

CREATE INDEX idx_donations_email ON donations(email);
CREATE INDEX idx_donations_reference ON donations(paystack_reference);
CREATE INDEX idx_donations_status ON donations(payment_status);
CREATE INDEX idx_donations_created_at ON donations(created_at);

-- Set table access policies (RLS - Row Level Security)
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE land_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read/write access (you can make these more restrictive later)
CREATE POLICY "allow_insert_messages" ON messages FOR INSERT WITH CHECK (true);
CREATE POLICY "allow_read_messages" ON messages FOR SELECT USING (true);

CREATE POLICY "allow_insert_land_inquiries" ON land_inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "allow_read_land_inquiries" ON land_inquiries FOR SELECT USING (true);

CREATE POLICY "allow_insert_donations" ON donations FOR INSERT WITH CHECK (true);
CREATE POLICY "allow_read_donations" ON donations FOR SELECT USING (true);
CREATE POLICY "allow_update_donations" ON donations FOR UPDATE USING (true);
