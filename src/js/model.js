import 'regenerator-runtime/runtime';
import * as config from './config';
import * as helperFunc from './HelperFunc';
export const state = {
  recipe: {},
  search: {
    query: {},
    results: [],
  },
};

export const loadRecipe = async function (id) {
  try {
    const data = await helperFunc.getJSON(`${config.API_URL}${id}`);

    const { recipe } = data.data;

    // Rewriting of the variables and storing them.
    state.recipe = {
      id: recipe.id,
      publisher: recipe.publisher,
      image: recipe.image_url,
      title: recipe.title,
      sourceUrl: recipe.source_url,
      servings: recipe.servings,
      ingredients: recipe.ingredients,
      cookingTime: recipe.cooking_time,
    };
  } catch (err) {
    console.error(`🔥🔥🔥🔥${err}🔥🔥🔥🔥🔥`);
    throw err;
  }
};
// await loadRecipe()
// state.recipes = { greetings: 'hi' };

export const searchFunc = async function (query) {
  try {
    state.search.query = query;

    const data = await helperFunc.getJSON(`${config.API_URL}?search=${query}`);

    state.search.results = data.data.recipes.map(el => {
      return {
        id: el.id,
        publisher: el.publisher,
        image: el.image_url,
        title: el.title,
      };
    });

    // console.log(state);
    // console.log(data);
  } catch (error) {
    throw error;
  }
};
searchFunc('pizza');
