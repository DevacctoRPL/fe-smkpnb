import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContexts';
import router from '@/routes/routes';
import { HelmetProvider } from 'react-helmet-async';
import SplashScreen from './components/SplashScreen';

const queryClient = new QueryClient();

function AppWithSplash() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000); // Splash screen akan menghilang setelah 1 detik

    return () => clearTimeout(timer);
  }, []);

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <HelmetProvider>
            {showSplash ? <SplashScreen /> : <RouterProvider router={router} />}
          </HelmetProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<AppWithSplash />);
