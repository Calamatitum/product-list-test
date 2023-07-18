import './categoryItemComponent.js';
import './categoriesListComponent.js';

export const createCategoriesComponent = () => {
  const parent = document.getElementById('contentContainer');
  const categories = document.createElement('aisde');
  categories.classList.add('sidebar');
  categories.innerHTML = `
    <h4 class="sidebar__title">Categories</h4>
    <ul class="sidebar__list" id="categoriesContainer"></ul>
  `;

  parent.prepend(categories);
}