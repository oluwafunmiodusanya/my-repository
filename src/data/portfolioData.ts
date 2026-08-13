import { CreatorProfile, VideoItem, AnalyticsMetric, AnalyticsScreenshot, PartnerBenefit, ServiceItem } from '../types';

export const INITIAL_PROFILE: CreatorProfile = {
  name: "Creator Funmi",
  tagline: "Comedy • Lifestyle • Relatable Storytelling",
  bio1: "Creator Funmi is a comedy and lifestyle content creator who creates relatable, entertaining, and engaging content that connects with audiences through humour, storytelling, and everyday experiences.",
  bio2: "Through authentic content and creative storytelling, Creator Funmi helps brands introduce their products and services to audiences in a way that feels natural, memorable, and engaging.",
  email: "oluwafunmiodusanya@gmail.com",
  phone: "+2349040487367",
  portraitUrl: "/images/regenerated_image_1785444358154.png",
  aboutPortraitUrl: "/images/regenerated_image_1786457541345.png",
  instagramHandle: "@creator_funmi",
  instagramUrl: "https://www.instagram.com/creator_funmi?igsh=MWFteDFwZjhoYmJ3ZA%3D%3D&utm_source=qr",
  tiktokHandle: "@creator_funmi",
  tiktokUrl: "https://www.tiktok.com/@creator_funmi?_r=1&_t=ZS-98TQ8wZ40DH",
  location: "Lagos, Nigeria & International"
};

export const INITIAL_VIDEOS: VideoItem[] = [
  // Lifestyle Content (Card 1)
  {
    id: "life-1",
    category: "lifestyle",
    title: "A Day in My Life: Morning Routine & Lagos Vibes",
    description: "Authentic everyday moments, morning skincare, and Lagos urban lifestyle routine.",
    videoUrl: "https://www.instagram.com/reel/DSk--bmDYeq/?igsh=MW95dW0wNDdra3ljcw==",
    thumbnailUrl: "/images/regenerated_image_1786106702178.jpg",
    views: "1.2M",
    likes: "37K",
    comments: "8",
    shares: "1",
    duration: "0:58"
  },
  {
    id: "life-2",
    category: "lifestyle",
    title: "Weekend Getaway Vlog & Fashion Try-On",
    description: "Relaxing weekend aesthetics, outfit inspiration, and relatable travel moments.",
    videoUrl: "https://www.instagram.com/reel/DRSpCLrjf_v/?igsh=bGVnbGF5OGY4Mmd0",
    thumbnailUrl: "/images/regenerated_image_1786106721139.jpg",
    views: "542",
    likes: "61",
    comments: "12",
    shares: "4",
    duration: "1:15"
  },
  {
    id: "life-3",
    category: "lifestyle",
    title: "My Realistic Reset Routine & Workspace Setup",
    description: "Honest, hilarious reset routine that every content creator relates to.",
    videoUrl: "https://www.instagram.com/reel/DSn436zDbMB/?igsh=eDZtdW92ajQwNmZo",
    thumbnailUrl: "/images/regenerated_image_1786106732580.jpg",
    views: "1.2K",
    likes: "22",
    comments: "8",
    shares: "2",
    duration: "0:45"
  },

  // Comedy & Skits (Card 2)
  {
    id: "com-1",
    category: "comedy",
    title: "Girls When Eating vs What Actually Goes On",
    description: "Funny, relatable video built around everyday situations that encourage audience connection and engagement.",
    videoUrl: "https://www.instagram.com/reel/DXHstkyjei-/?igsh=bzVnOTE5enRvYWEw",
    thumbnailUrl: "/images/funmi_skit_thumbnail_1785532954130.jpg",
    views: "12.9M",
    likes: "451K",
    comments: "6.6K",
    shares: "141K",
    duration: "0:11"
  },
  {
    id: "com-2",
    category: "comedy",
    title: "Types of People at Nigerian Weddings",
    description: "High-energy comedic characters and relatable cultural observations.",
    videoUrl: "https://vt.tiktok.com/ZS4NB5bQU/",
    thumbnailUrl: "/images/regenerated_image_1785851321027.jpg",
    views: "1.6M",
    likes: "276K",
    comments: "3K",
    shares: "56.1K",
    duration: "1:02"
  },
  {
    id: "com-3",
    category: "comedy",
    title: "Expectation vs Reality: Working From Home",
    description: "Funny breakdown of remote work distractions and everyday chaos.",
    videoUrl: "https://www.instagram.com/reel/DYZBAqBtf25/?igsh=MXJ3N3ljMTF3bmhzeA==",
    thumbnailUrl: "/images/regenerated_image_1785851322724.jpg",
    views: "726K",
    likes: "42.9K",
    comments: "327",
    shares: "20.9K",
    duration: "0:49"
  },

  // Brand Integration (Card 3)
  {
    id: "brand-1",
    category: "brand",
    title: "Refreshing Lagos Heat with Fanta 🍊",
    brand: "Fanta",
    description: "Natural comedy skit showing the ultimate relief of an ice-cold Fanta on a hot Lagos afternoon.",
    videoUrl: "https://www.instagram.com/reel/DYeHkY4tik7/?igsh=MWpibTh1bWtsb2Rjdw==",
    thumbnailUrl: "/images/regenerated_image_1785855433542.jpg",
    views: "13.3K",
    likes: "472",
    comments: "17",
    shares: "7",
    duration: "0:45"
  },
  {
    id: "brand-2",
    category: "brand",
    title: "Shared Moments with Coca-Cola ✨",
    brand: "Coca-Cola",
    description: "Heartwarming comedy skit around family dinner and bringing people together over Coca-Cola.",
    videoUrl: "https://www.instagram.com/reel/DZCHLrEtt1X/?igsh=MWM3bTU2a2hjOG4yMg==",
    thumbnailUrl: "/images/regenerated_image_1785855437750.jpg",
    views: "9.6K",
    likes: "281",
    comments: "13",
    shares: "2",
    duration: "0:55"
  },
  {
    id: "brand-3",
    category: "brand",
    title: "Seamless Multitasking with Samsung Galaxy 📱",
    brand: "Samsung",
    description: "Relatable skit demonstrating smartphone battery life during a hectic creator shoot day.",
    videoUrl: "https://www.instagram.com/reel/DZ0ojwztSmT/?igsh=dnNyaXdoOWdqOHY1",
    thumbnailUrl: "/images/regenerated_image_1785855789159.jpg",
    views: "2K",
    likes: "89",
    comments: "14",
    shares: "1",
    duration: "1:05"
  }
];

