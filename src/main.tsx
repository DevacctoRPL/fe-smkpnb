import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContexts';
import router from '@/routes/routes';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <HelmetProvider>
          <RouterProvider router={router} /> 
        </HelmetProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
