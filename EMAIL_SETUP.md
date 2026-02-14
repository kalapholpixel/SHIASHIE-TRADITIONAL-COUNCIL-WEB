# Messages & Supabase Setup

Contact form, council messages, and land inquiries are stored in Supabase.

## Environment Variables

Add these to your `.env.local` file (create it in the project root if it doesn't exist):

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

Get these values from your Supabase project: **Settings → API** in the dashboard.

## Verify Connection

1. **Apply the schema** – Run `supabase_schema.sql` in the Supabase SQL Editor (Dashboard → SQL Editor).
2. **Check env vars** – Restart the dev server after adding or changing `.env.local`.
3. **Test forms** – Submit the Contact form (`/contact`). If it fails, open DevTools → Console for the error.

## Usage

| Form | Table |
|------|-------|
| Contact (`/contact`) | `messages` |
| Message Council (`/message-council`) | `messages` |
| Land Inquiry (`/houses-lands`) | `land_inquiries` |

## Database Schema

- **messages**: `name`, `email`, `phone`, `message`, `created_at`
- **land_inquiries**: `name`, `email`, `phone`, `interest_type`, `message`, `created_at`

See `supabase_schema.sql` for the full schema and RLS policies.
