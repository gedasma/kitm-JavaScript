export async function getRandomRecipes()
{
    const recipes = [];

    try {
      for (let i = 0; i < 6; i++) {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        const recipe = data.meals[0];
        if (recipe) {
          recipes.push(recipe);
        }
      }

      return recipes;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
}

export async function getCategories()
{
  const categories = [];

    try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();
    const category = data.categories[0];
    if (category) {
      for (let i = 0; i < data.categories.length; i++) {
        categories.push(data.categories[i])
      }
    }

    return categories;

    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
}

export async function getMealsByCategory(category)
{
  const meals = [];

    try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category);
    const data = await response.json();
    const meal = data.meals[0];
    if (meal) {
      for (let i = 0; i < data.meals.length; i++) {
        meals.push(data.meals[i])
      }
    }
    console.log("returning meals:")
    console.log(meals)
    return meals;

    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
}