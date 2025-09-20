import React, { useState, useMemo, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useLocation } from 'react-router-dom';
import { getBerita, NewsItem } from '@/api/apiBerita';
import Header from '@/components/Header';
// import News from '@/components/News';

const ListNewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTag = queryParams.get('tag') || 'all';

  const [selectedTag, setSelectedTag] = useState<string>(initialTag);

  const { data, error, isError, isLoading } = useQuery<NewsItem[]>({
    queryKey: ['allNews'],
    queryFn: getBerita,
  });

  useEffect(() => {
    const tagFromUrl = queryParams.get('tag') || 'all';
    if (tagFromUrl !== selectedTag) {
      setSelectedTag(tagFromUrl);
    }
  }, [location.search, queryParams, selectedTag]);

  const uniqueTags = useMemo(() => {
    if (!data) return ['all'];
    const allTags = data.flatMap(item => item.tags || []);
    const distinctTags = Array.from(new Set(allTags));
    return ['all', ...distinctTags];
  }, [data]);

  const filteredAndSortedNews = useMemo(() => {
    let currentNews = data;

    if (searchTerm) {
      currentNews = currentNews?.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedTag !== 'all') {
      currentNews = currentNews?.filter(item =>
        item.tags?.includes(selectedTag)
      );
    }

    return currentNews;
  }, [data, searchTerm, selectedTag]);

  if (isLoading) {
    return <div>Loading all news...</div>;
  }

  if (isError) {
    console.error('Error fetching all news:', error);
    return <div>Error fetching data.</div>;
  }

  const handleCardClick = (id: string) => {
    navigate(`/news/${id}`);
  };

  const handleTagChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTag = event.target.value;
    setSelectedTag(newTag);
    if (newTag && newTag !== 'all') {
      navigate(`/news-list?tag=${newTag}`);
    } else {
      navigate('/news-list');
    }
  };

  return (
    <>
      <Header activeSection="news" />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">Daftar Berita</h1>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Cari berita..."
            className="flex-grow p-2 border border-gray-300 rounded-md dark:bg-slate-900 dark:border-neutral-700 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-2 border border-gray-300 rounded-md dark:bg-slate-900 dark:border-neutral-700 dark:text-white"
            value={selectedTag}
            onChange={handleTagChange}
          >
            {uniqueTags.map(tag => (
              <option key={tag} value={tag}>
                {tag === 'all' ? 'Semua Tag' : tag}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedNews?.map((item: NewsItem) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 shadow-sm border border-neutral-200 dark:border-neutral-700 rounded-xl p-4 cursor-pointer"
              onClick={() => handleCardClick(item.id)}
            >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold mb-2 dark:text-gray-300">{item.title}</h2>
            <p className="text-gray-600 dark:text-neutral-400 text-sm">{item.description}</p>
            <p className="text-gray-600 dark:text-neutral-400 text-sm">{item.updated_at ? new Date(item.updated_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'numeric', day: 'numeric' }) : ''}</p>
          </div>
        ))}
      </div>
    </div>

    </>
  );
};

export default ListNewsPage;
