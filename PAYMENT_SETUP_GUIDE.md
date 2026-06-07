# TEDx Payment System Setup Guide

## Overview
This is a flexible payment management system for TEDx events that supports:
- Variable group sizes (1-20+ people)
- Multiple payment methods (UPI, Cash, Bank Transfer)
- Dynamic pricing rules
- Admin manual entry and approval system
- Screenshot upload for payment verification

## Features

### User Features
- Register for events with flexible participant count
- Multiple pricing tiers based on group size and student status
- QR code payment interface
- Upload payment screenshots for verification
- Email confirmations

### Admin Features
- Review and approve/decline payments
- Manual entry for cash and offline payments
- Dynamic pricing rule management
- Comprehensive payment dashboard
- Export capabilities

## Setup Instructions

### 1. Database Setup (Supabase)

1. Create a new Supabase project at https://supabase.com
2. Run the SQL schema from `supabase_schema.sql` in your Supabase SQL editor
3. Enable Row Level Security on all tables
4. Create a storage bucket named `payment-screenshots` with public read access

### 2. Environment Configuration

1. Copy `.env.example` to `.env.local`
2. Fill in your Supabase credentials:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

### 3. Admin User Setup

1. Go to your Supabase dashboard
2. Insert admin users into the `admin_users` table:
   ```sql
   INSERT INTO admin_users (email, is_super_admin) VALUES 
   ('admin@tedxsnioe.com', true),
   ('tedx@snu.edu.in', false);
   ```

### 4. Pricing Rules Configuration

1. Access the admin dashboard at `/admin`
2. Login with an admin email
3. Use the "Add Manual Entry" feature or set up pricing rules via the API

### 5. Install Dependencies

```bash
npm install @supabase/supabase-js
```

## File Structure

### Core Payment Files
- `pages/register/index.js` - Registration form with flexible participants
- `pages/register/google_pay.js` - QR payment interface
- `pages/admin.js` - Admin dashboard with manual entry
- `lib/supabase.js` - Supabase client configuration

### API Endpoints
- `pages/api/admin/manual-payments.js` - Manual payment management
- `pages/api/admin/pricing-rules.js` - Dynamic pricing rules
- `pages/api/admin/payments.js` - Payment review and status updates

### Database Schema
- `supabase_schema.sql` - Complete database structure with flexible JSONB fields

## Usage Guide

### For Users
1. Visit `/register` to register for the event
2. Add participant details (supports 1-20+ people)
3. Select student status for appropriate pricing
4. Proceed to payment page
5. Scan QR code and make payment
6. Upload transaction screenshot
7. Wait for admin approval

### For Admins
1. Visit `/admin` and login with admin email
2. Review pending payments in the dashboard
3. View payment details and screenshots
4. Approve or decline payments with notes
5. Add manual entries for cash payments
6. Manage pricing rules as needed

## Payment Methods Supported

### UPI (QR Code)
- Users scan QR code
- Enter transaction ID
- Upload screenshot
- Admin verification required

### Cash
- Admin manual entry only
- No transaction ID required
- Instant approval possible

### Bank Transfer
- Manual transaction ID entry
- Admin verification required
- Screenshot optional

### Other
- Flexible for custom payment methods
- Admin discretion for approval

## Pricing Structure

The system supports flexible pricing based on:
- Number of participants
- Student status (SNU vs Non-SNU)
- Special offers and discounts
- Dynamic rule-based pricing

### Example Pricing Rules
```javascript
// 1-2 people: ₹500 per person (Non-SNU), ₹300 per person (SNU)
// 3-4 people: ₹450 per person (Non-SNU), ₹250 per person (SNU)
// 5+ people: ₹400 per person (Non-SNU), ₹200 per person (SNU)
```

## Security Features

- Row Level Security (RLS) on all database tables
- Admin-only access to sensitive operations
- Secure file upload with type validation
- Environment variable protection for API keys
- Input validation and sanitization

## Customization

### Adding New Payment Methods
1. Update the `payment_method` enum in the database
2. Add UI options in registration and admin forms
3. Implement specific validation logic

### Modifying Pricing Rules
1. Use the admin dashboard pricing rules interface
2. Or directly update the `pricing_rules` table
3. Implement custom pricing logic in the registration form

### Extending Participant Fields
The `participants` JSONB field can be extended with additional properties:
```javascript
{
  name: "John Doe",
  email: "john@example.com", 
  phone: "+91-9876543210",
  college: "SNU", // Additional field
  year: "3rd", // Additional field
  dietary_preferences: "Vegetarian" // Additional field
}
```

## Troubleshooting

### Common Issues

1. **Supabase Connection Errors**
   - Verify environment variables
   - Check Supabase project status
   - Ensure RLS policies are correct

2. **Payment Upload Failures**
   - Check storage bucket permissions
   - Verify file size limits
   - Ensure proper CORS configuration

3. **Admin Access Issues**
   - Verify admin user in database
   - Check email spelling
   - Ensure RLS policies allow admin access

### Support
- Check browser console for error messages
- Verify all environment variables are set
- Test with a fresh Supabase project if issues persist

## API Reference

### Manual Payment Entry
```javascript
POST /api/admin/manual-payments
{
  participants: [{ name: "John", email: "john@example.com", phone: "1234567890" }],
  number_of_people: 1,
  is_snu_student: false,
  total_amount: "500",
  payment_method: "cash",
  transaction_id: "",
  status: "approved",
  review_notes: "Cash payment received"
}
```

### Payment Status Update
```javascript
PUT /api/admin/payments
{
  paymentId: "uuid",
  status: "approved",
  reviewNotes: "Payment verified",
  reviewedBy: "admin@example.com"
}
```

This flexible system can handle events of any size and payment complexity while maintaining admin control and user experience.