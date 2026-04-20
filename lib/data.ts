export type Locale = "vi" | "en";

export type LocalizedText = {
  vi: string;
  en: string;
};

export type ProjectCategoryKey =
  | "mobile"
  | "web"
  | "backend"
  | "ai"
  | "other";

export type ProjectLayout = "default" | "wide" | "spotlight";

export type Project = {
  id: string;
  slug: string;
  title: LocalizedText;
  category: ProjectCategoryKey;
  shortDescription: LocalizedText;
  description: LocalizedText;
  techStack: string[];
  thumbnail: string;
  images: string[];
  logo?: string;
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
    appStore?: string;
  };
  highlight?: boolean;
  featured?: boolean;
  year?: number;
  ui?: {
    themeColor?: string;
    gradient?: string;
    layout?: ProjectLayout;
  };
};

export type ProjectCategory = {
  key: ProjectCategoryKey;
  category: LocalizedText;
  description?: LocalizedText;
  projects: Project[];
};

export const profileContent = {
  name: "Minh Le Quang",
  role: {
    vi: "Chuyên gia triển khai chuyển đổi số & giải pháp phần mềm đa ngành",
    en: "Digital transformation and multi-industry software delivery specialist",
  },
  summary: {
    vi: "Tôi tư vấn và triển khai giải pháp chuyển đổi số toàn diện cho doanh nghiệp, từ chiến lược vận hành đến sản phẩm thực tế: hệ thống bán hàng đa kênh, nền tảng food delivery, booking, website đa ngành, landing page và portfolio cao cấp. Tôi cam kết đồng hành theo hướng kết quả đo lường được, giúp doanh nghiệp tăng trưởng doanh thu, tối ưu quy trình, rút ngắn thời gian triển khai và xây dựng trải nghiệm người dùng hiện đại, mượt mà, khác biệt.",
    en: "I design and deliver practical digital transformation systems for businesses: sales platforms, food delivery products, booking platforms, multi-industry websites, and premium landing pages and portfolios. From strategy to production rollout, I focus on velocity, scalability, and polished user experience.",
  },
  cta: {
    vi: "Sẵn sàng biến ý tưởng của bạn thành sản phẩm vận hành thực tế, nhanh, đúng mục tiêu và có thể mở rộng bền vững.",
    en: "Ready to turn your vision into a production-ready product.",
  },
  location: "Thành phố Hồ Chí Minh, Việt Nam",
  contact: {
    email: "mminh.lequang.dev@gmail.com",
    phone: "+84 879 73 74 75",
  },
  social: {
    github: "https://github.com/mminhlequang"
  },
} as const;

