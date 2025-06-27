import { apiService } from '@/services/api';
import { AboutPageData, HomePageData, Project, Service } from '@/types';
import { useEffect, useState } from 'react';

export interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useAboutPage(): UseApiState<AboutPageData> {
  const [state, setState] = useState<UseApiState<AboutPageData>>({
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

export function useHomePage(): UseApiState<HomePageData> {
  const [state, setState] = useState<UseApiState<HomePageData>>({
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

export function useProjects(params?: {
  page?: number;
  pageSize?: number;
  sort?: string;
}): UseApiState<Project[]> {
  const [state, setState] = useState<UseApiState<Project[]>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchProjects = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));
        const response = await apiService.getProjects(params);

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
                : 'Failed to fetch projects',
          });
        }
      }
    };

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, [params?.page, params?.pageSize, params?.sort]);

  return state;
}

export function useProject(id: string): UseApiState<Project> {
  const [state, setState] = useState<UseApiState<Project>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!id) return;

    let isMounted = true;

    const fetchProject = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));
        const response = await apiService.getProject(id);

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
                : 'Failed to fetch project',
          });
        }
      }
    };

    fetchProject();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return state;
}

export function useServices(): UseApiState<Service[]> {
  const [state, setState] = useState<UseApiState<Service[]>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchServices = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));
        const response = await apiService.getServices();

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
                : 'Failed to fetch services',
          });
        }
      }
    };

    fetchServices();

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
}
