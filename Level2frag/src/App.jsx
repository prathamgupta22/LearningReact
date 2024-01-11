import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/error";
import FoodItems from "./components/foodItems";
const App = () => {
  let foodItems = ["sabzi", "green", "roti", "Salad", "milk"];

  return (
    <>
      <center>
        <h1 className="food-heading">Healthy food</h1>
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </center>
    </>
  );
};

export default App;
