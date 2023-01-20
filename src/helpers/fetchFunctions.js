export const fetchProduct = async (id) => {
  if (!id) throw new Error('ID não informado');
  const result = await fetch(`htgittps://api.mercadolibre.com/items/${id}`);
  const data = await result.json();
  return data;
};

export const fetchProductsList = async (item) => {
  if (!item) throw new Error('Termo de busca não informado');
  try {
    const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${item}`);
    const data = await result.json();
    return data.results;
  } catch (error) {
    throw new Error('Algum erro ocorreu, recarregue a página e tente novamente');
  }
};