const projectCatalog: Project[] = [
  {
    id: "project-sales-omnishop",
    slug: "omnishop-sales-cloud",
    title: {
      vi: "OmniShop Sales Cloud",
      en: "OmniShop Sales Cloud",
    },
    category: "web",
    shortDescription: {
      vi: "Nền tảng bán hàng đa kênh cho chuỗi bán lẻ và D2C.",
      en: "A multi-channel commerce platform for retail chains and D2C brands.",
    },
    description: {
      vi: "Đồng bộ đơn hàng, tồn kho, khuyến mãi và CRM trên web, mobile và POS. Tăng tốc độ xử lý đơn và tối ưu chuyển đổi cho các chiến dịch theo mùa.",
      en: "Unified orders, inventory, promotions, and CRM across web, mobile, and POS. Increased order velocity and conversion for seasonal campaigns.",
    },
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Stripe"],
    thumbnail: "/images/projects/sales-dashboard.svg",
    images: [
      "/images/projects/sales-dashboard.svg",
      "/images/projects/sales-analytics.svg",
    ],
    logo: "/images/logos/omnishop.svg",
    links: {
      live: "https://example.com/omnishop",
      caseStudy: "https://example.com/omnishop/case-study",
      github: "https://github.com/",
    },
    featured: true,
    highlight: true,
    year: 2026,
    ui: {
      themeColor: "#3B82F6",
      gradient: "from-blue-600/25 via-cyan-500/20 to-blue-900/30",
      layout: "spotlight",
    },
  },
  {
    id: "project-food-fastbite",
    slug: "fastbite-delivery-suite",
    title: {
      vi: "FastBite Delivery Suite",
      en: "FastBite Delivery Suite",
    },
    category: "mobile",
    shortDescription: {
      vi: "Hệ thống food delivery gồm app khách, app tài xế và admin realtime.",
      en: "A complete food delivery stack: customer app, rider app, and realtime admin.",
    },
    description: {
      vi: "Tối ưu hành trình đặt món, định tuyến tài xế và giảm thời gian giao trung bình xuống dưới 25 phút cho khu vực nội thành.",
      en: "Optimized ordering flow and rider dispatch to bring average delivery time below 25 minutes in urban zones.",
    },
    techStack: ["Flutter", "Firebase", "Go", "Kafka", "Mapbox"],
    thumbnail: "/images/projects/food-delivery.svg",
    images: [
      "/images/projects/food-delivery.svg",
      "/images/projects/food-ops.svg",
    ],
    logo: "/images/logos/fastbite.svg",
    links: {
      live: "https://example.com/fastbite",
      appStore: "https://apps.apple.com/",
      caseStudy: "https://example.com/fastbite/case-study",
    },
    highlight: true,
    year: 2025,
    ui: {
      themeColor: "#22D3EE",
      gradient: "from-cyan-500/25 via-blue-500/20 to-slate-900/40",
      layout: "wide",
    },
  },
  {
    id: "project-booking-reservio",
    slug: "reservio-booking-platform",
    title: {
      vi: "Reservio Booking Platform",
      en: "Reservio Booking Platform",
    },
    category: "web",
    shortDescription: {
      vi: "Hệ thống booking linh hoạt cho spa, gym, nhà hàng và dịch vụ y tế.",
      en: "Flexible booking platform for spa, gym, restaurants, and healthcare.",
    },
    description: {
      vi: "Quản lý lịch, nhắc lịch thông minh, thanh toán đặt cọc và dashboard theo dõi công suất theo khung giờ.",
      en: "Calendar management, smart reminders, deposit payments, and occupancy analytics by time slot.",
    },
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Twilio"],
    thumbnail: "/images/projects/booking-platform.svg",
    images: [
      "/images/projects/booking-platform.svg",
      "/images/projects/booking-insights.svg",
    ],
    logo: "/images/logos/reservio.svg",
    links: {
      live: "https://example.com/reservio",
      github: "https://github.com/",
    },
    year: 2025,
    ui: {
      themeColor: "#60A5FA",
      gradient: "from-blue-500/20 via-sky-500/15 to-slate-950/40",
      layout: "default",
    },
  },
  {
    id: "project-backend-coreops",
    slug: "coreops-integration-backbone",
    title: {
      vi: "CoreOps Integration Backbone",
      en: "CoreOps Integration Backbone",
    },
    category: "backend",
    shortDescription: {
      vi: "Hạ tầng tích hợp API và workflow cho hệ thống doanh nghiệp.",
      en: "API integration and workflow backbone for enterprise systems.",
    },
    description: {
      vi: "Triển khai event-driven architecture để đồng bộ ERP, CRM, ecommerce và BI. Đảm bảo logging, tracing và SLA vận hành ổn định.",
      en: "Implemented event-driven architecture to sync ERP, CRM, ecommerce, and BI with observability and stable operational SLAs.",
    },
    techStack: ["Go", "Kafka", "gRPC", "OpenTelemetry", "ClickHouse"],
    thumbnail: "/images/projects/backend-core.svg",
    images: [
      "/images/projects/backend-core.svg",
      "/images/projects/backend-observability.svg",
    ],
    logo: "/images/logos/coreops.svg",
    links: {
      caseStudy: "https://example.com/coreops/case-study",
      github: "https://github.com/",
    },
    year: 2024,
    ui: {
      themeColor: "#2563EB",
      gradient: "from-blue-700/30 via-indigo-500/20 to-slate-900/45",
      layout: "wide",
    },
  },
  {
    id: "project-ai-reco",
    slug: "smart-reco-engine",
    title: {
      vi: "Smart Reco Engine",
      en: "Smart Recommendation Engine",
    },
    category: "ai",
    shortDescription: {
      vi: "Gợi ý sản phẩm và combo theo hành vi mua sắm thực tế.",
      en: "Behavior-based recommendation engine for products and bundles.",
    },
    description: {
      vi: "Ứng dụng ranking model và segmentation để tăng giá trị đơn hàng trung bình trên ecommerce và ứng dụng food.",
      en: "Applied ranking and segmentation models to improve average basket value in ecommerce and food apps.",
    },
    techStack: ["Python", "FastAPI", "Pandas", "BigQuery", "Vertex AI"],
    thumbnail: "/images/projects/ai-reco.svg",
    images: [
      "/images/projects/ai-reco.svg",
      "/images/projects/ai-insights.svg",
    ],
    logo: "/images/logos/insight-ai.svg",
    links: {
      caseStudy: "https://example.com/reco/case-study",
      live: "https://example.com/reco",
    },
    year: 2026,
    ui: {
      themeColor: "#0EA5E9",
      gradient: "from-sky-500/30 via-blue-600/20 to-black/50",
      layout: "default",
    },
  },
  {
    id: "project-brand-landing",
    slug: "brand-launch-landing-kit",
    title: {
      vi: "Brand Launch Landing Kit",
      en: "Brand Launch Landing Kit",
    },
    category: "other",
    shortDescription: {
      vi: "Bộ landing page premium cho chiến dịch ra mắt sản phẩm mới.",
      en: "Premium landing page kit for product launch campaigns.",
    },
    description: {
      vi: "Thiết kế chuyển đổi cao với hero video, storytelling section và form thu lead tối ưu cho ads traffic.",
      en: "High-conversion storytelling landing pages with media-rich hero and optimized lead forms for paid traffic.",
    },
    techStack: ["Next.js", "Framer Motion", "Tailwind", "A/B Testing"],
    thumbnail: "/images/projects/landing-brand.svg",
    images: [
      "/images/projects/landing-brand.svg",
      "/images/projects/landing-metrics.svg",
    ],
    logo: "/images/logos/launchcraft.svg",
    links: {
      live: "https://example.com/launch-kit",
      caseStudy: "https://example.com/launch-kit/case-study",
    },
    year: 2024,
    ui: {
      themeColor: "#38BDF8",
      gradient: "from-sky-400/25 via-blue-600/20 to-slate-950/50",
      layout: "default",
    },
  },
];

