export type NewsType = {
  id: number,
  tipo: string,
  titulo: string,
  introducao: string,
  data_publicacao: string,
  imagens: Images,
  link: string,
}

export type Images = {
  image_intro: string,
  float_intro: string,
}

export type NewsContextType = {
  news: NewsType[],
  loading: boolean,
  loadMore: () => void,
  daysAgo: (date: NewsType) => number,
  addFavorites: (news: NewsType) => void,
  removeFavorites: (news: NewsType) => void,
  favorites: NewsType[],
  filteredNews: NewsType[],
  updateNews: (news: NewsType[]) => void,
  showNews: boolean,
  toggleShowNews: (showNews: boolean) => void,
}