export const INITIAL_METRICS: AnalyticsMetric[] = [
  {
    id: "views",
    label: "30-Day Video Views",
    value: "1.2M+",
    subtext: "High visual retention & viral replay rate",
    iconName: "Eye",
    trend: "+34% vs previous month",
    highlight: true
  },
  {
    id: "reach",
    label: "Accounts Reached",
    value: "789K+",
    subtext: "Unique individual audience profiles",
    iconName: "TrendingUp",
    trend: "+42% organic growth",
    highlight: true
  },
  {
    id: "non-followers",
    label: "Discovery Rate",
    value: "84.2%",
    subtext: "Majority of reach comes from non-followers, helping brands reach new audiences.",
    iconName: "Globe",
    trend: "High virality algorithm placement",
    highlight: true
  },
  {
    id: "engagement",
    label: "Avg. Engagement Rate",
    value: "8.6%",
    subtext: "3.2x industry average for lifestyle creators",
    iconName: "Heart"
  },
  {
    id: "demographic",
    label: "Core Audience",
    value: "18 - 34",
    subtext: "72% Female / 28% Male high-intent consumers",
    iconName: "Users"
  }
];

export const INITIAL_ANALYTICS_SCREENSHOTS: AnalyticsScreenshot[] = [
  {
    id: "scr-1",
    key: "views",
    title: "Views Performance",
    description: "Total impressions and video plays across Instagram Reels & TikTok.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=70",
    dateRange: "Last 30 Days"
  },
  {
    id: "scr-4",
    key: "engagement",
    title: "Engagement Breakdown",
    description: "Likes, comments, shares, and saves metrics demonstrating active community interest.",
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=70",
    dateRange: "Last 30 Days"
  },
  {
    id: "scr-5",
    key: "followers",
    title: "Followers Growth",
    description: "Consistent follower accumulation driven by relatable comedy skits.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=70",
    dateRange: "Last 30 Days"
  },
  {
    id: "scr-3",
    key: "audience",
    title: "Audience Demographics",
    description: "Age breakdown, top countries (Nigeria, UK, US) and gender split.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=70",
    dateRange: "Last 30 Days"
  }
];

