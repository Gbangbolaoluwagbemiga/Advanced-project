'use strict';
import 'core-js/stable';

// importing the state module
import * as model from './model.js';

// importing class from recipe view
import recipeView from './views/recipeView.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function () {
  try {
    // spinner
    recipeView.renderSpinner();

    // creating a variable for the changed hash
    const id = window.location.hash.slice(1);

    // Guard clause peradventure there is no hash
    if (!id) return;

    // Recipe loader
    await model.loadRecipe(id);
    const { recipe } = model.state;
    recipeView.render(recipe);
  } catch (error) {
    recipeView.renderError();
    // alert(error);
  }
};
// checking for the hash
// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
const init = function () {
  recipeView.addHandlerRender(showRecipe);
};
init();

//  function for loading the search result
const loadSearchResults = async function () {
  try {
    await model.searchFunc('pizza');
    console.log(model.state.search.results);
  } catch (error) {
    console.error(error);
  }
};
loadSearchResults();
