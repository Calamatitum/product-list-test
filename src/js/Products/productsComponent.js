import './productCardComponent.js';
import './productListComponent.js';

export const createProductsComponent = () => {
  const parent = document.getElementById('contentContainer');
  const products = document.createElement('div');
  products.classList.add('products');
  products.innerHTML = `
      <div class="filters">
          <div class="filters__element">
              <p class="filters__amount" id="productsAmount">20 Products</p>
          </div>
          <div class="filters__separator"></div>
          <div class="filters__element">
              <label class="filters__label" for="productsView">View:</label>
              <select class="filters__select" name="productsView" id="productsView">
                  <option value="grid">Grid</option>
                  <option value="list">List</option>=
              </select>
          </div>
          <div class="filters__separator"></div>
          <div class="filters__element">
              <label class="filters__label" for="productsSort">Sort by:</label>
              <select class="filters__select" name="productsSort" id="productsSort">
                  <option value="asc">asc</option>
                  <option value="desc">desc</option>=
              </select>
          </div>
      </div>
      <section id="productsList" class="products__list"></section>
  `;

  parent.append(products);
}
