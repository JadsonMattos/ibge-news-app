import { useCallback, useEffect, useMemo, useState } from 'react';
import fetchNews from '../services/api';
import NewsContext from './NewsContext';
import { NewsType } from '../types/Type';

type NewsProviderProps = {
  children: React.ReactNode;
};

const NewsProvider = ({ children }: NewsProviderProps) => {
  const [news, setNews] = useState<NewsType[]>([]);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState<NewsType[]>([]);
  const [showNews, setShowNews] = useState(true);
  const [loading, setLoading] = useState(true);
  const [filteredNews, setFilteredNews] = useState<NewsType[]>([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNews(page);
        setNews(oldNews => [...oldNews, ...data.items]);
        setLoading(false);
      } catch (error) {
        console.error('Sem notícias no momento, viva a vida!', error);
      }
    }
    getNews();
  }, [page]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorites = useCallback((news: NewsType) => {
    setFavorites(oldFavorites => [...oldFavorites, news]);
  }, []);

  const removeFavorites = useCallback((news: NewsType) => {
    setFavorites(oldFavorites => oldFavorites.filter((item) => item.id !== news.id));
  }, []);

  const loadMore = useCallback(() => {
    setPage(oldPage => oldPage + 1);
  }, []);

  const daysAgo = useCallback((news: NewsType) => {
    const current = new Date();
    const publication = new Date(news.data_publicacao);
    const timeDifference = Math.abs(+current - +publication);
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    if (daysDifference === 1) {
      return 'publicado há 1 dia';
    } else {
      return `publicado há ${daysDifference} dias`;
    }
  }, []);

  const updateNews = useCallback((newFilter: any) => {
    setFilteredNews(newFilter);
  }, []);

  const toggleShowNews = useCallback(() => {
    setShowNews(oldShowNews => !oldShowNews);
  }, []);

  const contextStory = useMemo(() => ({
    news,
    loading,
    loadMore,
    daysAgo,
    addFavorites,
    removeFavorites,
    updateNews,
    filteredNews,
    favorites,
    toggleShowNews,
    showNews,
  }), [news, loading, loadMore, daysAgo, addFavorites, removeFavorites, updateNews, filteredNews, favorites, toggleShowNews, showNews]);

  return (
    <NewsContext.Provider value={contextStory}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider;
