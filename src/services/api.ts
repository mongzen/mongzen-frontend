import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { HomePage } from '../types';

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
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
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

  // Generic POST request
  // async post<T>(
  //   url: string,
  //   data?: any,
  //   config?: AxiosRequestConfig
  // ): Promise<StrapiResponse<T>> {
  //   const response = await this.api.post<StrapiResponse<T>>(url, data, config);
  //   return response.data;
  // }

  async getHomePage(): Promise<StrapiResponse<HomePage>> {
    return this.get('/homepage?populate=*');
  }

  // async submitContactForm(data: {
  //   name: string;
  //   email: string;
  //   message: string;
  //   phone?: string;
  // }): Promise<StrapiResponse<string>> {
  //   return this.post('/contact-forms', { data });
  // }
}

// Export a singleton instance
export const apiService = new ApiService();
export default apiService;