const categoryMeta: Record<
  ProjectCategoryKey,
  {
    category: LocalizedText;
    description: LocalizedText;
  }
> = {
  mobile: {
    category: { vi: "Ứng dụng Mobile", en: "Mobile Apps" },
    description: {
      vi: "Ứng dụng mobile tập trung vào trải nghiệm đặt hàng và vận hành realtime.",
      en: "Mobile products focused on seamless ordering and realtime operations.",
    },
  },
  web: {
    category: { vi: "Nền tảng Web", en: "Web Platforms" },
    description: {
      vi: "Nền tảng web cho bán hàng, booking và hệ thống quản trị đa phòng ban.",
      en: "Web platforms for sales, booking, and cross-functional operations.",
    },
  },
  backend: {
    category: { vi: "Hệ thống Backend", en: "Backend Systems" },
    description: {
      vi: "Hệ thống backend hỗ trợ scale, tích hợp và quan sát hệ thống.",
      en: "Scalable backend architecture with integrations and observability.",
    },
  },
  ai: {
    category: { vi: "Giải pháp AI", en: "AI Solutions" },
    description: {
      vi: "Thành phần AI giúp tối ưu conversion và giá trị đơn hàng.",
      en: "AI components that optimize conversion and basket value.",
    },
  },
  other: {
    category: { vi: "Landing Page & Portfolio", en: "Landing & Portfolio" },
    description: {
      vi: "Landing page, portfolio và trang trình bày thương hiệu mang tính premium.",
      en: "Premium landing pages, portfolios, and brand presentation websites.",
    },
  },
};

export const categoryOrder: ProjectCategoryKey[] = [
  "web",
  "mobile",
  "backend",
  "ai",
  "other",
];

export const projectCategories: ProjectCategory[] = categoryOrder.map((key) => ({
  key,
  category: categoryMeta[key].category,
  description: categoryMeta[key].description,
  projects: projectCatalog.filter((project) => project.category === key),
}));

export const allProjects = projectCatalog;

export const featuredProject =
  projectCatalog.find((project) => project.featured) ?? projectCatalog[0];

export function getProjectsByCategory(key: ProjectCategoryKey): Project[] {
  return projectCatalog.filter((project) => project.category === key);
}
