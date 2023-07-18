import {model} from '../productsModel.js';
import {createProductCardComponent} from './productCardComponent.js';

model.onPropertyChange('products', (propertyName, oldValue, newValue) => {
  renderProductList(newValue);
  updateProductsAmount(newValue.length);
})

// TODO: needs to be moved to a separate component 'productsAmountComponent'
const updateProductsAmount = (productsAmount) => {
  const element = document.getElementById('productsAmount');
  element.innerHTML = productsAmount === 1 ? productsAmount + ' product' : productsAmount + ' products';
}

const renderProductList = (products) => {
  const container = document.getElementById('productsList');
  container.innerHTML = '';

  products.forEach(product => {
    container.appendChild(createProductCardComponent(product));
  })
}
