-- Supabase Database Schema for TEDx Payment System

-- Create payments table (flexible for any number of people and pricing)
CREATE TABLE payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Flexible user information (stored as JSON for any number of people)
  participants JSONB NOT NULL, -- [{name, email, phone}, {name, email, phone}, ...]
  
  -- Payment details
  number_of_people INTEGER NOT NULL CHECK (number_of_people > 0),
  is_snu_student BOOLEAN NOT NULL DEFAULT false,
  total_amount DECIMAL(10, 2) NOT NULL,
  price_per_person DECIMAL(10, 2),
  offer_type VARCHAR(100), -- 'regular', 'early_bird', 'group_discount', etc.
  
  -- Transaction information
  transaction_id VARCHAR(255) UNIQUE, -- Can be null for cash payments
  transaction_screenshot_url TEXT,
  payment_method VARCHAR(50) NOT NULL DEFAULT 'upi' CHECK (payment_method IN ('upi', 'cash', 'bank_transfer', 'other')),
  
  -- Payment status
  status VARCHAR(50) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'declined')),
  
  -- Admin review
  reviewed_by VARCHAR(255),
  reviewed_at TIMESTAMP WITH TIME ZONE,
  review_notes TEXT,
  
  -- QR code reference (for UPI payments)
  qr_code_id VARCHAR(100),
  
  -- Manual entry tracking
  manually_added BOOLEAN DEFAULT false,
  added_by VARCHAR(255) -- Admin who manually added this entry
);

-- Create indexes for better performance
CREATE INDEX idx_payments_status ON payments(status);
CREATE INDEX idx_payments_created_at ON payments(created_at);
CREATE INDEX idx_payments_transaction_id ON payments(transaction_id);

-- Create admin users table
CREATE TABLE admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default admin (replace with your email)
INSERT INTO admin_users (email, name) VALUES ('admin@tedxsnioe.com', 'TEDx Admin');

-- Create pricing rules table (dynamic pricing management)
CREATE TABLE pricing_rules (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  rule_name VARCHAR(100) NOT NULL,
  description TEXT,
  
  -- Conditions
  min_people INTEGER DEFAULT 1,
  max_people INTEGER DEFAULT 10,
  is_snu_student BOOLEAN,
  
  -- Pricing
  price_per_person DECIMAL(10, 2) NOT NULL,
  total_price DECIMAL(10, 2), -- If set, overrides price_per_person calculation
  
  -- Validity
  valid_from TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  valid_until TIMESTAMP WITH TIME ZONE,
  is_active BOOLEAN DEFAULT true,
  
  -- Admin tracking
  created_by VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default pricing rules
INSERT INTO pricing_rules (rule_name, description, min_people, max_people, is_snu_student, price_per_person, created_by) VALUES
('SNU Student Regular', 'Regular pricing for SNU students', 1, 10, true, 750.00, 'system'),
('Non-SNU Regular', 'Regular pricing for non-SNU participants', 1, 10, false, 1300.00, 'system');

-- Create payment_qr_codes table (flexible QR code management)
CREATE TABLE payment_qr_codes (
  id VARCHAR(100) PRIMARY KEY,
  qr_name VARCHAR(100) NOT NULL,
  amount_range_min DECIMAL(10, 2),
  amount_range_max DECIMAL(10, 2),
  qr_code_url TEXT NOT NULL,
  payment_method VARCHAR(50) NOT NULL DEFAULT 'UPI',
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert flexible QR codes
INSERT INTO payment_qr_codes (id, qr_name, amount_range_min, amount_range_max, qr_code_url, payment_method, description) VALUES
('general_qr', 'General Payment QR', 0, 999999, '/Images/Assets/google_pay.png', 'UPI', 'General QR code for all payments');

-- Enable Row Level Security (RLS)
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_qr_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE pricing_rules ENABLE ROW LEVEL SECURITY;

-- Create policies for payments table
CREATE POLICY "Anyone can insert payments" ON payments
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can view payments" ON payments
  FOR SELECT USING (true);

CREATE POLICY "Only admins can update payments" ON payments
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = auth.jwt() ->> 'email'
    )
  );

CREATE POLICY "Only admins can delete payments" ON payments
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = auth.jwt() ->> 'email'
    )
  );

-- Create policies for admin_users table
CREATE POLICY "Only authenticated admins can view admin_users" ON admin_users
  FOR SELECT USING (
    email = auth.jwt() ->> 'email'
  );

-- Create policies for payment_qr_codes table
CREATE POLICY "Anyone can view active QR codes" ON payment_qr_codes
  FOR SELECT USING (is_active = true);

CREATE POLICY "Only admins can manage QR codes" ON payment_qr_codes
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = auth.jwt() ->> 'email'
    )
  );

-- Create policies for pricing_rules table
CREATE POLICY "Anyone can view active pricing rules" ON pricing_rules
  FOR SELECT USING (is_active = true);

CREATE POLICY "Only admins can manage pricing rules" ON pricing_rules
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = auth.jwt() ->> 'email'
    )
  );

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_payments_updated_at 
  BEFORE UPDATE ON payments 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();