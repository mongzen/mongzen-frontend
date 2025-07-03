import { apiService } from '@/services/api';
import { ContactForm, HomePage, ServicePage } from '@/types';
import { useEffect, useState } from 'react';

export interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useHomePage(): UseApiState<HomePage> {
  const [state, setState] = useState<UseApiState<HomePage>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchHomePage = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));
        const response = await apiService.getHomePage();

        if (isMounted) {
          setState({
            data: response.data,
            loading: false,
            error: null,
          });
        }
      } catch (error) {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error:
              error instanceof Error
                ? error.message
                : 'Failed to fetch home page',
          });
        }
      }
    };

    fetchHomePage();

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
}

export function useContactForm(): UseApiState<ContactForm> {
  const [state, setState] = useState<UseApiState<ContactForm>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchContactForm = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));
        const response = await apiService.getContactForm();

        if (isMounted) {
          setState({
            data: response.data,
            loading: false,
            error: null,
          });
        }
      } catch (error) {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error:
              error instanceof Error
                ? error.message
                : 'Failed to fetch contact form',
          });
        }
      }
    };

    fetchContactForm();

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
}

export function useServicePage(): UseApiState<ServicePage> {
  const [state, setState] = useState<UseApiState<ServicePage>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchServicePage = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));
        const response = await apiService.getServicePage();

        if (isMounted) {
          setState({
            data: response.data,
            loading: false,
            error: null,
          });
        }
      } catch (error) {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error:
              error instanceof Error
                ? error.message
                : 'Failed to fetch service page',
          });
        }
      }
    };

    fetchServicePage();

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
}
