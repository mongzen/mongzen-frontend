import { apiService } from '@/services/api';
import {
  AboutPage,
  GlobalSettings,
  HomePage,
  ProcessPage,
  ServicePage,
  WorkPage,
} from '@/types';
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

export function useProcessPage(): UseApiState<ProcessPage> {
  const [state, setState] = useState<UseApiState<ProcessPage>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchProcessPage = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));
        const response = await apiService.getProcessPage();

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
                : 'Failed to fetch process page',
          });
        }
      }
    };

    fetchProcessPage();

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
}

export function useAboutPage(): UseApiState<AboutPage> {
  const [state, setState] = useState<UseApiState<AboutPage>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchAboutPage = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));
        const response = await apiService.getAboutPage();

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
                : 'Failed to fetch about page',
          });
        }
      }
    };

    fetchAboutPage();

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
}

export function useWorkPage(): UseApiState<WorkPage> {
  const [state, setState] = useState<UseApiState<WorkPage>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchWorkPage = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));
        const response = await apiService.getWorkPage();

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
                : 'Failed to fetch work page',
          });
        }
      }
    };

    fetchWorkPage();

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
}

export function useGlobal(): UseApiState<GlobalSettings> {
  const [state, setState] = useState<UseApiState<GlobalSettings>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchGlobal = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));
        const response = await apiService.getGlobal();

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
                : 'Failed to fetch global settings',
          });
        }
      }
    };

    fetchGlobal();

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
}
