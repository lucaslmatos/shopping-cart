import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
const arg = 'MLB1405519561';

describe('Teste a função fetchProduct', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProduct ).toBe('function');
  });

  it('Fetch deve ser chamado ao passar como argumento para a função fetchProduct o produto : MLB1405519561', () => {
    fetchProduct(arg);
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o end point correto ao executar fetchProduct', () => {
    fetchProduct(arg);
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('A função FetchProduct chamada com o argumento MLB1405519561, deve retornar uma estrutura de dados igual ao objeto product', async () => {
    const expected = await fetchProduct(arg);
    expect(expected).toStrictEqual(product);
  });

  it('A função FetchProduct chamada sem argumento, deve retornar um erro com a mensagem: ID não informado',  async () => {
    try {
      await fetchProduct();
    } catch (error) {
      expect(error).toEqual(new Error('ID não informado'));
    }
  });
});
