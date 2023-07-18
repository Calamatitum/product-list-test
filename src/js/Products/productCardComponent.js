export const createProductCardComponent = (product) => {
  const component = document.createElement('article');
  component.classList.add('product-card');

  component.innerHTML = `
    <div class="product-card__image-container">
        <img src="${product.image}" alt="${product.title}" class="product-card__image"/>
    </div>
    <div class="product-card__info">
        <h3 class="product-card__title">${product.title}</h3>
        <p class="product-card__description">${product.description}</p>
        <div class="product-card__meta">
            <span class="product-card__price">${formatPrice(product.price)} €</span>
            <div class="product-card__controller">
                <button class="product-card__button">
                  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.75 2.21875L14.25 7.46875C14.4062 7.625 14.5 7.8125 14.5 8.03125C14.5 8.21875 14.4062 8.40625 14.25 8.5625L8.75 13.8125C8.46875 14.0938 7.96875 14.0938 7.6875 13.7812C7.40625 13.5 7.40625 13 7.71875 12.7188L11.875 8.78125H1.25C0.8125 8.78125 0.5 8.4375 0.5 8.03125C0.5 7.59375 0.8125 7.28125 1.25 7.28125H11.875L7.71875 3.3125C7.40625 3.03125 7.40625 2.53125 7.6875 2.25C7.96875 1.9375 8.4375 1.9375 8.75 2.21875Z" fill="white"/>
                  </svg>
                </button>
            </div>
        </div>
    </div>
  `;

  return component;
}

const formatPrice = (number) => {
  return number.toLocaleString();
}
