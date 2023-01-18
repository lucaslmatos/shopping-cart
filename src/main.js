import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement,
  createCartProductElement,
} from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';
import './style.css';
// Início.
document.querySelector('.cep-button').addEventListener('click', searchCep);

const loadOn = () => {
  const load = document.createElement('h3');
  load.innerText = 'carregando...';
  load.className = 'loading';
  const productPlace = document.querySelector('.products');
  productPlace?.appendChild(load);
};

const loadOff = () => {
  const loadMsg = document.querySelector('.loading');
  loadMsg?.remove();
};

const errorMsg = (boolean) => {
  if (boolean) {
    const error = document.createElement('h3');
    error.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
    error.className = 'error';
    const errorPlace = document.querySelector('.products');
    errorPlace?.appendChild(error);
  } else {
    document.querySelector('.error')?.remove();
  }
};

const productList = async () => {
  try {
    loadOn();
    errorMsg(false);
    const mercadorias = await fetchProductsList('computador');
    for (let i = 0; i < mercadorias.length; i += 1) {
      const productsPlace = document.querySelector('.products');
      const ref = mercadorias[i];
      productsPlace?.appendChild(createProductElement(ref));
    }
  } catch {
    errorMsg(true);
  } finally {
    loadOff();
  }
};

const productsCart = () => {
  const cart = document.getElementsByClassName('cart__products');
  const cartId = getSavedCartIDs();
  cartId.forEach(async (id) => {
    const cartProduct = await fetchProduct(id);
    const product = createCartProductElement(cartProduct);
    cart.appendChild(product);
  });
};

productList();
productsCart();
