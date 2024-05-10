import { useState } from "react";

export default function Counter() {
  // console.log(useState());
  const [count, setcount] = useState(100);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increase Counmt
      </button>
    </div>
  );
}
