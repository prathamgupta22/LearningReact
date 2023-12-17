import React from "react";

function Random() {
  let number = Math.random() * 100;

  const styles = {
    backgroundColor: "#ebebeb",
    color: "#333",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
  };

  return <h1 style={styles}>Random number is: {Math.round(number)}</h1>;
}

export default Random;
