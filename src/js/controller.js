// 'use strict';
const arr = [12, 45, 6, 7, 8, 14];
console.log(arr.slice(0, 3));

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const showRecipe = async function () {
  try {
    const res = await fetch(
      // `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
      `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc990`
    );
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} ${res.status}`);

    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      title: recipe.title,
      servings: recipe.servings,
      ingredients: recipe.ingredients,
      cookingTime: recipe.cooking_time,
    };
    console.log(recipe);

    // console.log(res, data);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
showRecipe();
