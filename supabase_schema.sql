-- Create messages table
CREATE TABLE messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create land_inquiries table
CREATE TABLE land_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  interest_type TEXT CHECK (interest_type IN ('House', 'Land', 'Both')),
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE land_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert messages (public contact form)
CREATE POLICY "Allow public inserts to messages" 
ON messages FOR INSERT 
WITH CHECK (true);

-- Allow admins (authenticated users) to view messages
CREATE POLICY "Allow authenticated access to messages" 
ON messages FOR SELECT 
TO authenticated 
USING (true);

-- Allow anyone to insert inquiries (public inquiry form)
CREATE POLICY "Allow public inserts to land_inquiries" 
ON land_inquiries FOR INSERT 
WITH CHECK (true);

-- Allow admins (authenticated users) to view inquiries
CREATE POLICY "Allow authenticated access to land_inquiries" 
ON land_inquiries FOR SELECT 
TO authenticated 
USING (true);
