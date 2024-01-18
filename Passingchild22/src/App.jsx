import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/error";
import FoodItems from "./components/foodItems";
import { Container } from "./components/Container";
import FoodInput from "./components/FoodInput";
const App = () => {
  let foodItems = ["sabzi", "green", "roti", "Salad", "milk"];

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy food</h1>
        <ErrorMessage items={foodItems} />
        <FoodInput />
        <FoodItems items={foodItems} />
      </Container>
      <Container>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, fugit?
      </Container>
    </>
  );
};

export default App;
