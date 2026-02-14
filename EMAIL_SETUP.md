# Contact / Email Setup

The contact form stores submissions in the project's Supabase `messages` table. This repository no longer includes an integrated email delivery provider by default — messages are saved to the database for record-keeping and later processing.

## Environment Variables

Add the following to your `.env.local` file:

```env
# Supabase credentials (required)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional: recipient address used by external senders or admin UI
COUNCIL_EMAIL=your_council_inbox@example.com
```

## How It Works

- On form submit, the API route `/api/contact` validates input and stores the submission in Supabase `messages`.
- You may integrate an email provider (SMTP, SendGrid, etc.) or an admin UI to notify the council using the saved messages.

## Testing Locally

1. Ensure `.env.local` contains the Supabase values above.
2. Run `npm run dev` and open `http://localhost:3000/contact`.
3. Submit a test message — it will be saved to Supabase.

## Deploy Notes

- If you want email delivery, add your chosen provider and credentials, then implement sending in `/api/contact/route.ts` or a worker that processes saved messages.
- After removing dependencies, run `npm install` to regenerate `package-lock.json`.
