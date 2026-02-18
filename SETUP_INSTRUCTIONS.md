# Shiashie Traditional Council Website - Setup Instructions

## Overview
This is a professional, responsive website for Shiashie Traditional Council with secure form handling, property listings, and Paystack donation integration.

## Tech Stack
- **Frontend**: Next.js 14 + React + TypeScript + Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth)
- **Payments**: Paystack
- **Hosting**: Vercel or Netlify

## Prerequisites
1. Node.js 18+ installed
2. Supabase account (https://supabase.com)
3. Paystack account (https://paystack.com)
4. Git installed

## Step 1: Set Up Supabase Database

1. Go to [Supabase](https://supabase.com) and create a new project
2. Once the project is created, go to the SQL Editor
3. Copy the entire content of `supabase_setup.sql` and run it in the SQL Editor
4. This will create all necessary tables with proper indexes and security policies

### Verify Database Setup
- Go to **Table Editor** in Supabase and confirm you see:
  - `messages`
  - `land_inquiries`
  - `donations`

## Step 2: Get Supabase Credentials

1. Go to **Settings** → **API**
2. Copy:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role secret` key → `SUPABASE_SERVICE_KEY`

## Step 3: Set Up Paystack

1. Go to [Paystack Dashboard](https://dashboard.paystack.com)
2. Go to **Settings** → **API Keys & Webhooks**
3. Copy:
   - Public Key → `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`
   - Secret Key → `PAYSTACK_SECRET_KEY`
4. Add webhook URL: `https://yourdomain.com/api/webhooks/paystack` (update this after deployment)

## Step 4: Configure Environment Variables

1. Create a `.env.local` file in the project root
2. Add the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
SUPABASE_SERVICE_KEY=your_supabase_service_key
PAYSTACK_SECRET_KEY=your_paystack_secret_key
```

**IMPORTANT**: Never commit `.env.local` to version control. Use `.env.example` for reference.

## Step 5: Install Dependencies and Run Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see your website.

## Step 6: Customize Content

### Update Contact Information
- Edit `/src/components/Footer.tsx` to update:
  - Email address
  - Phone number
  - Physical address
  - Social media links

### Update Navigation
- Edit `/src/components/Navigation.tsx` if you need to change links or branding

### Customize Home Page
- Edit `/src/app/page.tsx` to update hero text, statistics, and content

### Update Properties
- Edit `/src/app/houses-lands/page.tsx` to add/remove property listings

### Update Team Members
- Edit `/src/app/about/page.tsx` to update leadership information

## Step 7: Test Forms and Payments

1. **Test Contact Form**:
   - Go to Contact Us page
   - Fill in the form
   - Verify data appears in Supabase → `messages` table

2. **Test Property Inquiry**:
   - Go to Houses & Lands page
   - Click "Express Interest" on a property
   - Verify data appears in Supabase → `land_inquiries` table

3. **Test Donation**:
   - Go to Donate page
   - Enter test details
   - Use Paystack test card: `4111111111111111` (CVV: any 3 digits)
   - Verify data appears in Supabase → `donations` table

## Step 8: Deploy to Vercel

### Option A: Deploy with Git (Recommended)

1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/shiashie-council.git
   git push -u origin main
   ```

2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables in Vercel settings
5. Deploy!

### Option B: Deploy with Netlify

1. Push code to GitHub (same steps as above)
2. Go to [Netlify](https://netlify.com)
3. Connect your GitHub repository
4. Add environment variables in Site Settings
5. Deploy!

## Step 9: Configure Domain

1. Update your domain DNS to point to your hosting provider
2. For Vercel: Follow [domain configuration guide](https://vercel.com/docs/concepts/projects/domains)
3. For Netlify: Follow [domain configuration guide](https://docs.netlify.com/domains-https/custom-domains)

## Step 10: Post-Deployment

1. **Update Webhook URL**:
   - Go to Paystack Dashboard
   - Update webhook URL to: `https://yourdomain.com/api/webhooks/paystack`

2. **Enable SSL/HTTPS**:
   - Both Vercel and Netlify provide free SSL certificates
   - Ensure HTTPS is enabled in your domain settings

3. **Test Live Website**:
   - Verify all forms work
   - Test donation with real Paystack keys
   - Check email notifications (you may need to configure email service)

4. **Set Up Email Notifications** (Optional):
   - Configure nodemailer or a similar service
   - Update `/src/app/api/donations/verify/route.ts` to send email receipts

## Security Best Practices

1. ✅ **Environment Variables**: Keep API keys in `.env.local` and configure in deployment platform
2. ✅ **Input Validation**: All forms validate email, phone, and amounts on both client and server
3. ✅ **Rate Limiting**: Simple rate limiting implemented (5 requests/hour for messages)
4. ✅ **Webhook Verification**: Paystack webhooks are verified with signature check
5. ✅ **SQL Injection Prevention**: Using Supabase client which prevents SQL injection
6. ✅ **HTTPS**: Enabled automatically by hosting providers
7. ⚠️ **CORS**: May need to configure if accessing from different domain

## Maintenance

### Regular Tasks
- Monitor form submissions and inquiries
- Review donation records and payment statuses
- Update property listings as needed
- Respond to messages and inquiries promptly

### Database Backups
- Supabase automatically backs up your data
- Download backups from Supabase dashboard as needed

### Monitoring
- Monitor API error logs in the deployment platform
- Check Paystack dashboard for payment issues
- Set up email alerts for critical errors (optional)

## Troubleshooting

### Forms Not Submitting
1. Check browser console for errors
2. Verify Supabase credentials in `.env.local`
3. Check Supabase table policies allow INSERT

### Paystack Integration Not Working
1. Verify public key in code
2. Check browser console for PaystackPop errors
3. Test with Paystack test card

### Database Connection Issues
1. Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
2. Check Supabase project is active
3. Test connection in Supabase studio

### Deployment Issues
1. Check build logs in Vercel/Netlify
2. Verify all environment variables are set
3. Test locally before deploying

## Future Enhancements

- [ ] Add email notification system for donors and admins
- [ ] Implement admin dashboard for managing properties and messages
- [ ] Add image gallery to property listings
- [ ] Implement user accounts and membership system
- [ ] Add blog/news section
- [ ] Add event calendar
- [ ] Implement multi-language support
- [ ] Add SMS notifications for inquiries
- [ ] Set up analytics and reporting

## Support

For issues or questions:
1. Check Supabase documentation: https://supabase.com/docs
2. Check Next.js documentation: https://nextjs.org/docs
3. Check Paystack documentation: https://paystack.com/developers
4. Contact the development team

## License

This project is proprietary to Shiashie Traditional Council.
