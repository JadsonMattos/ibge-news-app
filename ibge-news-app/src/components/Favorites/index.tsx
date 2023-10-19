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
            <Card.Img variant="top" src={item.imagens.image_intro} />
            <Card.Body>
              <Card.Title>{item.titulo}</Card.Title>
              <Card.Text>{item.introducao}</Card.Text>
              <Card.Text>{daysAgo(item)} dias atrás</Card.Text>
              <Card.Link href={item.link} target="_blank" rel="noreferrer">Leia mais</Card.Link>
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
