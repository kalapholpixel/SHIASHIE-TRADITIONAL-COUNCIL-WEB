# Shiashie Traditional Council Website

A professional, responsive, and secure website for Shiashie Traditional Council featuring donation capabilities, property listings, and secure form handling.

## Features

✨ **Key Features**
- 🏠 Professional multi-page website (Home, About, Contact, Message, Properties, Donate)
- 💳 Secure Paystack payment integration for donations
- 📝 Secure contact and inquiry forms with database storage
- 🏘️ Property listings with inquiry system
- 📱 Mobile-first responsive design
- 🔒 Server-side form validation and rate limiting
- 🌐 SEO-friendly structure
- ⚡ Fast loading performance
- ♿ Accessibility best practices

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Payments**: Paystack
- **Hosting**: Vercel or Netlify

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account
- Paystack account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shiashie-council-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Follow instructions in `SETUP_INSTRUCTIONS.md` Step 1-2
   - Run SQL setup script from `supabase_setup.sql`

4. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your credentials
   ```

5. **Run locally**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`

### Full Setup Guide

For detailed setup instructions including:
- Supabase configuration
- Paystack integration
- Deployment to Vercel/Netlify
- Customizing content
- Security configuration

**See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)**

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── message/           # Message council page
│   ├── houses-lands/      # Properties page
│   ├── donate/            # Donation page
│   ├── api/               # API routes
│   │   ├── messages/      # Message form handler
│   │   ├── land-inquiries/ # Property inquiry handler
│   │   ├── donations/     # Donation handlers
│   │   └── webhooks/      # Paystack webhook
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Footer.tsx         # Footer
│   ├── ContactForm.tsx    # Contact form
│   ├── PropertyCard.tsx   # Property listing card
│   └── DonationForm.tsx   # Donation form
├── lib/                   # Utility functions
│   ├── supabase.ts       # Supabase client
│   ├── paystack.ts       # Paystack utilities
│   └── validation.ts     # Form validation
└── types/                # TypeScript types
    └── index.ts          # Shared types
```

## Pages Overview

### 🏠 Home Page
- Hero section with call-to-action
- Community impact statistics
- Service overview cards
- Donation promotion

### ℹ️ About Us
- Organization history
- Mission and vision
- Core values
- Leadership team

### 📧 Contact Us
- Contact information
- Contact form
- Office hours
- Location details

### 💬 Message the Council
- Direct messaging to leadership
- Guidelines for messaging
- Emergency contact information

### 🏘️ Houses & Lands
- Property listings with details
- Property inquiry forms
- How to acquire property guide
- Featured properties

### 💚 Donate
- Donation form with preset amounts
- Custom donation option
- Paystack payment integration
- Impact information
- FAQ section

## Security Features

- ✅ Server-side form validation
- ✅ Input sanitization
- ✅ Rate limiting (5 messages/hour)
- ✅ Paystack webhook signature verification
- ✅ HTTPS enabled
- ✅ Environment variable protection
- ✅ CORS configuration ready

## API Endpoints

### POST /api/messages
Send contact message
- Body: `{ name, email, phone, message }`

### POST /api/land-inquiries
Submit property inquiry
- Body: `{ name, email, phone, interest_type, message }`

### POST /api/donations/initialize
Initialize donation
- Body: `{ fullName, email, phone, amount }`

### POST /api/donations/verify
Verify Paystack payment
- Body: `{ reference, email }`

### POST /api/webhooks/paystack
Paystack webhook handler (automatic)

## Database Schema

### messages table
- id (UUID)
- name (VARCHAR)
- email (VARCHAR)
- phone (VARCHAR)
- message (TEXT)
- created_at (TIMESTAMP)

### land_inquiries table
- id (UUID)
- name (VARCHAR)
- email (VARCHAR)
- phone (VARCHAR)
- interest_type (VARCHAR)
- message (TEXT)
- created_at (TIMESTAMP)

### donations table
- id (UUID)
- full_name (VARCHAR)
- email (VARCHAR)
- phone (VARCHAR)
- amount (DECIMAL)
- paystack_reference (VARCHAR)
- payment_status (VARCHAR)
- created_at (TIMESTAMP)

## Customization

### Update Organization Info
- Edit contact details in `src/components/Footer.tsx`
- Update phone numbers and email addresses
- Add social media links

### Add/Edit Properties
- Edit property list in `src/app/houses-lands/page.tsx`
- Update property details, prices, and descriptions

### Update Team Info
- Edit leadership in `src/app/about/page.tsx`
- Add photos (placeholder divs ready)

### Change Colors/Branding
- Update Tailwind config in `tailwind.config.js`
- Modify color variables (primary, secondary, accent, gold)
- Custom fonts already configured

## Deployment

### Deploy to Vercel
```bash
npm run build
vercel
```

### Deploy to Netlify
```bash
npm run build
netlify deploy
```

[See detailed deployment instructions](./SETUP_INSTRUCTIONS.md#step-8-deploy-to-vercel)

## Testing

### Manual Testing Checklist
- [ ] Contact form submits and saves to database
- [ ] Property inquiry form works
- [ ] Donation form opens Paystack modal
- [ ] Test payment with Paystack test card: `4111111111111111`
- [ ] Donation recorded in database
- [ ] All pages are responsive on mobile
- [ ] Navigation works on mobile (hamburger menu)
- [ ] All links are functional

### Test Paystack Payment
Use these test credentials:
- Card: `4111111111111111`
- CVV: Any 3 digits
- Date: Any future date

## Environment Variables

Required variables (see `.env.example`):
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
SUPABASE_SERVICE_KEY
PAYSTACK_SECRET_KEY
```

## Performance

- ⚡ Image optimization with Next.js
- 🚀 Code splitting and lazy loading
- 📦 Tailwind CSS for minimal CSS
- 🎯 SEO-friendly URLs and metadata
- 📱 Mobile-optimized responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - Shiashie Traditional Council

## Support & Maintenance

For assistance with:
- Setup issues: See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)
- Development: Check [Next.js docs](https://nextjs.org)
- Payments: Check [Paystack docs](https://paystack.com/developers)
- Database: Check [Supabase docs](https://supabase.com/docs)

## Future Roadmap

- Admin dashboard for content management
- Email notification system
- Multi-language support
- Blog/news section
- Event calendar
- User accounts and membership system
- Analytics and reporting

---

**Made with ❤️ for Shiashie Traditional Council**
