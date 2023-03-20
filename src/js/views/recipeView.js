// sorting out the icons
import icons from 'url:../../img/icons.svg';

// importing fractional
import { Fraction } from 'fractional';

class ReceipeView {
  #parentEL = document.querySelector('.recipe');
  #data;
  #errorMessage = `we couldn't find the recipe, please check and try again!!.`;
  #fulfilledMessage = '';

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  render(data) {
    this.#data = data;
    const html = this.#generateHtml();
    this.#clear();
    this.#parentEL.insertAdjacentHTML('afterbegin', html);
  }

  renderError(message = this.#errorMessage) {
    const html = `
    <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
    `;
    this.#clear();
    this.#parentEL.insertAdjacentHTML('afterbegin', html);
  }

  fulfilledMethod() {
    const html = `
    <div class="recipe">
        <div class="message">
          <div>
            <svg>
              <use href="src/img/icons.svg#icon-smile"></use>
            </svg>
          </div>
          <p>Start by searching for a recipe or an ingredient. Have fun!</p>
        </div>
`;
    this.#clear();
  }

  // clearing the parent Element
  #clear() {
    this.#parentEL.innerHTML = '';
  }

  // The UI for rendering the data
  #generateHtml() {
    return `
  <figure class="recipe__fig">
         <img src="${this.#data.image}" alt="${
      this.#data.title
    }" class="recipe__img" />
    <h1 class="recipe__title">
          <span>${this.#data.title}</span>
      </h1>
  </figure>

   <div class="recipe__details">
   <div class="recipe__info">
       <svg class="recipe__info-icon">
       <use href="${icons}#icon-clock"></use>
     </svg>
     <span class="recipe__info-data recipe__info-data--minutes">${
       this.#data.cookingTime
     }</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
       <svg class="recipe__info-icon">
        <use href="${icons}#icon-users"></use>
        </svg>
     <span class="recipe__info-data recipe__info-data--people">${
       this.#data.servings
     }</span>
      <span class="recipe__info-text">servings</span>

  <div class="recipe__info-buttons">
    <button class="btn--tiny btn--increase-servings">
      <svg>
        <use href="${icons}#icon-minus-circle"></use>
      </svg>
    </button>
    <button class="btn--tiny btn--increase-servings">
      <svg>
        <use href="${icons}#icon-plus-circle"></use>
      </svg>
    </button>
  </div>
</div>

<div class="recipe__user-generated">
  <svg>
    <use href="${icons}#icon-user"></use>
  </svg>
</div>
<button class="btn--round">
  <svg class="">
    <use href="${icons}#icon-bookmark-fill"></use>
  </svg>
</button>
</div>

<div class="recipe__ingredients">
<h2 class="heading--2">Recipe ingredients</h2>
<ul class="recipe__ingredient-list">
${this.#data.ingredients
  .map(ing => {
    return `
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${
        ing.quantity ? new Fraction(ing.quantity).toString() : ''
      }</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ing.unit} </span>${ing.description}
      </div>
    </li>`;
  })
  .join('')}
</ul>
</div>

<div class="recipe__directions">
<h2 class="heading--2">How to cook it</h2>
<p class="recipe__directions-text">
  This recipe was carefully designed and tested by
  <span class="recipe__publisher">${
    this.#data.publisher
  }</span>. Please check out
  directions at their website.
</p>
<a
  class="btn--small recipe__btn"
  href="${this.#data.sourceUrl}"
  target="_blank"
>
  <span>Directions</span>
  <svg class="search__icon">
    <use href="${icons}#icon-arrow-right"></use>
  </svg>
</a>
</div>
`;
  }

  // spinner
  renderSpinner() {
    const html = `
    <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
        </div>
    `;
    this.#clear();
    this.#parentEL.insertAdjacentHTML('afterbegin', html);
  }
}

export default new ReceipeView();
