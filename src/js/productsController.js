import {model} from './productsModel.js';

export const getProduct = async() => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    model.products = [...data];
  } catch (error) {
    // TODO: handle error
  }
}

export const getCategories = async() => {
  try {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    model.categories = [...data];
  } catch (error) {
    // TODO: handle error
  }
}

export const getProductsFromCategory = async(category) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products/category/' + category);
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    model.products = [...data];
  } catch (error) {
    // TODO: handle error
  }
}

export const changeCategory = (category) => {
  model.chosenCategory = category;
  getProductsFromCategory(category);
}
