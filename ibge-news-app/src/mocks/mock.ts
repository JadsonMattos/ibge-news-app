const newsContextMock = {
  news: [
    {
      id: 1,
      titulo: 'Notícias mais recentes',
      introducao: 'Esta é a notícia 1.',
      imagens: {
        image_intro: 'image-intro.jpg',
      },
      link: 'https://www.example.com/noticia-1',
      data_publicacao: '2023-10-20',
    },
  ],
  loading: false,
  daysAgo: () => {},
  removeFavorites: () => {},
  addFavorites: () => {},
  favorites: [],
};

export default newsContextMock;
