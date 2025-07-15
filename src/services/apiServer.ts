import { API_ENDPOINTS, CACHE_TIME_24_HOURS } from '@/constants';
import {
  AboutPage,
  ContactPage,
  GlobalSettings,
  HomePage,
  ProcessPage,
  ServicePage,
  WorkPage,
} from '@/types';

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

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export const getGlobalSettings = () =>
  new Promise<StrapiResponse<GlobalSettings> | undefined>(
    (resolve, rejects) => {
      fetch(`${BASE_URL}${API_ENDPOINTS.GLOBAL}${API_ENDPOINTS.POPULATE_ALL}`, {
        cache: 'force-cache',
        next: {
          revalidate: CACHE_TIME_24_HOURS,
        },
      })
        .then((response) => response.json())
        .then((_json) => {
          const result = _json as StrapiResponse<GlobalSettings>;
          resolve(result);
        })
        .catch((error) => {
          console.error('Error fetching global settings:', error);
          rejects(error);
        });
    }
  );

export const getHomepage = () =>
  new Promise<StrapiResponse<HomePage> | undefined>((resolve, rejects) => {
    fetch(`${BASE_URL}${API_ENDPOINTS.HOMEPAGE}${API_ENDPOINTS.POPULATE_ALL}`, {
      cache: 'force-cache',
      next: {
        revalidate: CACHE_TIME_24_HOURS,
      },
    })
      .then((response) => response.json())
      .then((_json) => {
        const result = _json as StrapiResponse<HomePage>;
        resolve(result);
      })
      .catch((error) => {
        console.error('Error fetching challenger games:', error);
        rejects(error);
      });
  });

export const getAboutPage = () =>
  new Promise<StrapiResponse<AboutPage> | undefined>((resolve, rejects) => {
    fetch(`${BASE_URL}${API_ENDPOINTS.ABOUT}${API_ENDPOINTS.POPULATE_ALL}`, {
      cache: 'force-cache',
      next: {
        revalidate: CACHE_TIME_24_HOURS,
      },
    })
      .then((response) => response.json())
      .then((_json) => {
        const result = _json as StrapiResponse<AboutPage>;
        resolve(result);
      })
      .catch((error) => {
        console.error('Error fetching about page:', error);
        rejects(error);
      });
  });

export const getProcessPage = () =>
  new Promise<StrapiResponse<ProcessPage> | undefined>((resolve, rejects) => {
    fetch(`${BASE_URL}${API_ENDPOINTS.PROCESS}${API_ENDPOINTS.POPULATE_ALL}`, {
      cache: 'force-cache',
      next: {
        revalidate: CACHE_TIME_24_HOURS,
      },
    })
      .then((response) => response.json())
      .then((_json) => {
        const result = _json as StrapiResponse<ProcessPage>;
        resolve(result);
      })
      .catch((error) => {
        console.error('Error fetching process page:', error);
        rejects(error);
      });
  });

export const getWorkPage = () =>
  new Promise<StrapiResponse<WorkPage> | undefined>((resolve, rejects) => {
    fetch(`${BASE_URL}${API_ENDPOINTS.WORK}${API_ENDPOINTS.POPULATE_ALL}`, {
      cache: 'force-cache',
      next: {
        revalidate: CACHE_TIME_24_HOURS,
      },
    })
      .then((response) => response.json())
      .then((_json) => {
        const result = _json as StrapiResponse<WorkPage>;
        resolve(result);
      })
      .catch((error) => {
        console.error('Error fetching work page:', error);
        rejects(error);
      });
  });

export const getContactPage = () =>
  new Promise<StrapiResponse<ContactPage> | undefined>((resolve, rejects) => {
    fetch(`${BASE_URL}${API_ENDPOINTS.CONTACT}${API_ENDPOINTS.POPULATE_ALL}`, {
      cache: 'force-cache',
      next: {
        revalidate: CACHE_TIME_24_HOURS,
      },
    })
      .then((response) => response.json())
      .then((_json) => {
        const result = _json as StrapiResponse<ContactPage>;
        resolve(result);
      })
      .catch((error) => {
        console.error('Error fetching contact page:', error);
        rejects(error);
      });
  });

export const getServicePage = () =>
  new Promise<StrapiResponse<ServicePage> | undefined>((resolve, rejects) => {
    fetch(`${BASE_URL}${API_ENDPOINTS.SERVICE}${API_ENDPOINTS.POPULATE_ALL}`, {
      cache: 'force-cache',
      next: {
        revalidate: CACHE_TIME_24_HOURS,
      },
    })
      .then((response) => response.json())
      .then((_json) => {
        const result = _json as StrapiResponse<ServicePage>;
        resolve(result);
      })
      .catch((error) => {
        console.error('Error fetching service page:', error);
        rejects(error);
      });
  });
