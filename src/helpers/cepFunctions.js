export const getAddress = async (cep) => {
  const cepPlace = document.querySelector('.cart__address');
  cepPlace.innerText = '';
  try {
    const promise1 = await (await fetch(`https://cep.awesomeapi.com.br/json/${cep}`)).json();
    const promise2 = await (await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)).json();
    const p = await Promise.any([promise1, promise2]);
    cepPlace.innerText = `${p.address_type} ${p.address_name} - ${
      p.district} - ${p.city} - ${p.state}`;
  } catch {
    cepPlace.innerText = 'CEP não encontrado';
  }
};

export const searchCep = () => {
  const cepValue = document.querySelector('.cep-input');
  getAddress(cepValue.value);
};
