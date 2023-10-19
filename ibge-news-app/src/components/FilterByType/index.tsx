import { useContext, useState } from 'react'
import NewsContext from '../../context/NewsContext';

const FilterByType = () => {
 const [selectedTypes, setSelectedTypes] = useState<string>('')
 const {news, updateNews} = useContext(NewsContext);

 const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedTypes(value);
    const filtered = news.filter((item) => item.tipo === value);
    updateNews(filtered);
  }

  return (
    <div>
      <label htmlFor="typeFilter">Tipo:</label>
      <select id="typeFilter" value={selectedTypes} onChange={handleTypeChange}>
        <option value="">Todos</option>
        <option value="Notícia">Notícias</option>
        <option value="Release">Release</option>
      </select>
    </div>
  );
}

export default FilterByType;
