# CartCloudy - Premium Digital Subscriptions Store

A modern e-commerce platform for digital subscriptions built with Next.js 15, TypeScript, Tailwind CSS, and Supabase.

![CartCloudy](https://img.shields.io/badge/CartCloudy-Premium%20Digital%20Subscriptions-6366f1)

## Features

- **Modern UI/UX**: Deepest dark mode design with glassmorphism effects
- **Multi-Currency Support**: USD, PKR, INR with auto-detection based on location
- **WhatsApp Checkout**: Direct order via WhatsApp with pre-filled message
- **Responsive Design**: Mobile-first approach with touch-friendly interfaces
- **Product Catalog**: 29+ digital products across 6 categories
- **Plan Selection**: Multiple subscription plans with pricing tiers
- **Cart Management**: Persistent cart with Zustand state management
- **Search & Filter**: Real-time product search and category filtering

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/saimarain471/Digilabs.git
cd Digilabs
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── shop/              # Shop page
│   └── product/[slug]/    # Product detail page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── ProductCard.tsx    # Product card component
│   └── Cart.tsx           # Cart sidebar
├── context/               # Context providers
│   └── CartContext.tsx    # Cart & Currency context
├── data/                  # Static data
│   └── seedData.ts        # Product seed data
├── lib/                   # Utilities
│   └── supabase.ts        # Supabase client
└── types/                 # TypeScript types
    └── index.ts           # Type definitions

supabase/
├── schema.sql             # Database schema
├── seed.sql               # Seed data SQL
└── seed-data.json         # Seed data JSON
```

## Database Setup (Supabase)

1. Create a new Supabase project
2. Run the schema SQL in `supabase/schema.sql`
3. Run the seed SQL in `supabase/seed.sql`
4. Update `.env.local` with your Supabase credentials

## WhatsApp Configuration

The WhatsApp checkout is configured in `src/types/index.ts`:

```typescript
export const WHATSAPP_CONFIG = {
  phone: "+9303704731692",
  baseUrl: "https://wa.me/",
};
```

## Categories

- 🎨 **Creativity**: Canva Pro, CapCut Pro, Adobe Creative Cloud
- 🤖 **AI**: ChatGPT Plus, Claude AI, Gemini Advanced, Grok
- 🛠️ **Tools**: Semrush, Ahrefs, Grammarly, MS Office 365
- 📺 **Streaming**: Netflix Premium
- 🔒 **VPN**: Surfshark VPN
- 👥 **Social**: LinkedIn Premium, VidIQ, WA Sender

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Manual Build

```bash
pnpm build
pnpm start
```

## License

MIT License - feel free to use this project for your own purposes.

## Support

For support, contact via WhatsApp: +9303704731692
