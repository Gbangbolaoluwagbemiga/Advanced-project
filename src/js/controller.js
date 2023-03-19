'use strict';
import 'core-js/stable';

// importing the state module
import * as model from './model.js';

// importing class from recipe view
import recipeView from './views/recipeView.js';

// importing fractional
import Fractional from 'fractional';

/*
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
timeout(5);
*/

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
    alert(error);
  }
};
// checking for the hash
// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));
