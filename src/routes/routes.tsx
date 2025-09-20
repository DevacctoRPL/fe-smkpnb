import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';

const MainPages = lazy(() => import('@/pages/MainPages'));
const DetailNews = lazy(() => import('@/pages/DetailNews'));
const ListNewsPage = lazy(() => import('@/pages/ListNewsPage'));
const ListGallery = lazy(() => import('@/pages/ListGallery'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
        {
            path: '/',
            element: <Suspense fallback={<div>Loading...</div>}><MainPages /></Suspense>,
        },
        {
            path: '/news-list',
            element: <Suspense fallback={<div>Loading...</div>}><ListNewsPage /></Suspense>,
        },
        {
            path: '/gallery-list',
            element: <Suspense fallback={<div>Loading...</div>}><ListGallery /></Suspense>,
        },
    ],
    },
    {
        path: '/news/:id',
        element: <Suspense fallback={<div>Loading...</div>}><DetailNews /></Suspense>,
        // children: [
        //     {
        //         path: '/news/:id',
        //         element: <DetailNews />,
        //     },
        // ],
    },
    {
    path: "*",
    element: (
      <>
        <h1 className='text-center justify-center text-4xl text-red-800'>404 - Halaman Tidak Ditemukan</h1>
      </>
    ),
  },
]);

export default router;
