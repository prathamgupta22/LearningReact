import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return <center>Something went wrong {error.status}</center>;
};

export default Error;
