// ============================================
// CartCloudy - Seed Data
// Digital Products for the Store
// ============================================

import { Product, Plan, FAQ, Category } from "@/types";

// ============================================
// Categories
// ============================================
export const categories: Omit<Category, "id" | "created_at">[] = [
  {
    name: "Creativity",
    slug: "creativity",
    icon: "🎨",
    description: "Design and creative tools",
  },
  {
    name: "AI",
    slug: "ai",
    icon: "🤖",
    description: "Artificial Intelligence tools",
  },
  {
    name: "Tools",
    slug: "tools",
    icon: "🛠️",
    description: "Productivity and utility tools",
  },
  {
    name: "Streaming",
    slug: "streaming",
    icon: "📺",
    description: "Entertainment and streaming services",
  },
  {
    name: "VPN",
    slug: "vpn",
    icon: "🔒",
    description: "Security and privacy tools",
  },
  {
    name: "Social",
    slug: "social",
    icon: "👥",
    description: "Social media and marketing tools",
  },
];

// ============================================
// Products with Plans
// ============================================
export interface SeedProduct {
  title: string;
  slug: string;
  thumbnail_url: string;
  short_description: string;
  full_description: string;
  category: string;
  is_featured: boolean;
  plans: Omit<Plan, "id" | "product_id" | "created_at" | "updated_at">[];
  faqs: Omit<FAQ, "id" | "product_id" | "created_at">[];
}