export const WHY_PARTNER_BENEFITS: PartnerBenefit[] = [
  {
    id: "b1",
    title: "Authentic storytelling",
    description: "Crafting narratives that weave your product seamlessly into real, relatable everyday scenarios.",
    icon: "Sparkles"
  },
  {
    id: "b2",
    title: "High audience discovery through non-followers",
    description: "Optimized content strategy ensuring high algorithmic push to brand-new potential customers.",
    icon: "Compass"
  },
  {
    id: "b3",
    title: "Relatable content that drives connection",
    description: "Humorous and sincere delivery that builds immediate trust and emotional connection.",
    icon: "Smile"
  },
  {
    id: "b4",
    title: "Creative brand integration",
    description: "No forced ads — products naturally solve comedic problems or enhance lifestyle routines.",
    icon: "Flame"
  },
  {
    id: "b5",
    title: "Content designed for engagement and shareability",
    description: "High save and share ratios as viewers forward relatable skits directly to friends & group chats.",
    icon: "Share2"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "s1",
    title: "Sponsored Content",
    description: "Dedicated Instagram Reels & TikTok skits featuring your brand with custom messaging and Call To Action.",
    deliverables: ["1x Short-form Video (Reel/TikTok)", "1x Instagram Story Set (3 frames)", "Usage Rights for 30 days"],
    turnaround: "3-5 Days",
    popular: true,
    icon: "Video"
  },
  {
    id: "s2",
    title: "Product Features",
    description: "Organic product placement embedded into high-engagement lifestyle or comedy skits.",
    deliverables: ["Organic product highlight", "Brand Tag & Caption mention", "Direct link sticker in stories"],
    turnaround: "3 Days",
    icon: "ShoppingBag"
  },
  {
    id: "s3",
    title: "Brand Campaigns",
    description: "Multi-video campaign rollout tailored for product launches, seasonal promos, or major brand announcements.",
    deliverables: ["3x Cross-platform Skits", "Story Amplification Package", "Performance Report"],
    turnaround: "7-10 Days",
    popular: true,
    icon: "Megaphone"
  },
  {
    id: "s4",
    title: "Reviews & Experiences",
    description: "Honest, entertaining unboxing, hotel/restaurant experiences, or service walkthroughs.",
    deliverables: ["1x In-depth Experience Video", "High-res promotional photos", "Interactive poll/QA on stories"],
    turnaround: "4-6 Days",
    icon: "Star"
  },
  {
    id: "s5",
    title: "UGC Content Creation",
    description: "High-converting short-form videos created specifically for your brand's official ad accounts & social pages.",
    deliverables: ["2x Raw & Edited UGC Reels", "Commercial Ad License", "Raw Footage Access"],
    turnaround: "3-5 Days",
    icon: "Camera"
  },
  {
    id: "s6",
    title: "Event Coverage",
    description: "On-site presence, VIP event hosting, live story updates, and post-event recap video content.",
    deliverables: ["Live Event Appearance", "Real-time Story Blitz", "1x Event Recap Reel"],
    turnaround: "Event Date + 24hrs",
    icon: "Calendar"
  }
];

export const BRAND_PARTNERS = [
  { name: "Coca-Cola", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg" },
  { name: "Fanta", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Fanta_logo_%282016-2023%29.svg" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  { name: "MTN", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/New-mtn-logo.svg" },
  { name: "Infinix", logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/Infinix_Logo.svg" }
];
