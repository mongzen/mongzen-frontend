'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      // Cache management options
      staleTime: 1000 * 60 * 30, // 30 minutes
    },
  },
});

export default function BaseProvider(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}
