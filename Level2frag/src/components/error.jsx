import React from "react";

const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h3>Healthy food are exhauseted</h3>}</>;
};

export default ErrorMessage;
