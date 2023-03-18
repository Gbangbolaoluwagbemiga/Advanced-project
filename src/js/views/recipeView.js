// sorting out the icons
import icons from 'url:../../img/icons.svg';

class ReceipeView {
  #parentEL = document.querySelector('.recipe');
  #data;

  renderSpinner(parentEl) {
    const html = `
    <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
        </div>
    `;
    parentEl.innerHTML = '';
    parentEl.insertAdjacentHTML('afterbegin', html);
  }
}

export default new ReceipeView();
