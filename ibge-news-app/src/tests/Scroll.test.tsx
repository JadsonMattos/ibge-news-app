import { render } from '@testing-library/react';
import NewsProvider from '../context/NewsProvider';
import App from '../App';
import newsContextMock from '../mocks/mock';
import { vi } from 'vitest';
import 'matchmedia-polyfill';
import { userEvent} from '@testing-library/user-event'

describe('Scroll', () => {
  const MOCK_RESPONSE = {
    ok: true,
    status: 200,
    json: async () => newsContextMock,
  } as Response;
  const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
  it('renderiza o card de notícias', async () => {
    const { findByText } = render(
      <NewsProvider>
        <App />
      </NewsProvider>
    );
    const newsTitle = await findByText('Notícias mais recentes');
    expect(newsTitle).toBeInTheDocument();
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });

  it('testa o botão do scroll', async () => {
    const { getByText, getByRole } = render(
      <NewsProvider>
        <App />
      </NewsProvider>
    );
    const newsTitle = getByText('Notícias mais recentes');
    expect(newsTitle).toBeInTheDocument();
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    expect(mockFetch).toHaveBeenCalledWith(
      'https://agenciadenoticias.ibge.gov.br/',
      '_blank'
    );
  });
})
