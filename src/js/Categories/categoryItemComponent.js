import {changeCategory} from '../productsController.js';

export const createCategoryItemComponent = (category) => {
  const listItem = document.createElement('li');
  listItem.classList.add('category-item');

  listItem.innerHTML = `
    <a href="#" class="category-item__link" id="${category}">${category}</a>
  `;

  listItem.addEventListener('click', (e) => {
    changeCategory(e.target.id);
    setCategoryLinksStyle(category);
  })

  return listItem;
}

const setCategoryLinksStyle = (category) => {
  const allLinks = document.querySelectorAll('.category-item__link');
  allLinks.forEach(link => {
    link.classList.remove('category-item__link-selected');
  })

  document.getElementById(category).classList.add('category-item__link-selected');
}
