import {
  ContactForm,
  GlobalSettings,
  HomePage,
  ProcessPage,
  ServicePage,
  WorkPage,
} from '@/types';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  budget?: number;
  message: string;
}

export interface ContactFormResponse {
  id: number;
  success: boolean;
  message: string;
}

export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiError {
  error: {
    status: number;
    name: string;
    message: string;
  };
}

class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api',
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000, // 10 seconds timeout
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.api.interceptors.request.use(
      (config) => {
        // Add authorization token if available
        const token = this.getAuthToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.api.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error) => {
        if (error.response?.status === 401) {
          // Handle unauthorized access
          this.handleUnauthorized();
        }
        return Promise.reject(error);
      }
    );
  }

  private getAuthToken(): string | null {
    // Get token from localStorage or wherever you store it
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  private handleUnauthorized(): void {
    // Handle unauthorized access (e.g., redirect to login)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
      // You can add redirect logic here
    }
  }

  // Generic GET request
  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<StrapiResponse<T>> {
    const response = await this.api.get<StrapiResponse<T>>(url, config);
    return response.data;
  }

  async getHomePage(): Promise<StrapiResponse<HomePage>> {
    return this.get('/api/homepage?populate=*');
  }

  async getContactForm(): Promise<StrapiResponse<ContactForm>> {
    return this.get('/api/contact-form?populate=*');
  }

  async submitContactForm(data: ContactFormData): Promise<ContactFormResponse> {
    try {
      // Use the Next.js API route instead of calling Strapi directly
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            subject: data.subject,
            budget: data.budget,
            message: data.message,
            submittedAt: new Date().toISOString(),
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || 'Failed to send message');
      }

      const result = await response.json();

      return {
        id: result.data?.id || 0,
        success: true,
        message:
          'Your message has been sent successfully! We will get back to you soon.',
      };
    } catch (error) {
      console.error('Contact form submission error:', error);
      throw new Error('Failed to send your message. Please try again later.');
    }
  }

  // Services
  async getServicePage(): Promise<StrapiResponse<ServicePage>> {
    return this.get('/api/service?populate=*');
  }

  // Process
  async getProcessPage(): Promise<StrapiResponse<ProcessPage>> {
    return this.get('/api/process?populate=*');
  }

  // Works
  async getWorkPage(): Promise<StrapiResponse<WorkPage>> {
    return this.get('/api/work?populate=*');
  }

  async getGlobal(): Promise<StrapiResponse<GlobalSettings>> {
    return this.get('/api/global?populate=*');
  }
}

// Export a singleton instance
export const apiService = new ApiService();
export default apiService;
