import React from "react";
import { useNavigate } from "react-router-dom"; 
import styles from "./Home.module.css"; 

const Home = () => {
  const navigate = useNavigate(); 

  const handleExploreClick = () => {
    navigate("/recipes");
  };

  return (
    <div className={styles.homeContainer}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to Food Recipe Heaven 🍽️</h1>
          <p className={styles.description}>
            Discover a variety of delicious recipes that will inspire your next meal. Whether you're a beginner or a pro, our collection offers something for everyone. From appetizers to desserts, we’ve got it all!
          </p>
          <button className={styles.ctaButton} onClick={handleExploreClick}>
            Explore Recipes
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
