import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useQuery } from '@tanstack/react-query';
import { getDetailBerita } from '@/api/apiDetailBerita';
import { NewsDetail } from '@/api/apiDetailBerita';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Facebook, Instagram, Twitter, Link } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const DetailNews: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); // Initialize useNavigate

  const { data, error, isLoading } = useQuery<NewsDetail, Error>({
    queryKey: ['detailBerita', id],
    queryFn: () => getDetailBerita(id!),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleTagClick = (tag: string) => {
    navigate(`/news-list?tag=${tag}`); // Navigate to ListNewsPage with tag query parameter
  };

  return (
    <>
      <Header activeSection={null} />
      <div className="w-full px-4 py-2 text-sm text-gray-500 bg-red-700 dark:text-gray-300 dark:bg-red-900">
        <a href="/" className="hover:text-black hover:underline text-red-100">Home</a> <span className="text-white mr-2">&gt;</span>
        <a href="/news-list" className="hover:text-black hover:underline text-red-100">News</a> <span className="text-white mr-2">&gt;</span>
        <span className="text-white">{data?.title}</span>
      </div>
      <div className='pb-10 pt-5 dark:bg-slate-900'>
      <div className="max-w-screen-sm mx-auto px-8 dark:text-white">
        <h1 className="title mr-3 mt-5 text-justify font-extrabold text-wrap-2 text-balance dark:text-white">
          {data?.title}
        </h1>
        <p className="subtitle mt-3 text-red-700 text-balance dark:text-red-400">
          {data?.subtitle}
        </p>
        <p className="text-zinc-800 opacity-50 dark:text-gray-400">
          {data?.updated_at ? new Date(data.updated_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : ''} | Author: {data?.author}
        </p>
        <div className="flex">
          <p className="mt-3 h-0 text-sm">Bagikan :</p>
          <a href="#" title='facebook' onClick={(e) => { e.preventDefault(); window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank'); }}><Facebook className="w-4 ml-2 mt-4" /></a>
          <a href="#" title='instagram' onClick={(e) => { e.preventDefault(); navigator.clipboard.writeText(window.location.href); alert('Link copied to clipboard!'); }}><Instagram className="w-4 ml-2 mt-4" /></a>
          <a href="#" title='twitter' onClick={(e) => { e.preventDefault(); window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${data?.title}`, '_blank'); }}><Twitter className="w-4 ml-2 mt-4" /></a>
          <a href="#" title='whatsapp' onClick={(e) => { e.preventDefault(); window.open(`https://api.whatsapp.com/send?text=lihat! saya menemukan berita yang sangat bagus!! ${data?.title} - ${window.location.href}`, '_blank'); }}><FaWhatsapp className="w-4 ml-2 mt-4" /></a>
          <a href="#" title='copy link' onClick={(e) => { e.preventDefault(); navigator.clipboard.writeText(window.location.href); alert('Link copied to clipboard!'); }}><Link className="w-4 ml-2 mt-4" /></a>
        </div>

        <img
          loading="lazy"
          src={data?.images}
          alt="Foto-Dss"
          title="Foto-Dss"
          className="rounded-xl mt-4 shadow-xl mb-5"
        />

        <p className="mr-3 text-justify indent-5 font-semibold mb-3 dark:text-gray-300">
          {data?.description}
        </p>

        {/* Tagar */}
        <div className="flex">
          <div className="mt-5 bg-red-700 h-7 w-2"></div>
          <h1 className="font-extrabold h-0 ml-2 mt-5">Tagar</h1>
        </div>
        <div className="flex text-center mt-5">
          {data?.tags.map((tag, index) => (
            <div
              key={index}
              className="bg-green-700 rounded-md w-20 ml-4 cursor-pointer" // Add cursor-pointer
              onClick={() => handleTagClick(tag)} // Add onClick handler
            >
              <div className="text-sm text-white">#{tag}</div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailNews;
