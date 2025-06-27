// Common Strapi types
export interface StrapiImage {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail?: StrapiImageFormat;
      small?: StrapiImageFormat;
      medium?: StrapiImageFormat;
      large?: StrapiImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
  };
}

export interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface StrapiMediaData {
  data: StrapiImage | StrapiImage[] | null;
}

// About page types
export interface AboutPageData {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    hero_image: StrapiMediaData;
    team_members: {
      data: TeamMember[];
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface TeamMember {
  id: number;
  attributes: {
    name: string;
    position: string;
    bio: string;
    avatar: StrapiMediaData;
    social_links: {
      linkedin?: string;
      twitter?: string;
      github?: string;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// Home page types
export interface HomePageData {
  id: number;
  attributes: {
    hero_title: string;
    hero_subtitle: string;
    hero_description: string;
    hero_image: StrapiMediaData;
    hero_cta_text: string;
    hero_cta_link: string;
    services_section_title: string;
    services_section_description: string;
    featured_projects: {
      data: Project[];
    };
    testimonials: {
      data: Testimonial[];
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// Project types
export interface Project {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    slug: string;
    featured_image: StrapiMediaData;
    gallery: StrapiMediaData;
    technologies: string[];
    client: string;
    project_url?: string;
    github_url?: string;
    status: 'draft' | 'published' | 'archived';
    featured: boolean;
    completed_date: string;
    category: {
      data: ProjectCategory;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface ProjectCategory {
  id: number;
  attributes: {
    name: string;
    slug: string;
    description: string;
    color: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// Service types
export interface Service {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    icon: StrapiMediaData;
    features: string[];
    price_range: string;
    slug: string;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// Testimonial types
export interface Testimonial {
  id: number;
  attributes: {
    name: string;
    position: string;
    company: string;
    content: string;
    rating: number;
    avatar: StrapiMediaData;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// Contact form types
export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  company?: string;
  budget_range?: string;
  project_type?: string;
  timeline?: string;
}

export interface ContactFormSubmission {
  id: number;
  attributes: ContactForm & {
    status: 'new' | 'in_progress' | 'resolved' | 'closed';
    notes?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// Blog types (if you plan to add a blog)
export interface BlogPost {
  id: number;
  attributes: {
    title: string;
    content: string;
    excerpt: string;
    slug: string;
    featured_image: StrapiMediaData;
    tags: {
      data: Tag[];
    };
    author: {
      data: Author;
    };
    published: boolean;
    featured: boolean;
    seo: SEO;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Tag {
  id: number;
  attributes: {
    name: string;
    slug: string;
    color: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface Author {
  id: number;
  attributes: {
    name: string;
    bio: string;
    avatar: StrapiMediaData;
    social_links: {
      website?: string;
      linkedin?: string;
      twitter?: string;
    };
    createdAt: string;
    updatedAt: string;
  };
}

export interface SEO {
  meta_title: string;
  meta_description: string;
  keywords: string[];
  og_image: StrapiMediaData;
}

// API Response types
export interface ApiError {
  error: {
    status: number;
    name: string;
    message: string;
    details: any;
  };
}

export interface PaginationMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
