import 'regenerator-runtime/runtime';

export const state = {
  recipe: {},
};
console.log(state);

export const loadRecipe = async function (id) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      // `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc990`
    );
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} ${res.status}`);

    const { recipe } = data.data;
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
    alert(err);
  }
};
// await loadRecipe()
// state.recipes = { greetings: 'hi' };
console.log(state);
