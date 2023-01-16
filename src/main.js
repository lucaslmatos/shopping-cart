import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';
// Início.
document.querySelector('.cep-button').addEventListener('click', searchCep);

const mercadorias = await fetchProductsList('computador');

for (let i = 0; i < mercadorias.length; i += 1) {
  const productsPlace = document.querySelector('.products');
  const ref = mercadorias[i];
  const { id, title, thumbnail, price } = ref;
  productsPlace.appendChild(createProductElement({ id, title, thumbnail, price }));
}
