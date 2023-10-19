const fetchNews = async (page: number) => {
  const URL = `https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=9&page=${page}`;
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error('Estamos com probleminhas...');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchNews;
