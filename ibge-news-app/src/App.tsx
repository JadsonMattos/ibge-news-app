import './App.css'
import Favorites from './components/Favorites';
import FilterByData from './components/FilterByData';
import FilterByTitle from './components/FilterByTitle';
import FilterByType from './components/FilterByType';
import NewsHeader from './components/Scroll';
import NewsList from './components/NewsList'
import NewsProvider from './context/NewsProvider';
import Header from './components/Header';
import NewsContext from './context/NewsContext';
import { useContext } from 'react';

function App() {
  const { showNews, toggleShowNews } = useContext(NewsContext);
  return (
    <NewsProvider>
      <Header />
      <NewsHeader />
      <div className='filters'>
        <FilterByData />
        <FilterByType />
        <FilterByTitle />
      </div>
      <button className="favorite-button" onClick={() => toggleShowNews(showNews)}>
        {showNews ? 'Ver Favoritos' : 'Ver Notícias'}
      </button>
      {showNews ? <NewsList /> : <Favorites />}
    </NewsProvider>
  )
}

export default App;