export const products: SeedProduct[] = [
  // ============================================
  // CREATIVITY CATEGORY
  // ============================================
  {
    title: "Canva Pro",
    slug: "canva-pro",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    short_description: "Design anything with premium templates & features",
    full_description:
      "Canva Pro unlocks the full potential of design with access to 100+ million premium stock photos, videos, audio, and graphics. Create stunning designs with Brand Kit, Magic Resize, Background Remover, and Content Planner. Perfect for social media, presentations, and marketing materials.",
    category: "Creativity",
    is_featured: true,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 12.99,
        price_pkr: 3500,
        price_inr: 1099,
        features: [
          "100M+ premium templates",
          "Brand Kit",
          "Background Remover",
          "Magic Resize",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "6 Months",
        duration_months: 6,
        price_usd: 59.99,
        price_pkr: 16000,
        price_inr: 4999,
        features: [
          "All 1 Month features",
          "Content Planner",
          "Priority support",
          "Team collaboration",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 2,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 99.99,
        price_pkr: 27000,
        price_inr: 8499,
        features: [
          "All features included",
          "Best value",
          "100GB cloud storage",
          "Premium support",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 3,
      },
    ],
    faqs: [
      {
        question: "How do I access Canva Pro?",
        answer:
          "After purchase, you'll receive login credentials via email within 24 hours. Simply log in to Canva with the provided account.",
        sort_order: 1,
      },
      {
        question: "Can I use it on multiple devices?",
        answer:
          "Yes! Canva Pro works on desktop, tablet, and mobile. You can access your designs from anywhere.",
        sort_order: 2,
      },
      {
        question: "Is this a shared account?",
        answer:
          "This is a premium shared account with full Pro features. You'll have your own workspace and designs.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "CapCut Pro",
    slug: "capcut-pro",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/6062/6062559.png",
    short_description: "Professional video editing made simple",
    full_description:
      "CapCut Pro is the ultimate video editing solution with advanced features like AI-powered editing, premium effects, transitions, and music library. Create viral-worthy content for TikTok, Instagram Reels, and YouTube Shorts with ease.",
    category: "Creativity",
    is_featured: true,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 9.99,
        price_pkr: 2700,
        price_inr: 849,
        features: [
          "Premium effects & filters",
          "AI video tools",
          "No watermark",
          "HD export",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "6 Months",
        duration_months: 6,
        price_usd: 44.99,
        price_pkr: 12000,
        price_inr: 3799,
        features: [
          "All 1 Month features",
          "4K export",
          "Premium music library",
          "Advanced AI tools",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 2,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 74.99,
        price_pkr: 20000,
        price_inr: 6299,
        features: [
          "All features included",
          "Best value",
          "Priority rendering",
          "Cloud storage",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 3,
      },
    ],
    faqs: [
      {
        question: "Does CapCut Pro remove watermarks?",
        answer:
          "Yes! CapCut Pro removes all watermarks from your exported videos, giving you clean professional content.",
        sort_order: 1,
      },
      {
        question: "Can I use it on mobile and desktop?",
        answer:
          "Absolutely! CapCut Pro works seamlessly across iOS, Android, and desktop platforms.",
        sort_order: 2,
      },
      {
        question: "What's included in the AI tools?",
        answer:
          "AI tools include auto-captions, background removal, style transfer, and smart editing suggestions.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "Adobe Creative Cloud",
    slug: "adobe-cloud",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/5968/5968428.png",
    short_description: "Complete creative suite for professionals",
    full_description:
      "Adobe Creative Cloud gives you access to the entire Adobe suite including Photoshop, Illustrator, Premiere Pro, After Effects, and 20+ more apps. Industry-standard tools for photo editing, graphic design, video production, and web development.",
    category: "Creativity",
    is_featured: true,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 29.99,
        price_pkr: 8000,
        price_inr: 2499,
        features: [
          "All Adobe apps",
          "100GB cloud storage",
          "Adobe Fonts",
          "Adobe Portfolio",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "6 Months",
        duration_months: 6,
        price_usd: 149.99,
        price_pkr: 40000,
        price_inr: 12499,
        features: [
          "All 1 Month features",
          "Adobe Stock credits",
          "Priority support",
          "Collaboration tools",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 2,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 249.99,
        price_pkr: 67000,
        price_inr: 20999,
        features: [
          "All features included",
          "Best value",
          "1TB cloud storage",
          "Premium support",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 3,
      },
    ],
    faqs: [
      {
        question: "Which Adobe apps are included?",
        answer:
          "You get access to Photoshop, Illustrator, Premiere Pro, After Effects, InDesign, Lightroom, XD, and 15+ more applications.",
        sort_order: 1,
      },
      {
        question: "Can I install on multiple computers?",
        answer:
          "Yes, you can install Adobe apps on up to 2 computers (Windows or Mac) and sign in on one at a time.",
        sort_order: 2,
      },
      {
        question: "Is this the full version?",
        answer:
          "Yes! This is the complete Adobe Creative Cloud with all features unlocked, not a trial or limited version.",
        sort_order: 3,
      },
    ],
  },

  // ============================================
  // AI CATEGORY
  // ============================================
  {
    title: "ChatGPT Plus",
    slug: "chatgpt-plus",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/11865/11865326.png",
    short_description: "Access GPT-4 and advanced AI features",
    full_description:
      "ChatGPT Plus gives you priority access to GPT-4, the most advanced AI model. Enjoy faster response times, access during peak hours, and exclusive features like DALL-E image generation, Advanced Data Analysis, and custom GPTs.",
    category: "AI",
    is_featured: true,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 20,
        price_pkr: 5400,
        price_inr: 1699,
        features: [
          "GPT-4 access",
          "DALL-E 3",
          "Advanced Data Analysis",
          "Custom GPTs",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "3 Months",
        duration_months: 3,
        price_usd: 55,
        price_pkr: 14800,
        price_inr: 4599,
        features: [
          "All 1 Month features",
          "Priority access",
          "Faster responses",
          "Plugin access",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
      {
        name: "6 Months",
        duration_months: 6,
        price_usd: 99,
        price_pkr: 26700,
        price_inr: 8299,
        features: [
          "All features included",
          "Best value",
          "API credits",
          "Premium support",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 3,
      },
    ],
    faqs: [
      {
        question: "What's the difference from free ChatGPT?",
        answer:
          "ChatGPT Plus gives you GPT-4 (much smarter), faster responses, priority access during busy times, and features like image generation and data analysis.",
        sort_order: 1,
      },
      {
        question: "Can I use DALL-E for image generation?",
        answer:
          "Yes! ChatGPT Plus includes DALL-E 3 for creating AI images directly in your conversations.",
        sort_order: 2,
      },
      {
        question: "Is there a usage limit?",
        answer:
          "There's a generous message limit for GPT-4 (around 40 messages per 3 hours), with unlimited GPT-3.5 access.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "Claude AI Pro",
    slug: "claude-ai",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/8637/8637099.png",
    short_description: "Advanced AI assistant by Anthropic",
    full_description:
      "Claude Pro offers extended conversations, priority access during high-traffic periods, and early access to new features. Claude excels at analysis, writing, coding, and thoughtful discussions with a 100K context window.",
    category: "AI",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 20,
        price_pkr: 5400,
        price_inr: 1699,
        features: [
          "Claude 3 Opus access",
          "100K context window",
          "Priority access",
          "5x more usage",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "3 Months",
        duration_months: 3,
        price_usd: 55,
        price_pkr: 14800,
        price_inr: 4599,
        features: [
          "All 1 Month features",
          "Early feature access",
          "Extended conversations",
          "File analysis",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "How is Claude different from ChatGPT?",
        answer:
          "Claude has a larger context window (100K tokens), excels at nuanced analysis, and is known for being more thoughtful and less likely to hallucinate.",
        sort_order: 1,
      },
      {
        question: "Can Claude analyze documents?",
        answer:
          "Yes! Claude Pro can analyze PDFs, images, and long documents up to 100K tokens in a single conversation.",
        sort_order: 2,
      },
      {
        question: "What's the usage limit?",
        answer:
          "Claude Pro offers 5x more usage than the free tier, with priority access during peak times.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "Gemini Advanced",
    slug: "gemini-advanced",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/2702/2702602.png",
    short_description: "Google's most capable AI model",
    full_description:
      "Gemini Advanced powered by Ultra 1.0 is Google's most capable AI. Get priority access to the latest features, 1 million token context window, and seamless integration with Google Workspace for enhanced productivity.",
    category: "AI",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 19.99,
        price_pkr: 5400,
        price_inr: 1699,
        features: [
          "Gemini Ultra 1.0",
          "1M token context",
          "Google Workspace integration",
          "Priority access",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "6 Months",
        duration_months: 6,
        price_usd: 99.99,
        price_pkr: 27000,
        price_inr: 8499,
        features: [
          "All 1 Month features",
          "2TB Google storage",
          "Early feature access",
          "Premium support",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "What makes Gemini Advanced special?",
        answer:
          "Gemini Advanced uses Ultra 1.0, Google's largest model, with a 1 million token context window - the largest available.",
        sort_order: 1,
      },
      {
        question: "Does it integrate with Google apps?",
        answer:
          "Yes! Gemini Advanced integrates seamlessly with Gmail, Docs, Sheets, and other Google Workspace apps.",
        sort_order: 2,
      },
      {
        question: "Is Google One storage included?",
        answer:
          "Yes, Gemini Advanced includes 2TB of Google One storage as part of the subscription.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "Grok",
    slug: "grok",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/5969/5969020.png",
    short_description: "X's witty AI with real-time knowledge",
    full_description:
      "Grok is xAI's conversational AI with real-time access to X (Twitter) data. Known for its wit and willingness to answer spicy questions, Grok offers a unique AI experience with up-to-date information.",
    category: "AI",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 16,
        price_pkr: 4300,
        price_inr: 1349,
        features: [
          "Grok AI access",
          "Real-time X data",
          "Image understanding",
          "X Premium features",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 168,
        price_pkr: 45000,
        price_inr: 13999,
        features: [
          "All monthly features",
          "Best value",
          "Priority access",
          "Early features",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "What's unique about Grok?",
        answer:
          "Grok has real-time access to X (Twitter) data, a witty personality, and is willing to answer questions other AIs might refuse.",
        sort_order: 1,
      },
      {
        question: "Is X Premium included?",
        answer:
          "Yes! Grok access comes with X Premium, including verification, longer posts, and edit functionality.",
        sort_order: 2,
      },
      {
        question: "Can Grok analyze images?",
        answer:
          "Yes, Grok can understand and analyze images you share in your conversations.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "Perplexity AI Pro",
    slug: "perplexity-ai",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/3616/3616912.png",
    short_description: "AI-powered search with citations",
    full_description:
      "Perplexity Pro is an AI search engine that provides accurate answers with real-time citations. Access GPT-4, Claude, and other models with unlimited Pro searches, file uploads, and API access.",
    category: "AI",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 20,
        price_pkr: 5400,
        price_inr: 1699,
        features: [
          "Unlimited Pro searches",
          "GPT-4 & Claude access",
          "File uploads",
          "API access",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 200,
        price_pkr: 54000,
        price_inr: 16999,
        features: [
          "All monthly features",
          "Best value (save $40)",
          "Priority support",
          "Early features",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "How is Perplexity different from ChatGPT?",
        answer:
          "Perplexity is focused on search with real-time web access and citations. Every answer includes sources you can verify.",
        sort_order: 1,
      },
      {
        question: "Which AI models can I use?",
        answer:
          "Perplexity Pro gives you access to GPT-4, Claude 3, and Perplexity's own models for different use cases.",
        sort_order: 2,
      },
      {
        question: "Can I upload files for analysis?",
        answer:
          "Yes! Pro users can upload PDFs, documents, and images for AI analysis with cited responses.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "ElevenLabs",
    slug: "elevenlabs",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
    short_description: "AI voice generation & cloning",
    full_description:
      "ElevenLabs offers the most realistic AI voice generation and cloning technology. Create natural-sounding voiceovers, clone voices, and generate speech in 29 languages for content creation, audiobooks, and more.",
    category: "AI",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 22,
        price_pkr: 5900,
        price_inr: 1849,
        features: [
          "100K characters/month",
          "Voice cloning",
          "29 languages",
          "Commercial license",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 220,
        price_pkr: 59000,
        price_inr: 18499,
        features: [
          "All monthly features",
          "Best value",
          "Priority rendering",
          "API access",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "Can I clone my own voice?",
        answer:
          "Yes! ElevenLabs can clone your voice from a short audio sample, creating a realistic AI version for text-to-speech.",
        sort_order: 1,
      },
      {
        question: "What languages are supported?",
        answer:
          "ElevenLabs supports 29 languages including English, Spanish, French, German, Japanese, and more.",
        sort_order: 2,
      },
      {
        question: "Can I use it commercially?",
        answer:
          "Yes, the subscription includes a commercial license for using generated audio in your projects.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "Veo 3",
    slug: "veo-3",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    short_description: "Google's advanced AI video generator",
    full_description:
      "Veo 3 is Google's latest AI video generation model. Create high-quality videos from text prompts with realistic motion, cinematic effects, and unprecedented control over style and composition.",
    category: "AI",
    is_featured: true,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 25,
        price_pkr: 6700,
        price_inr: 2099,
        features: [
          "HD video generation",
          "Text-to-video",
          "Style control",
          "50 videos/month",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "6 Months",
        duration_months: 6,
        price_usd: 125,
        price_pkr: 33500,
        price_inr: 10499,
        features: [
          "All monthly features",
          "4K video export",
          "200 videos/month",
          "Priority rendering",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "What video quality can I generate?",
        answer:
          "Veo 3 generates HD videos by default, with 4K export available on higher tier plans.",
        sort_order: 1,
      },
      {
        question: "How long can videos be?",
        answer:
          "Videos can be up to 60 seconds long, with options to extend and combine clips.",
        sort_order: 2,
      },
      {
        question: "Can I control the style?",
        answer:
          "Yes! Veo 3 offers extensive style controls including cinematic, anime, realistic, and custom styles.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "Lovable Pro",
    slug: "lovable-pro",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/6295/6295417.png",
    short_description: "AI-powered full-stack app builder",
    full_description:
      "Lovable Pro is an AI coding assistant that builds full-stack applications from natural language descriptions. Create web apps, APIs, and databases with just prompts - no coding required.",
    category: "AI",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 25,
        price_pkr: 6700,
        price_inr: 2099,
        features: [
          "Unlimited projects",
          "Full-stack generation",
          "Database setup",
          "Deployment included",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 250,
        price_pkr: 67000,
        price_inr: 20999,
        features: [
          "All monthly features",
          "Best value",
          "Priority support",
          "Custom domains",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "Do I need coding experience?",
        answer:
          "No! Lovable Pro generates complete applications from natural language descriptions. Just describe what you want.",
        sort_order: 1,
      },
      {
        question: "What tech stack does it use?",
        answer:
          "Lovable typically generates React/Next.js frontends with Node.js backends and PostgreSQL databases.",
        sort_order: 2,
      },
      {
        question: "Can I export the code?",
        answer:
          "Yes! You own all generated code and can export it to your own hosting or GitHub.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "RunwayML",
    slug: "runwayml",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
    short_description: "AI video editing and generation suite",
    full_description:
      "RunwayML is the creative suite for AI video. Generate videos from text, remove backgrounds, extend clips, and use Gen-2 for the most advanced AI video generation available.",
    category: "AI",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 15,
        price_pkr: 4000,
        price_inr: 1249,
        features: [
          "625 credits/month",
          "Gen-2 video",
          "Background removal",
          "Video extension",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 144,
        price_pkr: 38500,
        price_inr: 11999,
        features: [
          "All monthly features",
          "Best value",
          "Unlimited watermark-free",
          "Priority rendering",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "What is Gen-2?",
        answer:
          "Gen-2 is Runway's latest text-to-video model, capable of generating realistic video clips from text descriptions.",
        sort_order: 1,
      },
      {
        question: "How do credits work?",
        answer:
          "Credits are used for AI operations. Different features use different amounts - video generation uses more than simple edits.",
        sort_order: 2,
      },
      {
        question: "Can I remove video backgrounds?",
        answer:
          "Yes! Runway's AI can remove backgrounds from videos automatically, perfect for green screen effects.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "HeyGen AI",
    slug: "heygen-ai",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    short_description: "AI avatar video creation platform",
    full_description:
      "HeyGen creates professional AI avatar videos in minutes. Choose from 100+ avatars, clone your own, and generate videos in 40+ languages. Perfect for marketing, training, and content creation.",
    category: "AI",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 29,
        price_pkr: 7800,
        price_inr: 2449,
        features: [
          "15 credits/month",
          "100+ avatars",
          "40+ languages",
          "1080p export",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 290,
        price_pkr: 78000,
        price_inr: 24499,
        features: [
          "All monthly features",
          "Best value",
          "Avatar cloning",
          "Priority support",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "Can I create my own avatar?",
        answer:
          "Yes! HeyGen can create a custom AI avatar from a short video of yourself.",
        sort_order: 1,
      },
      {
        question: "What languages are supported?",
        answer:
          "HeyGen supports 40+ languages with natural lip-sync and voice generation.",
        sort_order: 2,
      },
      {
        question: "How long can videos be?",
        answer:
          "Videos can be up to 30 minutes long, depending on your credit balance.",
        sort_order: 3,
      },
    ],
  },

  // ============================================
  // TOOLS CATEGORY
  // ============================================
  {
    title: "Envato Elements",
    slug: "envato-elements",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/5968/5968756.png",
    short_description: "Unlimited creative assets & templates",
    full_description:
      "Envato Elements offers unlimited downloads of 16+ million creative assets including stock photos, videos, music, graphics, templates, and fonts. One subscription for all your creative needs.",
    category: "Tools",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 16.50,
        price_pkr: 4400,
        price_inr: 1399,
        features: [
          "Unlimited downloads",
          "16M+ assets",
          "Commercial license",
          "All categories",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 165,
        price_pkr: 44000,
        price_inr: 13999,
        features: [
          "All monthly features",
          "Best value",
          "WordPress plugins",
          "Priority support",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "Are downloads really unlimited?",
        answer:
          "Yes! Download as many assets as you need with no daily or monthly limits.",
        sort_order: 1,
      },
      {
        question: "Can I use assets commercially?",
        answer:
          "Absolutely! All downloads include a commercial license for client work and personal projects.",
        sort_order: 2,
      },
      {
        question: "What types of assets are included?",
        answer:
          "Photos, videos, music, sound effects, graphics, templates, fonts, WordPress themes, and more.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "Freepik Premium",
    slug: "freepik-premium",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png",
    short_description: "Premium vectors, photos & PSD files",
    full_description:
      "Freepik Premium gives you unlimited access to millions of premium vectors, photos, PSD files, and icons. Download high-quality resources without attribution for all your design projects.",
    category: "Tools",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 12,
        price_pkr: 3200,
        price_inr: 999,
        features: [
          "100 downloads/day",
          "No attribution",
          "Premium content",
          "AI image generator",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 90,
        price_pkr: 24000,
        price_inr: 7499,
        features: [
          "All monthly features",
          "Best value",
          "Priority support",
          "Extended license",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "Do I need to give attribution?",
        answer:
          "No! Premium users can use resources without attribution requirements.",
        sort_order: 1,
      },
      {
        question: "What file formats are available?",
        answer:
          "Download vectors (AI, EPS, SVG), photos (JPG), and editable files (PSD) in high resolution.",
        sort_order: 2,
      },
      {
        question: "Is the AI image generator included?",
        answer:
          "Yes! Premium includes access to Freepik's AI image generation tool.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "Semrush",
    slug: "semrush",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/2504/2504739.png",
    short_description: "All-in-one SEO and marketing toolkit",
    full_description:
      "Semrush is the leading SEO and digital marketing platform. Get keyword research, competitor analysis, site audits, backlink tracking, and content optimization tools all in one place.",
    category: "Tools",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 29.99,
        price_pkr: 8000,
        price_inr: 2499,
        features: [
          "Keyword research",
          "Site audit",
          "Competitor analysis",
          "Backlink tracking",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "6 Months",
        duration_months: 6,
        price_usd: 149.99,
        price_pkr: 40000,
        price_inr: 12499,
        features: [
          "All monthly features",
          "Content analyzer",
          "Social media tools",
          "PPC research",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "What SEO tools are included?",
        answer:
          "Keyword research, position tracking, site audit, backlink analysis, competitor research, and more.",
        sort_order: 1,
      },
      {
        question: "Can I track competitor keywords?",
        answer:
          "Yes! Semrush shows you exactly which keywords your competitors rank for and their traffic estimates.",
        sort_order: 2,
      },
      {
        question: "Is there a project limit?",
        answer:
          "The shared account allows multiple projects with generous limits for keyword tracking and site audits.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "Ahrefs",
    slug: "ahrefs",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/2504/2504799.png",
    short_description: "Powerful SEO tools & backlink analysis",
    full_description:
      "Ahrefs is the industry-leading backlink analysis and SEO tool. Discover competitor strategies, find link opportunities, track rankings, and audit your site with the most comprehensive SEO database.",
    category: "Tools",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 29.99,
        price_pkr: 8000,
        price_inr: 2499,
        features: [
          "Site Explorer",
          "Keywords Explorer",
          "Site Audit",
          "Rank Tracker",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "6 Months",
        duration_months: 6,
        price_usd: 149.99,
        price_pkr: 40000,
        price_inr: 12499,
        features: [
          "All monthly features",
          "Content Explorer",
          "Batch Analysis",
          "Priority crawling",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "How accurate is Ahrefs data?",
        answer:
          "Ahrefs has the largest backlink database with 30+ trillion links and updates data every 15-30 minutes.",
        sort_order: 1,
      },
      {
        question: "Can I analyze any website?",
        answer:
          "Yes! Enter any domain to see its backlinks, organic keywords, traffic estimates, and more.",
        sort_order: 2,
      },
      {
        question: "What's the difference from Semrush?",
        answer:
          "Ahrefs is known for superior backlink data, while Semrush offers more marketing tools. Many SEOs use both.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "Google Drive Storage",
    slug: "google-drive-storage",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/5968/5968523.png",
    short_description: "Expand your cloud storage space",
    full_description:
      "Upgrade your Google Drive storage with Google One. Get 2TB of cloud storage shared across Drive, Gmail, and Photos. Includes family sharing, VPN access, and premium Google support.",
    category: "Tools",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 9.99,
        price_pkr: 2700,
        price_inr: 849,
        features: [
          "2TB storage",
          "Family sharing (5)",
          "Google VPN",
          "Premium support",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 99.99,
        price_pkr: 27000,
        price_inr: 8499,
        features: [
          "All monthly features",
          "Best value",
          "10% Google Store credit",
          "Extra member benefits",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "Is storage shared across Google services?",
        answer:
          "Yes! 2TB is shared across Google Drive, Gmail, and Google Photos.",
        sort_order: 1,
      },
      {
        question: "Can I share with family?",
        answer:
          "Yes! Google One allows sharing storage with up to 5 family members.",
        sort_order: 2,
      },
      {
        question: "Is Google VPN included?",
        answer:
          "Yes! Google One includes VPN access for Android and iOS devices.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "Grammarly Premium",
    slug: "grammarly-premium",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/5968/5968914.png",
    short_description: "AI-powered writing assistant",
    full_description:
      "Grammarly Premium goes beyond grammar checking with advanced suggestions for clarity, engagement, and delivery. Get tone detection, plagiarism checking, and vocabulary enhancement across all your writing.",
    category: "Tools",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 15,
        price_pkr: 4000,
        price_inr: 1249,
        features: [
          "Advanced grammar",
          "Clarity suggestions",
          "Tone detection",
          "Plagiarism checker",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 144,
        price_pkr: 38500,
        price_inr: 11999,
        features: [
          "All monthly features",
          "Best value",
          "Full sentence rewrites",
          "Word choice suggestions",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "Does it work everywhere?",
        answer:
          "Yes! Grammarly works in browsers, Microsoft Office, Google Docs, and has desktop/mobile apps.",
        sort_order: 1,
      },
      {
        question: "What's the plagiarism checker?",
        answer:
          "Grammarly checks your text against billions of web pages to ensure originality.",
        sort_order: 2,
      },
      {
        question: "Can it help with tone?",
        answer:
          "Yes! Grammarly detects your writing tone and suggests adjustments for your intended audience.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "Quillbot Premium",
    slug: "quillbot",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
    short_description: "AI paraphrasing and writing tool",
    full_description:
      "Quillbot Premium offers advanced paraphrasing with 7 writing modes, unlimited word processing, and integrated grammar checking. Perfect for students, writers, and content creators.",
    category: "Tools",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 9.99,
        price_pkr: 2700,
        price_inr: 849,
        features: [
          "Unlimited words",
          "7 writing modes",
          "Paraphraser",
          "Grammar checker",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 79.99,
        price_pkr: 21500,
        price_inr: 6699,
        features: [
          "All monthly features",
          "Best value",
          "Plagiarism checker",
          "Summarizer",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "What are the writing modes?",
        answer:
          "Standard, Fluency, Formal, Simple, Creative, Expand, and Shorten modes for different paraphrasing needs.",
        sort_order: 1,
      },
      {
        question: "Is there a word limit?",
        answer:
          "Premium removes all word limits - paraphrase unlimited text at once.",
        sort_order: 2,
      },
      {
        question: "Does it integrate with Word/Docs?",
        answer:
          "Yes! Quillbot has extensions for Chrome, Word, and Google Docs.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "TradingView Premium",
    slug: "tradingview",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/6001/6001283.png",
    short_description: "Advanced charting & trading platform",
    full_description:
      "TradingView Premium offers advanced charting tools, real-time data, custom indicators, and alerts for stocks, crypto, forex, and more. The ultimate platform for technical analysis.",
    category: "Tools",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 14.99,
        price_pkr: 4000,
        price_inr: 1249,
        features: [
          "Ad-free experience",
          "5 charts per tab",
          "10 indicators/chart",
          "Custom timeframes",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 149.99,
        price_pkr: 40000,
        price_inr: 12499,
        features: [
          "All monthly features",
          "Best value",
          "400 alerts",
          "Priority data",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "What markets are covered?",
        answer:
          "Stocks, crypto, forex, futures, bonds, and indices from exchanges worldwide.",
        sort_order: 1,
      },
      {
        question: "Can I create custom indicators?",
        answer:
          "Yes! Use Pine Script to create and share custom indicators and strategies.",
        sort_order: 2,
      },
      {
        question: "Are alerts included?",
        answer:
          "Yes! Premium includes server-side alerts that work even when you're offline.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "VidIQ Pro",
    slug: "vidiq",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    short_description: "YouTube growth & analytics tool",
    full_description:
      "VidIQ Pro helps you grow your YouTube channel with keyword research, competitor tracking, thumbnail analysis, and AI-powered suggestions. Get more views with data-driven insights.",
    category: "Tools",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 10,
        price_pkr: 2700,
        price_inr: 849,
        features: [
          "Keyword research",
          "Competitor tracking",
          "Trend alerts",
          "SEO score",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 99,
        price_pkr: 26700,
        price_inr: 8299,
        features: [
          "All monthly features",
          "Best value",
          "AI title generator",
          "Thumbnail analyzer",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "Will this help me get more views?",
        answer:
          "VidIQ provides data-driven insights for titles, tags, and thumbnails to optimize your videos for discovery.",
        sort_order: 1,
      },
      {
        question: "Can I track competitors?",
        answer:
          "Yes! Track any YouTube channel to see their best-performing content and strategies.",
        sort_order: 2,
      },
      {
        question: "Is there an AI feature?",
        answer:
          "Yes! VidIQ includes AI tools for generating titles, descriptions, and content ideas.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "Coursera Plus",
    slug: "coursera-plus",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/5968/5968872.png",
    short_description: "Unlimited access to 7,000+ courses",
    full_description:
      "Coursera Plus gives you unlimited access to 7,000+ courses, specializations, and professional certificates from top universities and companies like Google, IBM, and Meta.",
    category: "Tools",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 59,
        price_pkr: 15900,
        price_inr: 4999,
        features: [
          "7,000+ courses",
          "Certificates included",
          "Top universities",
          "Learn at your pace",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 399,
        price_pkr: 107000,
        price_inr: 33499,
        features: [
          "All monthly features",
          "Best value (save $300+)",
          "Professional certificates",
          "Career support",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "Are certificates included?",
        answer:
          "Yes! Complete courses and earn shareable certificates at no extra cost.",
        sort_order: 1,
      },
      {
        question: "Which universities are included?",
        answer:
          "Stanford, Yale, University of Michigan, Google, IBM, Meta, and 200+ more institutions.",
        sort_order: 2,
      },
      {
        question: "Can I learn at my own pace?",
        answer:
          "Absolutely! All courses are self-paced with lifetime access to completed courses.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "MS Office 365",
    slug: "ms-office-365",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    short_description: "Complete Microsoft productivity suite",
    full_description:
      "Microsoft 365 includes Word, Excel, PowerPoint, Outlook, OneDrive, and more. Get the latest Office apps with 1TB cloud storage and premium features for work and personal use.",
    category: "Tools",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 9.99,
        price_pkr: 2700,
        price_inr: 849,
        features: [
          "All Office apps",
          "1TB OneDrive",
          "Premium templates",
          "Mobile apps",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 69.99,
        price_pkr: 18800,
        price_inr: 5899,
        features: [
          "All monthly features",
          "Best value",
          "Family sharing (6)",
          "Advanced security",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "Which apps are included?",
        answer:
          "Word, Excel, PowerPoint, Outlook, OneDrive, OneNote, and access to Microsoft Teams.",
        sort_order: 1,
      },
      {
        question: "Can I install on multiple devices?",
        answer:
          "Yes! Install on up to 5 devices including PC, Mac, tablets, and phones.",
        sort_order: 2,
      },
      {
        question: "Is OneDrive storage included?",
        answer:
          "Yes! Get 1TB of OneDrive cloud storage included with your subscription.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "LinkedIn Premium",
    slug: "linkedin-premium",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
    short_description: "Advance your career with premium insights",
    full_description:
      "LinkedIn Premium Career gives you InMail credits, see who viewed your profile, salary insights, and LinkedIn Learning access. Stand out to recruiters and advance your career.",
    category: "Tools",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 29.99,
        price_pkr: 8000,
        price_inr: 2499,
        features: [
          "5 InMail credits",
          "Profile viewers",
          "Salary insights",
          "LinkedIn Learning",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 299.99,
        price_pkr: 80000,
        price_inr: 24999,
        features: [
          "All monthly features",
          "Best value",
          "Applicant insights",
          "Featured applicant",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "What are InMail credits?",
        answer:
          "InMail lets you message anyone on LinkedIn, even if you're not connected. Great for networking and job hunting.",
        sort_order: 1,
      },
      {
        question: "Is LinkedIn Learning included?",
        answer:
          "Yes! Get unlimited access to 16,000+ courses on business, tech, and creative skills.",
        sort_order: 2,
      },
      {
        question: "Can I see who viewed my profile?",
        answer:
          "Yes! Premium shows you everyone who viewed your profile in the last 90 days.",
        sort_order: 3,
      },
    ],
  },

  // ============================================
  // STREAMING CATEGORY
  // ============================================
  {
    title: "Netflix Premium",
    slug: "netflix",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/5977/5977590.png",
    short_description: "Stream movies & shows in 4K Ultra HD",
    full_description:
      "Netflix Premium gives you unlimited streaming of movies and TV shows in 4K Ultra HD with HDR. Watch on 4 screens simultaneously and download on 6 devices for offline viewing.",
    category: "Streaming",
    is_featured: true,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 15.99,
        price_pkr: 4300,
        price_inr: 1349,
        features: [
          "4K Ultra HD",
          "4 screens",
          "6 download devices",
          "No ads",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "3 Months",
        duration_months: 3,
        price_usd: 44.99,
        price_pkr: 12000,
        price_inr: 3799,
        features: [
          "All monthly features",
          "Save 6%",
          "Spatial audio",
          "HDR content",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
      {
        name: "6 Months",
        duration_months: 6,
        price_usd: 84.99,
        price_pkr: 22800,
        price_inr: 7149,
        features: [
          "All features included",
          "Best value",
          "Games included",
          "Priority support",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 3,
      },
    ],
    faqs: [
      {
        question: "Is this a shared account?",
        answer:
          "This is a premium shared account with your own profile. You'll have full access to all features.",
        sort_order: 1,
      },
      {
        question: "Can I download for offline viewing?",
        answer:
          "Yes! Download movies and shows on up to 6 devices to watch offline.",
        sort_order: 2,
      },
      {
        question: "What quality can I stream?",
        answer:
          "Stream in 4K Ultra HD with HDR and Dolby Atmos on supported devices.",
        sort_order: 3,
      },
    ],
  },

  // ============================================
  // VPN CATEGORY
  // ============================================
  {
    title: "Surfshark VPN",
    slug: "surfshark-vpn",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/6295/6295245.png",
    short_description: "Secure VPN with unlimited devices",
    full_description:
      "Surfshark VPN offers military-grade encryption, 3200+ servers in 100 countries, and unlimited simultaneous connections. Protect your privacy, bypass geo-restrictions, and browse securely.",
    category: "VPN",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 12.95,
        price_pkr: 3500,
        price_inr: 1099,
        features: [
          "Unlimited devices",
          "3200+ servers",
          "No-logs policy",
          "Kill switch",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 47.88,
        price_pkr: 12900,
        price_inr: 3999,
        features: [
          "All monthly features",
          "Best value",
          "CleanWeb (ad blocker)",
          "MultiHop",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 2,
      },
      {
        name: "2 Years",
        duration_months: 24,
        price_usd: 59.76,
        price_pkr: 16000,
        price_inr: 4999,
        features: [
          "All features included",
          "Lowest price/month",
          "Antivirus included",
          "Data breach alerts",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 3,
      },
    ],
    faqs: [
      {
        question: "How many devices can I connect?",
        answer:
          "Unlimited! Connect all your devices with a single Surfshark subscription.",
        sort_order: 1,
      },
      {
        question: "Does it work with Netflix?",
        answer:
          "Yes! Surfshark works with Netflix, Disney+, BBC iPlayer, and other streaming services.",
        sort_order: 2,
      },
      {
        question: "Is my data logged?",
        answer:
          "No. Surfshark has a strict no-logs policy, independently audited for your privacy.",
        sort_order: 3,
      },
    ],
  },

  // ============================================
  // SOCIAL CATEGORY
  // ============================================
  {
    title: "WA Sender Pro",
    slug: "wa-sender",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
    short_description: "Bulk WhatsApp marketing tool",
    full_description:
      "WA Sender Pro is a powerful WhatsApp marketing tool for sending bulk messages, managing contacts, and automating campaigns. Perfect for businesses looking to reach customers on WhatsApp.",
    category: "Social",
    is_featured: false,
    plans: [
      {
        name: "1 Month",
        duration_months: 1,
        price_usd: 19.99,
        price_pkr: 5400,
        price_inr: 1699,
        features: [
          "Bulk messaging",
          "Contact management",
          "Message scheduling",
          "Auto-reply",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "1 Year",
        duration_months: 12,
        price_usd: 149.99,
        price_pkr: 40000,
        price_inr: 12499,
        features: [
          "All monthly features",
          "Best value",
          "Campaign analytics",
          "Priority support",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
    ],
    faqs: [
      {
        question: "Is this against WhatsApp's terms?",
        answer:
          "Use responsibly for legitimate business communication. Avoid spam to prevent account restrictions.",
        sort_order: 1,
      },
      {
        question: "Can I schedule messages?",
        answer:
          "Yes! Schedule messages to be sent at specific times for optimal engagement.",
        sort_order: 2,
      },
      {
        question: "Does it support media messages?",
        answer:
          "Yes! Send images, videos, documents, and voice messages in bulk.",
        sort_order: 3,
      },
    ],
  },
  {
    title: "WhatsApp Virtual Numbers",
    slug: "whatsapp-virtual-numbers",
    thumbnail_url: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
    short_description: "Virtual phone numbers for WhatsApp",
    full_description:
      "Get virtual phone numbers from 50+ countries for WhatsApp Business. Perfect for creating multiple accounts, protecting privacy, or establishing local presence in different markets.",
    category: "Social",
    is_featured: false,
    plans: [
      {
        name: "1 Number",
        duration_months: 1,
        price_usd: 5,
        price_pkr: 1350,
        price_inr: 420,
        features: [
          "1 virtual number",
          "WhatsApp verified",
          "SMS receiving",
          "30-day validity",
        ],
        is_popular: true,
        is_active: true,
        sort_order: 1,
      },
      {
        name: "5 Numbers",
        duration_months: 1,
        price_usd: 20,
        price_pkr: 5400,
        price_inr: 1699,
        features: [
          "5 virtual numbers",
          "Multiple countries",
          "Bulk discount",
          "Priority delivery",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 2,
      },
      {
        name: "10 Numbers",
        duration_months: 1,
        price_usd: 35,
        price_pkr: 9400,
        price_inr: 2949,
        features: [
          "10 virtual numbers",
          "Best value",
          "All countries",
          "Instant delivery",
        ],
        is_popular: false,
        is_active: true,
        sort_order: 3,
      },
    ],
    faqs: [
      {
        question: "Which countries are available?",
        answer:
          "Numbers available from USA, UK, Canada, India, and 45+ other countries.",
        sort_order: 1,
      },
      {
        question: "Can I receive SMS?",
        answer:
          "Yes! Numbers can receive SMS for WhatsApp verification and other services.",
        sort_order: 2,
      },
      {
        question: "How long do numbers last?",
        answer:
          "Numbers are valid for 30 days. Extended plans available for longer periods.",
        sort_order: 3,
      },
    ],
  },
];

// ============================================
// Export seed data as JSON
// ============================================
export const seedDataJSON = {
  categories,
  products,
};

export default seedDataJSON;
