import 'regenerator-runtime/runtime';
import * as config from './config';
import * as helperFunc from './HelperFunc';
export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = await helperFunc.getJSON(`${config.API_URL}/${id}`);

    const { recipe } = data.data;

    // Rewriting of the variables and storing them.
    state.recipe = {
      id: recipe.id,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      title: recipe.title,
      servings: recipe.servings,
      ingredients: recipe.ingredients,
      cookingTime: recipe.cooking_time,
    };
  } catch (err) {
    console.error(`🔥🔥🔥🔥${err}🔥🔥🔥🔥🔥`);
  }
};
// await loadRecipe()
// state.recipes = { greetings: 'hi' };
