# TEDx SNIOE 2025 - Supabase Payment System Setup Guide

## Overview
This guide will help you set up the complete payment system using Supabase for your TEDx website. The system allows users to make QR code payments and provides an admin dashboard for approval/decline functionality.

## Prerequisites
- Next.js application (already set up)
- Supabase account
- QR code images for payment

## Step-by-Step Setup

### 1. Supabase Project Setup

1. **Create Supabase Account**
   - Go to [supabase.com](https://supabase.com)
   - Sign up for a free account
   - Create a new project
   - Choose a strong database password

2. **Get API Keys**
   - Once project is ready, go to **Settings** → **API**
   - Copy the following values:
     - Project URL
     - `anon` (public) key
     - `service_role` (secret) key

3. **Set Up Environment Variables**
   - Create `.env.local` file in your project root
   - Add the following variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

### 2. Database Schema Setup

1. **Open SQL Editor** in your Supabase dashboard
2. **Run the schema file**: Copy and paste the entire content from `supabase_schema.sql` and execute it
3. **Update admin email**: Replace `admin@tedxsnioe.com` with your actual admin email in the SQL

### 3. File Storage Setup

1. **Create Storage Bucket**
   - Go to **Storage** in Supabase dashboard
   - Create a new bucket named `payment-screenshots`
   - Make it **public** so URLs are accessible

2. **Set Storage Policies**
   ```sql
   -- Allow anyone to upload files
   CREATE POLICY "Anyone can upload payment screenshots" ON storage.objects
   FOR INSERT WITH CHECK (bucket_id = 'payment-screenshots');

   -- Allow anyone to view files
   CREATE POLICY "Anyone can view payment screenshots" ON storage.objects
   FOR SELECT USING (bucket_id = 'payment-screenshots');
   ```

### 4. User Flow Configuration

The updated user flow is:
1. User fills registration form (`/register`)
2. User is redirected to payment page (`/register/google_pay`)
3. User scans QR code, makes payment, and uploads screenshot with transaction ID
4. User receives immediate receipt and confirmation (`/register/confirm`)
5. Admin reviews payment in background
6. User is only contacted via email if there are issues

**Note**: No email is sent for successful payments - users only hear from you if there's a problem.

1. **Create QR Code Images**
   - Generate QR codes for your payment accounts
   - Create two QR codes:
     - One for SNU students (₹750)
     - One for non-SNU students (₹1300)

2. **Upload QR Codes**
   - Create folder: `public/Images/qr_codes/`
   - Add your QR code images:
     - `snu_750.png`
     - `regular_1300.png`

3. **Update QR Code URLs in Database**
   ```sql
   UPDATE payment_qr_codes 
   SET qr_code_url = '/Images/qr_codes/snu_750.png' 
   WHERE id = 'snu_750';

   UPDATE payment_qr_codes 
   SET qr_code_url = '/Images/qr_codes/regular_1300.png' 
   WHERE id = 'regular_1300';
   ```

### 5. Admin Setup

1. **Update Admin Email**
   - In the database, update the admin_users table:
   ```sql
   UPDATE admin_users 
   SET email = 'your-admin-email@domain.com' 
   WHERE email = 'admin@tedxsnioe.com';
   ```

2. **Access Admin Dashboard**
   - Go to `/admin` on your website
   - Login with your admin email

### 9. Testing the Complete Flow

1. **User Payment Flow**
   - Go to `/register`
   - Fill in user details
   - Select number of people and student type
   - Submit form → redirects to `/register/google_pay`
   - Scan QR code and make payment
   - Upload transaction screenshot and enter transaction ID
   - Submit → redirects to `/register/confirm` with receipt
   - User receives immediate confirmation

2. **Admin Review Flow**
   - Login to `/admin`
   - View pending payments
   - Click "View Details" on any payment
   - Approve or decline with optional notes
   - Only contact users if payment is declined or has issues

### 7. Email Notifications (Optional Enhancement)

To add email notifications when payments are approved/declined:

1. **Install nodemailer**
   ```bash
   npm install nodemailer
   ```

2. **Add email service to API**
   - Update `pages/api/admin/payments.js`
   - Add email sending functionality in the updatePaymentStatus function

### 8. Pricing Configuration

Current pricing structure:
- SNU Students: ₹750 (regardless of 1 or 2 people)
- Non-SNU: ₹1300 (regardless of 1 or 2 people)

To change pricing, update:
1. Frontend calculation in `pages/register/index.js`
2. Database validation if needed

### 9. Security Considerations

1. **Row Level Security (RLS)** is enabled on all tables
2. **Admin authentication** is basic - enhance for production
3. **File upload validation** is implemented (5MB limit, image only)
4. **Transaction ID uniqueness** is enforced

### 10. Deployment Checklist

Before going live:
- [ ] Update all environment variables
- [ ] Replace placeholder QR codes with real ones
- [ ] Test complete payment flow
- [ ] Test admin approval process
- [ ] Set up proper admin authentication
- [ ] Configure email notifications
- [ ] Test on mobile devices

## File Structure

```
pages/
├── register/
│   ├── index.js (updated registration form)
│   ├── google_pay.js (updated to work with Supabase)
│   └── confirm.js (updated with receipt display)
├── admin.js (new admin dashboard)
└── api/
    ├── submit-payment.js (payment submission API)
    ├── qr-code.js (QR code fetching API)
    └── admin/
        └── payments.js (admin payment management API)

lib/
└── supabase.js (Supabase client configuration)

styles/routes/
├── google_pay.scss (existing QR payment page styles)
├── confirm.scss (updated confirmation/receipt styles)
└── admin.scss (updated admin dashboard styles)

supabase_schema.sql (database schema)
```

## Database Tables

1. **payments** - Stores all payment submissions
2. **admin_users** - Manages admin access
3. **payment_qr_codes** - Stores QR code information

## API Endpoints

- `POST /api/submit-payment` - Submit payment with transaction details
- `GET /api/qr-code` - Fetch QR code based on amount/student type
- `GET /api/admin/payments` - Get all payments (admin only)
- `PUT /api/admin/payments` - Update payment status (admin only)

## Support

For issues or questions:
1. Check Supabase dashboard for errors
2. Check browser console for client-side errors
3. Check API responses in Network tab
4. Verify environment variables are set correctly

## Next Steps

1. Test the complete flow thoroughly
2. Add email notifications
3. Enhance admin authentication
4. Add payment analytics
5. Implement backup/export functionality

---

**Note**: This system provides a foundation for QR code-based payments with manual verification. For automated payment processing, consider integrating with payment gateways like Razorpay or Stripe.