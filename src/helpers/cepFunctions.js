export const getAddress = async (cep) => {
  const cepPlace = document.querySelector('.cart__address');
  cepPlace.innerText = '';
  try {
    const promise1 = await (await fetch(`https://cep.awesomeapi.com.br/json/${cep}`)).json();
    const promise2 = await (await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)).json();
    const cepInfo = await Promise.any([promise1, promise2]);
    cepPlace.innerText = `${cepInfo.address_type} ${
      cepInfo.address_name} - ${cepInfo.district} - ${
      cepInfo.city} - ${cepInfo.state}`;
  } catch {
    cepPlace.innerText = 'CEP não encontrado';
  }
};

export const searchCep = () => {
  const cepValue = document.querySelector('.cep-input');
  getAddress(cepValue.value);
};
