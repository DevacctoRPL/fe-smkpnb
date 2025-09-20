import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getGaleri, GaleriItem } from '@/api/apiGaleri';
import Header from '@/components/Header';

const ListGallery: React.FC = () => {
  const { data: galleryImages, isLoading, isError } = useQuery<GaleriItem[]>({
    queryKey: ['galeri'],
    queryFn: getGaleri,
  });

  if (isLoading) {
    return <div className="text-center mt-8 text-gray-900 dark:text-slate-200">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center mt-8 text-red-600">Error fetching data.</div>;
  }

  if (!galleryImages || galleryImages.length === 0) {
    return <div className="text-center mt-8 text-gray-900 dark:text-slate-200">Tidak ada galeri yang tersedia.</div>;
  }

  return (
    <>
      <Header activeSection="gallery" />
      <section className="ml-8 mr-8 py-10">
      <h1 className="font-bold text-3xl text-center mb-10 text-gray-900 dark:text-slate-200">
        Daftar Galeri
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.map((image) => (
          <div key={image.id} className="group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <img
              loading="lazy"
              src={image.image}
              alt={image.title}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              {image.title}
            </span>
          </div>
        ))}
      </div>
    </section>

    </>
  );
};

export default ListGallery;
