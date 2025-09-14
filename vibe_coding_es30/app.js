// Simple hardcoded recipes for MVP
const recipes = [
  {
    title: "Bean Burrito",
    ingredients: ["beans", "tortilla", "cheese"],
    instructions: "Spread beans on tortilla, sprinkle cheese, roll up, and heat until warm.",
  },
  {
    title: "Cheesy Rice Bowl",
    ingredients: ["rice", "cheese", "salsa"],
    instructions: "Mix cooked rice with cheese and salsa. Microwave until cheese melts.",
  },
  {
    title: "Veggie Omelette",
    ingredients: ["eggs", "bell pepper", "onion", "cheese"],
    instructions: "Beat eggs, add chopped veggies and cheese, cook in a pan until set.",
  },
  {
    title: "Simple Salad",
    ingredients: ["lettuce", "tomato", "cucumber"],
    instructions: "Chop all veggies, toss together, and serve fresh.",
  },
];

function findRecipes(ingredients) {
  const input = ingredients.map(i => i.trim().toLowerCase()).filter(Boolean);
  return recipes.filter(recipe =>
    input.every(ing => recipe.ingredients.includes(ing))
  );
}

document.getElementById('search-btn').addEventListener('click', () => {
  const input = document.getElementById('ingredients-input').value.split(',');
  const results = findRecipes(input);
  const section = document.getElementById('recipes-section');
  section.innerHTML = '';
  if (results.length === 0) {
    section.innerHTML = '<p>No recipes found. Try different ingredients!</p>';
    return;
  }
  results.forEach(recipe => {
    const div = document.createElement('div');
    div.className = 'recipe';
    div.innerHTML = `
      <div class="recipe-title">${recipe.title}</div>
      <div class="recipe-ingredients"><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</div>
      <div class="recipe-instructions">${recipe.instructions}</div>
    `;
    section.appendChild(div);
  });
});
