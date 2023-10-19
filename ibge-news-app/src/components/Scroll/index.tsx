import { useContext } from 'react';
import Slider from 'react-slick';
import NewsContext from '../../context/NewsContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NewsType } from '../../types/Type';
import './Scroll.css';
import iconFavorite from '../../images/Vector.png';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const NewsHeader = () => {
  const {news, loading, daysAgo} = useContext(NewsContext);

  return (
    <div>
      {loading ? (
        <p>Notícias chegando...</p>
      ) : (
        <div className='scroll'>
          <Slider {...settings}>
            {news.slice(0, 100).map((item: NewsType) => (
              <div key={item.id}>
                <div className='container-img'>
                  <img src={`https://agenciadenoticias.ibge.gov.br/${item.imagens.image_intro}`} alt={item.titulo} />
                </div>
                <div className='card-scroll'>
                  <div className='title-scroll'>
                    <h3>Notícias mais recentes</h3>
                    onClick={() => isFavorite(item) ? removeFavorites(item) : addFavorites(item)}>
                {isFavorite(item) ? <img src={iconFavoriteRed} alt="Favorited" /> : <img src={iconFavorite} alt="Favorite" />}
                  </div>
                  <h2>{item.titulo}</h2>
                  <p>{item.introducao}</p>
                  <div className='link-scroll'>
                    <p>{daysAgo(item.data_publicacao)}</p>
                    <button
                      onClick={() => window.open(item.link, '_blank')}
                    >
                      Leia a notícia aqui
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  )
}

export default NewsHeader;
