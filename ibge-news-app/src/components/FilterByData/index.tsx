import { useContext, useState } from 'react';
import NewsContext from '../../context/NewsContext';

const FilterByData = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [sortBy, setSortBy] = useState('asc');
  const {news, updateNews} = useContext(NewsContext);

  const filterAndSortNews = (date: string, sort: string) => {
    let filtered = news.filter((item) => item.data_publicacao.includes(date));
    if (sort === 'asc') {
      filtered = filtered.sort((a, b) => +new Date(a.data_publicacao) - +new Date(b.data_publicacao));
    } else {
      filtered = filtered.sort((a, b) => +new Date(b.data_publicacao) - +new Date(a.data_publicacao));
    }
    updateNews(filtered);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;
    setSelectedDate(date);
    filterAndSortNews(date, sortBy);
    const filtered = news.filter((item) => item.data_publicacao.includes(date));
    updateNews(filtered);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = event.target.value;
    setSortBy(sort);
    filterAndSortNews(selectedDate, sort);
  }

  return (
    <div className='dateFilter'>
      <label htmlFor="dateFilter">Data:</label>
      <input
        type="date"
        id="dateFilter"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <label htmlFor="sort">Ordenar:</label>
      <select id="sort" value={sortBy} onChange={handleSortChange}>
        <option value="asc">Notícias Recentes</option>
        <option value="desc">Notícias Antigas</option>
      </select>
    </div>
  );
}

export default FilterByData;
