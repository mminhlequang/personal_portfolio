export type Locale = "vi" | "en";

export type LocalizedText = {
  vi: string;
  en: string;
};

export type ProjectCategoryKey =
  | "mobile/web"
  | "software"
  | "other services";

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
    vi: "Tôi tư vấn và triển khai giải pháp chuyển đổi số toàn diện cho doanh nghiệp / hộ kinh doanh / cá nhân, từ chiến lược vận hành đến sản phẩm thực tế: hệ thống bán hàng đa kênh, nền tảng food delivery, booking, website đa ngành, landing page và portfolio cao cấp. Tôi cam kết đồng hành theo hướng kết quả đo lường được, giúp doanh nghiệp tăng trưởng doanh thu, tối ưu quy trình, rút ngắn thời gian triển khai và xây dựng trải nghiệm người dùng hiện đại, mượt mà, khác biệt.",
    en: "I design and deliver practical digital transformation systems for businesses / entrepreneurs / individuals: sales platforms, food delivery products, booking platforms, multi-industry websites, and premium landing pages and portfolios. From strategy to production rollout, I focus on velocity, scalability, and polished user experience.",
  },
  cta: {
    vi: "Sẵn sàng biến ý tưởng của bạn thành sản phẩm vận hành thực tế, nhanh, đúng mục tiêu và có thể mở rộng bền vững.",
    en: "Ready to turn your vision into a production-ready product.",
  },
  location: "Huế, Việt Nam",
  contact: {
    email: "mminh.lequang.dev@gmail.com",
    phone: "+84 879 73 74 75",
  },
  social: {
    github: "https://github.com/mminhlequang",
    facebook: "https://www.facebook.com/mminhlequang",
  },
} as const;

const projectCatalog: Project[] = [
  {
    id: "techads-store",
    slug: "techads-store",
    title: {
      vi: "TechAds Store - Nền tảng bán vật liệu quảng cáo online",
      en: "TechAds Store - Online Advertising Materials Store",
    },
    category: "mobile/web",
    shortDescription: {
      vi: "Nền tảng thương mại điện tử bán vật liệu quảng cáo đa dạng, uy tín",
      en: "E-commerce platform for diverse, reliable advertising materials",
    },
    description: {
      vi: "Đồng bộ đơn hàng, tồn kho, khuyến mãi và CRM trên web. Tăng tốc độ xử lý đơn và tối ưu chuyển đổi cho các chiến dịch theo mùa. Triển khai hệ thống thanh toán, nạp tiền và quản lý tài khoản người dùng. Tích hợp hệ thống quản trị đơn hàng, báo cáo doanh thu và phân tích hành vi khách hàng.",
      en: "Developed a web platform for managing orders, inventory, promotions, and CRM. Accelerated order processing and optimized conversion for seasonal campaigns. Implemented payment systems, account management, and integrated order management, revenue reporting, and customer behavior analytics.",
    },
    techStack: ["Next.js", "Fastapi", "PostgreSQL", "Stripe"],
    thumbnail: "/images/projects/techads1.png",
    images: [
      "/images/projects/techads1.png",
      "/images/projects/techads2.png",
      "/images/projects/techads3.png",
    ],
    logo: "/images/logos/techads.svg",
    links: {
      live: "https://techads.store",
      // github: "https://github.com/mminhlequang",
    },
    featured: true,
    highlight: true,
    year: 2026,
    ui: {
      themeColor: "#E8BF63",
      gradient: "from-blue-600/25 via-cyan-500/20 to-blue-900/30",
      layout: "spotlight",
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
  "mobile/web": {
    category: { vi: "Ứng dụng Mobile/Website", en: "Mobile Apps/Website" },
    description: {
      vi: "Ứng dụng mobile / Website tập trung vào trải nghiệm đặt hàng và vận hành realtime.",
      en: "Mobile products / Website focused on seamless ordering and realtime operations.",
    },
  },


  software: {
    category: { vi: "Phần mềm", en: "Software" },
    description: {
      vi: "Các thành phần phần mềm giúp tối ưu conversion và giá trị đơn hàng.",
      en: "Software components that optimize conversion and basket value.",
    },
  },
  "other services": {
    category: { vi: "Cung cấp các dịch vụ tiện ích số khác", en: "Other Services" },
    description: {
      vi: "Chúng tôi cũng cung cấp các dịch vụ số khác như landing page, portfolio cao cấp và giải pháp chuyển đổi số toàn diện cho doanh nghiệp / cá nhân.",
      en: "We also offer other digital services such as premium landing pages, portfolios, and comprehensive digital transformation solutions for businesses / individuals.",
    },
  },
};

export const categoryOrder: ProjectCategoryKey[] = [
  "mobile/web",
  "software",
  "other services",
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
