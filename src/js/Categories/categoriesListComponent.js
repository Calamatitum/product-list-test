import {model} from '../productsModel.js';
import {createCategoryItemComponent} from './categoryItemComponent.js';

model.onPropertyChange('categories', (propertyName, oldValue, newValue) => {
  renderCategoriesList(newValue);
})

export const renderCategoriesList = (categories) => {
  const container = document.getElementById('categoriesContainer');

  categories.forEach(category => {
    container.appendChild(createCategoryItemComponent(category));
  })
}
