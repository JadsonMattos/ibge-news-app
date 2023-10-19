import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import Card from 'react-bootstrap/Card';
import './NewsList.css';
import { NewsType } from '../../types/Type';
import iconFavorite from '../../images/Vector.png';
import iconFavoriteRed from '../../images/Vector-Red.png';

const NewsList = () => {
  const {news, loadMore, daysAgo, addFavorites, removeFavorites, favorites, filteredNews} = useContext(NewsContext);
  const isFavorite = (item: NewsType) => favorites.some((favorite: NewsType) => favorite.id === item.id);
  const renderNews = filteredNews.length ? filteredNews : news;
  return (
    <div>
      <div className='card-news'>
        {renderNews.map((item) => (
          <Card key={item.id}>
            <Card.Body>
              <Card.Title>{item.titulo}</Card.Title>
              <Card.Text>{item.introducao}</Card.Text>
              <div className='button'>
                <Card.Text>{daysAgo(item)} dias atrás</Card.Text>
                <button
                  onClick={() => window.open(item.link, '_blank')}
                >
                  Leia a notícia aqui
                </button>
              </div>
              <hr />
              <Card.Link onClick={() => isFavorite(item) ? removeFavorites(item) : addFavorites(item)}>
                {isFavorite(item) ? <img src={iconFavoriteRed} alt="Favorited" /> : <img src={iconFavorite} alt="Favorite" />}
              </Card.Link>
            </Card.Body>
          </Card>
        ))}  
      </div>
      <button onClick={loadMore} className='big-button'>Mais Notícias</button>
    </div>
  )
}

export default NewsList;
