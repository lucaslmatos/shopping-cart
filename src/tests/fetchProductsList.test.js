import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
const arg = 'computador';

describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList ).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', () => {
    fetchProductsList(arg);
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o end point correto ao executar fetchProductsList', () => {
    fetchProductsList(arg);
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('A função FetchProductsList chamada com o argumento computador, deve retornar uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const expected = await fetchProductsList('computador');
    expect(expected).toStrictEqual(computadorSearch);
  });

  it('A função FetchProductsList chamada sem argumento, deve retornar um erro com a mensagem: Termo de busca não informado',  async () => {
    try {
      await fetchProductsList();
    } catch (error) {
      expect(error).toEqual(new Error('Termo de busca não informado'));
    }
  });

  it('A função FetchProductsList chamada com argumento incompativel ou por instabilidade da API, deve retornar um erro com a mensagem: Algum erro ocorreu, recarregue a página e tente novamente',  async () => {
    try {
      await fetchProductsList('galodoido');
    } catch (error) {
      expect(error).toEqual(new Error('Algum erro ocorreu, recarregue a página e tente novamente'));
    }
  });

});
