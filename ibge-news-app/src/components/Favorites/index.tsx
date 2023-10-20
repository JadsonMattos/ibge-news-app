import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import { Card } from 'react-bootstrap';
import { NewsType } from '../../types/Type';
import iconFavoriteRed from '../../images/Vector-Red.png';

const Favorites = () => {
  const { daysAgo, removeFavorites, favorites } = useContext(NewsContext);
  const isFavorite = (item: NewsType) => favorites.some((favorite: NewsType) => favorite.id === item.id);
  return (
    <div>
      <h2>Notícias Favoritas</h2>
      <div className='card-news'>
        {favorites.map((item) => (
          <Card key={item.id}>
            <Card.Body>
              <Card.Title>{item.titulo}</Card.Title>
              <Card.Text>{item.introducao}</Card.Text>
              <div className='button'>
                <Card.Text>{daysAgo(item)}</Card.Text>
                <button
                  onClick={() => window.open(item.link, '_blank')}
                >
                  Leia a notícia aqui
                </button>
              </div>
              <hr />
              <Card.Link onClick={() => isFavorite(item) && removeFavorites(item)}>
                <img src={iconFavoriteRed} alt="Favorited" />
              </Card.Link>
            </Card.Body>
          </Card>
        ))}  
      </div>
    </div>
  )
}

export default Favorites;
