import { apiService } from '@/services/api';
import { useEffect, useState } from 'react';
import { HomePage } from '../types';

export interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

// export function useAboutPage(): UseApiState<AboutPageData> {
//   const [state, setState] = useState<UseApiState<AboutPageData>>({
//     data: null,
//     loading: true,
//     error: null,
//   });

//   useEffect(() => {
//     let isMounted = true;

//     const fetchAboutPage = async () => {
//       try {
//         setState((prev) => ({ ...prev, loading: true, error: null }));
//         const response = await apiService.getAboutPage();

//         if (isMounted) {
//           setState({
//             data: response.data,
//             loading: false,
//             error: null,
//           });
//         }
//       } catch (error) {
//         if (isMounted) {
//           setState({
//             data: null,
//             loading: false,
//             error:
//               error instanceof Error
//                 ? error.message
//                 : 'Failed to fetch about page',
//           });
//         }
//       }
//     };

//     fetchAboutPage();

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   return state;
// }

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
