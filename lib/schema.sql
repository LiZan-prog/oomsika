-- Create properties table
CREATE TABLE properties (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  image TEXT NOT NULL,
  price_zwm INTEGER NOT NULL,
  rooms INTEGER NOT NULL,
  bathrooms INTEGER NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('house', 'lodge', 'hotel')),
  owner_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to read properties
CREATE POLICY "Anyone can view properties" ON properties FOR SELECT USING (true);

-- Policy to allow authenticated users to insert their own properties
CREATE POLICY "Users can insert their own properties" ON properties FOR INSERT WITH CHECK (auth.uid() = owner_id);

-- Policy to allow users to update their own properties
CREATE POLICY "Users can update their own properties" ON properties FOR UPDATE USING (auth.uid() = owner_id);

-- Policy to allow users to delete their own properties
CREATE POLICY "Users can delete their own properties" ON properties FOR DELETE USING (auth.uid() = owner_id);