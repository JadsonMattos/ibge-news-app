import { useContext, useState } from 'react';
import NewsContext from '../../context/NewsContext';

const FilterByData = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const {news, updateNews} = useContext(NewsContext);

  const filterAndSortNews = (startDate: string, endDate: string) => {
    const filtered = news.filter((item) => item.data_publicacao >= startDate && item.data_publicacao <= endDate);
    updateNews(filtered);
  };

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const startDate = event.target.value;
    setStartDate(startDate);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const endDate = event.target.value;
    setEndDate(endDate);
  };

  const handleSubmit = () => {
    filterAndSortNews(startDate, endDate);
  };

  const handleReset = () => {
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className='dateFilter'>
      <label htmlFor="startDate">De:</label>
      <input
        type="date"
        id="startDate"
        value={startDate}
        onChange={handleStartDateChange}
      />
      <label htmlFor="endDate">Até:</label>
      <input
        type="date"
        id="endDate"
        value={endDate}
        onChange={handleEndDateChange}
      />
      <button onClick={handleSubmit}>Filtrar</button>
      <button onClick={handleReset}>Resetar</button>
    </div>
  );
}

export default FilterByData;
