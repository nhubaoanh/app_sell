import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Tạo QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Thời gian cache mặc định
      staleTime: 5 * 60 * 1000, // 5 phút
      gcTime: 10 * 60 * 1000, // 10 phút
      
      // Retry khi lỗi
      retry: (failureCount, error: any) => {
        // Không retry cho lỗi 4xx
        if (error?.response?.status >= 400 && error?.response?.status < 500) {
          return false;
        }
        // Retry tối đa 3 lần cho lỗi khác
        return failureCount < 3;
      },
      
      // Thời gian retry
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      
      // Refetch khi focus lại app
      refetchOnWindowFocus: false,
      
      // Refetch khi reconnect
      refetchOnReconnect: true,
    },
    mutations: {
      // Retry cho mutations
      retry: 1,
    },
  },
});

interface QueryProviderProps {
  children: React.ReactNode;
}

export const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
