# Email Setup Guide

This application sends contact form messages to the configured council email (use a test inbox during development).

## Environment Variables

To enable email functionality, add the following to your `.env.local` file:

```env
# Resend Email Service
RESEND_API_KEY=your_resend_api_key_here
```

You can also configure the recipient (council) email address for testing or production:

```env
# Recipient (council) email address. For Resend testing use any `@yanorei.resend.app` inbox.
COUNCIL_EMAIL=shiashie@yanorei.resend.app
```

### Getting a Resend API Key

1. Go to https://resend.com
2. Sign up for a free account
3. Navigate to the API Keys section
4. Create a new API key
5. Copy and paste it into your `.env.local` file

## How It Works

When a user submits the contact form:

1. **Email is sent** to the configured `COUNCIL_EMAIL` via Resend with:
   - Sender's name, email, and phone
   - The message body
   - Formatted as a professional email

2. **Backup storage** in Supabase database (`messages` table) for:
   - Record keeping
   - Admin dashboard access
   - Fallback if email delivery fails

## Email Configuration

- **From address**: onboarding@resend.dev (for testing) — replace with your verified sender in production
- **To address**: the `COUNCIL_EMAIL` environment variable (e.g. `shiashie@yanorei.resend.app` for testing)
- **API route**: `/api/contact` (handles POST requests)
- **Method**: Server-side API route for secure API key handling

## Testing Locally

1. Make sure `.env.local` has `RESEND_API_KEY` set
2. Run `npm run dev`
3. Visit http://localhost:3000/contact
4. Submit a test message
5. Check the council's email inbox

## Resend Free Tier Limits

- 100 emails per day
- Perfect for a council contact form
- Upgrade anytime if needed
