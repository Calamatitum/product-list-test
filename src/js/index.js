import {getProduct, getCategories} from './productsController.js';
import './productsModel.js';
import './productsController.js';
import './Products/productsComponent.js';
import {createProductsComponent} from './Products/productsComponent.js';
import {createCategoriesComponent} from './Categories/categoriesComponent.js';


window.addEventListener('load', function() {
  createProductsComponent();
  createCategoriesComponent();
  getProduct();
  getCategories();
})

