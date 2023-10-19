import { useContext, useState } from 'react';
import NewsContext from '../../context/NewsContext';

const FilterByTitle = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const {news, updateNews} = useContext(NewsContext);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTitle(value);
    const filtered = news.filter((item) =>
      item.titulo.toLowerCase().includes(value.toLowerCase())
    );
    updateNews(filtered);
  };

  return (
    <div>
      <label htmlFor="titleFilter">Título:</label>
      <input
        type="text"
        placeholder='Digite o título da notícia'
        id="titleFilter"
        value={searchTitle}
        onChange={handleTitleChange}
      />
    </div>
  );
}

export default FilterByTitle;
