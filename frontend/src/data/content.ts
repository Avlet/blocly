import type { SiteContent } from "@/types/content";

// ============================================================
// Blocly — site content
// Edit copy here; sections render from this object.
//
// NOTE ON SERVICE TAGS: in the source screenshots the tag chips for
// services 01–06 ran below the fold and were only partially visible.
// The first visible chip(s) on each are exact; the remainder were
// completed from each service's own copy and are marked as such.
// Adjust freely — they're just strings.
// ============================================================

export const content: SiteContent = {
  site: {
    name: "Blocly",
    tagline: "Global Web2 & Web3 Growth Partner",
    description:
      "Blocly is a full-service growth marketing, PR, and communications agency built for crypto exchanges, blockchain projects, fintech companies, and global technology brands.",
    email: "hello@blocly.com",
    nav: [
      { label: "Services", href: "#services" },
      { label: "Industries", href: "#industries" },
      { label: "Why Blocly", href: "#why-blocly" },
      { label: "Process", href: "#process" },
    ],
    socials: [
      { label: "X / Twitter", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Telegram", href: "#" },
    ],
  },

  hero: {
    eyebrow: "Global Web2 & Web3 Growth Partner",
    headlineTop: "Your market is waiting.",
    headlineAccent: "We build the bridge.",
    body: "Blocly is a full-service growth marketing, PR, and communications agency built for crypto exchanges, blockchain projects, fintech companies, and global technology brands. We convert your story into market leadership — through strategic media, performance campaigns, and communities that actually grow.",
    primaryCta: { label: "Start a Conversation", href: "#contact" },
    secondaryCta: { label: "Explore Our Services", href: "#services" },
    marquee: [
      "Storytelling",
      "Influencer Marketing",
      "KOL Partnerships",
      "SEO & Guest Posting",
      "Token Launches",
      "Exchange Campaigns",
      "PR & Media",
      "Performance Advertising",
      "Community Growth",
      "Content & Storytelling",
    ],
  },

  growthChallenge: {
    eyebrow: "The Growth Challenge",
    headline: "Visibility is not a strategy.",
    lead: "Most brands gain attention and lose momentum. A feature in a major publication means little without the infrastructure to convert it into trust, users, and revenue. The brands that win are the ones who treat growth as a system — not a series of disconnected tactics.",
    highlights: ["attention", "momentum", "system"],
    body: "Blocly builds that system. We combine earned media, paid performance, community activation, content authority, and influencer credibility into a single, coordinated growth engine designed for the pace and complexity of modern Web2 and Web3 markets.",
    pillars: [
      {
        title: "Credibility",
        description:
          "Placement in the publications, podcasts, and platforms your investors, users, and partners actually read — building authority that compounds over time.",
      },
      {
        title: "Acquisition",
        description:
          "Performance campaigns and influencer reach calibrated to your target audience, with rigorous tracking and optimization until the numbers work at scale.",
      },
      {
        title: "Retention",
        description:
          "Communities that stay engaged, content that keeps educating, and narratives strong enough to weather the market cycles your competitors don't survive.",
      },
      {
        title: "Authority",
        description:
          "Thought leadership positioning, SEO infrastructure, and brand storytelling that make your team the first name that comes to mind in your market category.",
      },
    ],
  },

  services: {
    eyebrow: "Our Services",
    headlineTop: "Every channel.",
    headlineBottom: "One direction.",
    intro:
      "From tier-1 media placements to performance campaigns and community ecosystems — Blocly delivers the full spectrum of modern growth marketing, executed with precision.",
    items: [
      {
        id: "01",
        title: "Strategic PR & Media Exposure",
        paragraphs: [
          "Reputation is currency. We place your brand in front of the audiences that shape perception — tier-1 crypto media, mainstream business publications, finance titles, and technology press. Our media relationships span editorial teams across CoinDesk, Forbes, Bloomberg, TechCrunch, The Block, and hundreds of specialist outlets globally.",
          "Beyond placement, we develop the narratives that give journalists a reason to care: executive interview programs, thought leadership columns, and reactive commentary that keeps your brand relevant throughout news cycles. When your reputation requires defending, our crisis communications expertise protects what you've built.",
        ],
        tags: [
          "Tier-1 Media Placements",
          "Thought Leadership",
          "Executive Interviews",
          "Reactive Commentary",
          "Crisis Communications",
        ],
      },
      {
        id: "02",
        title: "Performance Advertising & PPC",
        paragraphs: [
          "Traffic is a means to an end. Our performance advertising practice is built around one outcome: profitable, scalable user acquisition. We design and manage banner, native, and programmatic campaigns across Web2 and Web3 ad networks, with retargeting infrastructure that recovers lost prospects and keeps your pipeline full.",
          "Every campaign is data-driven from day one. We establish clear cost-per-acquisition targets, build creatives tested against your specific audience, and optimize relentlessly until performance meets your commercial goals. Scale only follows when the unit economics are proven.",
        ],
        tags: [
          "Banner Advertising",
          "Native Advertising",
          "Programmatic Campaigns",
          "Retargeting",
          "Conversion Optimization",
        ],
      },
      {
        id: "03",
        title: "Community Growth & Engagement",
        paragraphs: [
          "We call it Shilling With Impact — a deliberate approach to community building that creates genuine awareness and trust rather than noise. Discord servers grow through structured engagement programs. Telegram channels attract real users, not bots. X (Twitter) followings build through consistent, credible conversation.",
          "Our community management teams don't just moderate — they cultivate. Ambassador programs turn early adopters into advocates. Activation campaigns give your community reasons to participate, invite others, and stay. The result is an ecosystem that contributes to your growth rather than straining your support capacity.",
        ],
        tags: [
          "Discord Growth",
          "Telegram Management",
          "Ambassador Programs",
          "Activation Campaigns",
          "X (Twitter) Growth",
        ],
      },
      {
        id: "04",
        title: "Content Creation & Storytelling",
        paragraphs: [
          "Every category leader has a story that people understand and repeat. We write that story — and then we distribute it everywhere it matters. From founder narratives and whitepaper editorial to educational blog series, case studies, and social media programs, our content strategy is built around the question: what does your audience need to believe to choose you?",
          "Our writers are specialists in crypto, fintech, SaaS, and technology — capable of translating complex mechanisms into compelling reading without sacrificing accuracy. Content that educates builds trust. Content that tells a human story builds loyalty. We create both.",
        ],
        tags: [
          "Blog & Editorial",
          "Whitepapers",
          "Case Studies",
          "Founder Narratives",
          "Social Content",
          "Educational Series",
        ],
      },
      {
        id: "05",
        title: "Influencer Marketing",
        paragraphs: [
          "Follower counts are a vanity metric. We select creators based on audience alignment, engagement quality, and authenticity — the factors that actually convert viewers into users. Our influencer roster spans crypto educators, fintech voices, gaming content creators, and mainstream technology commentators across YouTube, X, TikTok, and beyond.",
          "Campaign management includes brief development, creative review, performance tracking, and post-campaign analysis. We measure what matters: referral traffic, sign-up conversions, and return on creator spend — not just views and likes.",
        ],
        tags: [
          "Creator Selection & Vetting",
          "Campaign Management",
          "Brief Development",
          "Performance Tracking",
          "Post-Campaign Analysis",
        ],
      },
      {
        id: "06",
        title: "KOL Partnerships & Promotions",
        paragraphs: [
          "Key opinion leaders operate at the intersection of credibility and scale. Their audiences trust their recommendations in ways mass media simply cannot replicate. We manage KOL partnerships across major crypto markets — sourcing regional voices who carry genuine weight in the communities you need to reach.",
          "Whether you're launching a token, entering a new market, or promoting an exchange product, our KOL network is calibrated for each objective. We coordinate messaging, sequencing, and activation timing to create moments of concentrated attention rather than scattered impressions.",
        ],
        tags: [
          "Regional KOL Network",
          "Exchange Launches",
          "Token Promotions",
          "Messaging Coordination",
          "Market Activation",
        ],
      },
      {
        id: "07",
        title: "Guest Posting & SEO Growth",
        paragraphs: [
          "Organic search remains one of the highest-value acquisition channels for brands that commit to it. We build domain authority through strategic guest post placement on high-DA publications, pairing every piece of editorial content with a backlink profile engineered to lift your rankings for the terms your customers are searching.",
          "Our SEO content strategy extends to AI search visibility — ensuring your brand surfaces prominently as research behavior continues to shift. The brands that invest in organic authority today will be the ones that own the search real estate that pays dividends for years.",
        ],
        tags: [
          "High-DA Guest Posting",
          "Strategic Backlinking",
          "SEO Content Strategy",
          "AI Search Visibility",
          "Domain Authority Building",
          "Organic Traffic Growth",
        ],
      },
    ],
  },

  industries: {
    eyebrow: "Industries We Serve",
    headline: "Built for builders across every sector.",
    intro:
      "We understand the compliance pressures of fintech, the speed of crypto cycles, the trust barriers in Web3, and the competitive intensity of iGaming. Our strategies are sector-native, not adapted from generic playbooks.",
    items: [
      {
        name: "Crypto & Web3",
        description:
          "Exchange launches, token campaigns, protocol awareness, and community growth in a space where trust is hard to earn and easy to lose.",
      },
      {
        name: "Blockchain",
        description:
          "Developer mindshare, institutional positioning, and ecosystem storytelling for infrastructure layers and application platforms.",
      },
      {
        name: "Fintech",
        description:
          "Navigating regulated markets with authority-building content, compliant PR, and performance campaigns targeting high-intent financial audiences.",
      },
      {
        name: "Finance",
        description:
          "Building the credibility signals that institutional partners, HNW clients, and retail investors need to see before they commit capital or trust.",
      },
      {
        name: "Technology & SaaS",
        description:
          "Category definition, competitive differentiation, and demand generation for software businesses at every growth stage.",
      },
      {
        name: "Gaming",
        description:
          "Player acquisition, creator partnerships, community building, and launch amplification for studios competing for attention in a crowded market.",
      },
      {
        name: "iGaming",
        description:
          "Performance-driven player acquisition, affiliate-adjacent media strategies, and brand positioning in a high-value, compliance-sensitive vertical.",
      },
      {
        name: "Sports Betting",
        description:
          "Audience targeting, influencer alignment, and brand activation across the sports media ecosystem — where fan trust drives everything.",
      },
      {
        name: "Entertainment & Media",
        description:
          "Launch momentum, audience development, and brand partnerships for content creators and entertainment platforms scaling their reach.",
      },
    ],
  },

  why: {
    eyebrow: "Why Blocly",
    headline: "Six reasons the best brands choose us.",
    items: [
      {
        id: "01",
        title: "Global Media Network",
        description:
          "Direct relationships with editors, journalists, and publishers across crypto, finance, technology, and mainstream business media — on every continent where your audience lives.",
      },
      {
        id: "02",
        title: "Deep Web3 Expertise",
        description:
          "Our team has lived through multiple market cycles, exchange launches, and protocol pivots. We understand on-chain mechanics, token economics, and the community dynamics that separate sustainable projects from noise.",
      },
      {
        id: "03",
        title: "Performance-Focused Execution",
        description:
          "Every campaign is measured against commercial outcomes. We build reporting infrastructure from day one, hold ourselves to acquisition cost targets, and optimize until the strategy is earning its budget.",
      },
      {
        id: "04",
        title: "Enterprise-Grade Strategy",
        description:
          "We operate at the standards demanded by venture-backed startups and global enterprises alike — structured briefs, documented processes, senior account leadership, and delivery you can present to your board.",
      },
      {
        id: "05",
        title: "Multi-Channel Coordination",
        description:
          "Siloed marketing creates gaps that competitors exploit. Our integrated approach ensures that your PR, paid, community, content, and influencer activities reinforce each other — amplifying every dollar you invest.",
      },
      {
        id: "06",
        title: "Proven Industry Relationships",
        description:
          "Our KOL network, media contacts, exchange partners, and community managers are relationships built over years — not cold outreach lists. When we need a placement, an introduction, or a campaign partner, we know exactly who to call.",
      },
    ],
  },

  process: {
    eyebrow: "How We Work",
    headlineTop: "Four steps to",
    headlineBottom: "Market leadership.",
    steps: [
      {
        id: "01",
        title: "Discover",
        description:
          "We spend time understanding your product, your market position, your competitive landscape, and the gaps between where you are and where you need to be. No assumptions. No generic briefs.",
      },
      {
        id: "02",
        title: "Strategize",
        description:
          "We build a coordinated growth strategy across every relevant channel — with clear objectives, defined audiences, channel allocation, and a measurement framework tied to your commercial goals.",
      },
      {
        id: "03",
        title: "Execute",
        description:
          "Senior specialists execute across media, advertising, content, community, and influencer programs in parallel — maintaining narrative consistency and campaign momentum from launch through scale.",
      },
      {
        id: "04",
        title: "Scale",
        description:
          "What works gets amplified. We identify the highest-performing channels, double down on proven tactics, and expand into adjacent markets — compounding your growth rather than starting over each quarter.",
      },
    ],
  },

  contact: {
    eyebrow: "Ready to Grow?",
    headlineTop: "From visibility to",
    headlineAccent: "Market leadership.",
    body: "The brands that move markets do it with partners who understand both the landscape and the ambition. Tell us where you want to go — we'll build the strategy to get you there.",
    primaryCta: { label: "Contact Blocly", href: "#contact-form" },
    secondaryCta: { label: "View Our Services", href: "#services" },
  },
};

export default content;