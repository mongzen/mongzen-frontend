import { apiService } from '@/services/api';
import {
  AboutPage,
  ContactPage,
  GlobalSettings,
  HomePage,
  ProcessPage,
  ServicePage,
  WorkPage,
} from '@/types';
import { useQuery } from '@tanstack/react-query';

export interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useHomePage(): UseApiState<HomePage> {
  const { data, isLoading, error } = useQuery({
    queryKey: ['homePage'],
    queryFn: () => apiService.getHomePage(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    data: data?.data || null,
    loading: isLoading,
    error: error instanceof Error ? error.message : null,
  };
}

export function useServicePage(): UseApiState<ServicePage> {
  const { data, isLoading, error } = useQuery({
    queryKey: ['servicePage'],
    queryFn: () => apiService.getServicePage(),
    staleTime: 5 * 60 * 1000,
  });

  return {
    data: data?.data || null,
    loading: isLoading,
    error: error instanceof Error ? error.message : null,
  };
}

export function useProcessPage(): UseApiState<ProcessPage> {
  const { data, isLoading, error } = useQuery({
    queryKey: ['processPage'],
    queryFn: () => apiService.getProcessPage(),
    staleTime: 5 * 60 * 1000,
  });

  return {
    data: data?.data || null,
    loading: isLoading,
    error: error instanceof Error ? error.message : null,
  };
}

export function useAboutPage(): UseApiState<AboutPage> {
  const { data, isLoading, error } = useQuery({
    queryKey: ['aboutPage'],
    queryFn: () => apiService.getAboutPage(),
    staleTime: 5 * 60 * 1000,
  });

  return {
    data: data?.data || null,
    loading: isLoading,
    error: error instanceof Error ? error.message : null,
  };
}

export function useWorkPage(): UseApiState<WorkPage> {
  const { data, isLoading, error } = useQuery({
    queryKey: ['workPage'],
    queryFn: () => apiService.getWorkPage(),
    staleTime: 5 * 60 * 1000,
  });

  return {
    data: data?.data || null,
    loading: isLoading,
    error: error instanceof Error ? error.message : null,
  };
}

export function useGlobal(): UseApiState<GlobalSettings> {
  const { data, isLoading, error } = useQuery({
    queryKey: ['global'],
    queryFn: () => apiService.getGlobal(),
    staleTime: 5 * 60 * 1000,
  });

  return {
    data: data?.data || null,
    loading: isLoading,
    error: error instanceof Error ? error.message : null,
  };
}

export function useContactPage(): UseApiState<ContactPage> {
  const { data, isLoading, error } = useQuery({
    queryKey: ['contactPage'],
    queryFn: () => apiService.getContactPage(),
    staleTime: 5 * 60 * 1000,
  });

  return {
    data: data?.data || null,
    loading: isLoading,
    error: error instanceof Error ? error.message : null,
  };
}
