import React from "react";
import styles from "./foodInput.module.css";
const FoodInput = () => {
  return (
    <input
      type="text"
      placeholder="Enter Food Items"
      className={styles.food}
      onChange={(event) => console.log(event.target.value)}
    />
  );
};

export default FoodInput;
