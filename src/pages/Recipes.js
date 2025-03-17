import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Recipes.module.css";

const recipes = [
  
    {
      name: "Spaghetti Carbonara",
      image: "/images/spaghetti-carbonara.jpg",
      recipe: [
        "Boil spaghetti in salted water until al dente. Reserve ½ cup of pasta water before draining.",
        "In a bowl, whisk together eggs, Parmesan cheese, salt, and black pepper.",
        "Heat olive oil in a pan, add diced pancetta (or bacon), and cook until crispy. Add minced garlic and sauté for 30 seconds.",
        "Reduce heat to low, add the drained spaghetti, and mix with the bacon.",
        "Remove from heat and slowly add the egg mixture, stirring constantly to create a creamy sauce.",
        "If needed, add reserved pasta water to adjust consistency.",
        "Serve immediately, garnished with extra Parmesan and fresh parsley."
      ]
    },
    {
      name: "Chicken Curry",
      image: "/images/chicken curry.jpg",
      recipe: [
        "Heat oil in a pan, add cumin seeds, and let them splutter.",
        "Add chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and cook for a minute.",
        "Add turmeric, red chili, and coriander powder, then mix well.",
        "Add chicken pieces and sauté until they turn white.",
        "Pour in the tomato puree and cook until the oil separates.",
        "Add yogurt, mix well, and cook for 5–7 minutes.",
        "Add garam masala and salt. Stir well and simmer for another 10 minutes.",
        "Garnish with coriander leaves and serve hot with rice or naan."
      ]
    },
    {
      name: "Butter Chicken",
      image: "/images/Butter_Chicken.jpg",
      recipe: [
        "Marinate chicken with yogurt, lemon juice, turmeric, and garam masala for 1 hour.",
        "Heat butter in a pan, add chopped onions, and sauté until golden.",
        "Add ginger-garlic paste and cook for a minute.",
        "Add pureed tomatoes, red chili powder, and salt. Cook until the oil separates.",
        "Add marinated chicken and cook until tender.",
        "Stir in fresh cream, mix well, and let it simmer for 5 minutes.",
        "Garnish with coriander and serve hot with naan or rice."
      ]
    },
    {
      name: "Chicken Tikka Masala",
      image: "/images/chicken-tikka-masala.jpg",
      recipe: [
        "Marinate chicken with yogurt, turmeric, ginger-garlic paste, and garam masala for 1 hour.",
        "Grill the marinated chicken until cooked.",
        "Heat oil in a pan, sauté onions until golden brown.",
        "Add tomato puree, salt, and red chili powder. Cook until the oil separates.",
        "Add the grilled chicken and mix well.",
        "Stir in fresh cream and let it simmer for 5 minutes.",
        "Serve hot with roti or rice."
      ]
    },
    {
      name: "Paneer Butter Masala",
      image: "/images/Paneer Butter Masala.jpg",
      recipe: [
        "Heat butter in a pan, sauté onions until soft.",
        "Add ginger-garlic paste and cook for a minute.",
        "Add tomato puree, red chili powder, and salt. Cook until thick.",
        "Add paneer cubes and mix well.",
        "Stir in fresh cream and garam masala. Let it simmer for a few minutes.",
        "Garnish with coriander and serve hot."
      ]
    },
    {
      name: "Paneer Chilli",
      image: "/images/Paneer Chilli.jpg",
      recipe: [
        "Cut paneer into cubes and coat with cornflour, salt, and pepper.",
        "Shallow fry the paneer cubes until golden and set aside.",
        "Heat oil in a pan, sauté onions, garlic, and bell peppers.",
        "Add soy sauce, chili sauce, vinegar, and mix well.",
        "Toss in the fried paneer and stir-fry for a few minutes.",
        "Garnish with spring onions and serve hot."
      ]
    },
    {
      name: "Veg Manchurian",
      image: "/images/Veg Manchurian.jpg",
      recipe: [
        "Mix grated vegetables with flour, cornflour, and spices.",
        "Shape into small balls and deep-fry until golden brown.",
        "In another pan, sauté garlic, onions, and bell peppers.",
        "Add soy sauce, chili sauce, vinegar, and mix well.",
        "Toss in the fried vegetable balls and coat with the sauce.",
        "Serve hot as an appetizer or with fried rice."
      ]
    },
    {
      name: "Veg Biryani",
      image: "/images/Veg Biryani.jpg",
      recipe: [
        "Sauté onions, tomatoes, and whole spices in a pan.",
        "Add mixed vegetables, yogurt, and biryani masala.",
        "Layer the vegetable mixture with cooked rice in a pot.",
        "Garnish with fried onions and mint leaves.",
        "Cover and cook on low heat for 15 minutes.",
        "Serve hot with raita."
      ]
    },
  {
    name: "Chocolate Cake",
    image: "/images/Chocolate Cake.jpg",
    recipe: [
      "Preheat oven to 350°F (175°C). Grease and flour a cake pan.",
      "In a bowl, whisk together flour, cocoa powder, baking powder, and salt.",
      "In another bowl, beat sugar and butter until fluffy. Add eggs one at a time, mixing well.",
      "Gradually add the dry ingredients, alternating with milk. Mix until smooth.",
      "Pour batter into the prepared pan and bake for 30–35 minutes.",
      "Cool the cake completely before frosting.",
      "Serve and enjoy!"
    ] 
  },
  {
    name: "Chocolate  Milkshake With Ice Cream",
    image: "/images/Chocolate  Milkshake With Ice Cream.jpg", 
    recipe:  [
      "Blend milk, cocoa powder, sugar, and ice cream until smooth.",
      "Pour into a glass and top with whipped cream.",
      "Garnish with chocolate shavings and serve chilled."
    ] 
  },
  {
    name: "Caramel Custard",
    image: "/images/Caramel Custard.jpg",
    recipe: [
      "Preheat oven to 325°F (160°C).",
      "Heat sugar in a pan until it melts and turns golden brown. Pour into ramekins to set.",
      "In a bowl, whisk eggs, sugar, vanilla extract, and milk until well combined.",
      "Pour the mixture over the caramel in the ramekins.",
      "Place ramekins in a baking dish filled with hot water and bake for 40 minutes.",
      "Cool, refrigerate for a few hours, then invert onto a plate and serve."
    ] 
  },
  {
    name: "Mango Falooda",
    image: "/images/Mango Falooda.jpg",
    recipe: [
      "Soak basil seeds in water for 10 minutes.",
      "Layer falooda sev, mango pulp, and milk in a glass.",
      "Add soaked basil seeds and a scoop of mango ice cream.",
      "Garnish with chopped nuts and serve chilled."
    ]
  },
];

const Recipes = () => {
  const navigate = useNavigate();

  const handleRecipeClick = (recipe) => {
    navigate(`/recipe/${recipe.name}`, { state: recipe });
  };

  return (
    <div className={styles.recipesContainer}>
      <h1 style={{ color: "white" }}>Our Delicious Recipes</h1>
      <div className={styles.recipeList}>
        {recipes.map((recipe, index) => (
          <div key={index} className={styles.recipeCard} onClick={() => handleRecipeClick(recipe)}>
            <img src={recipe.image} alt={recipe.name} className={styles.recipeImage} />
            <h2>{recipe.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
