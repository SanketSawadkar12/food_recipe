import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./RecipeDetail.module.css"; // Make sure this file is styled properly

const RecipeDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = location.state;

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div className={styles.detailContainer}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        Back
      </button>

      <div className={styles.recipeContent}>
        {/* Recipe Image */}
        <img src={recipe.image} alt={recipe.name} className={styles.detailImage} />

        {/* Recipe Details */}
        <div className={styles.recipeDetails}>
          <h1 style={{color:"black"}}>{recipe.name}</h1>
          <h2 className={styles.recipeHeading} style={{color:"black"}}>How to Make</h2>
          <p style={{color:"black"}}>{recipe.recipe}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
