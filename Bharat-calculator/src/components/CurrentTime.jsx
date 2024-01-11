import React from "react";

const CurrentTime = () => {
  let time = new Date();
  return (
    <p className="lead">
      This is the Current Time : {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
