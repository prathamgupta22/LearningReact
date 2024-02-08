// //JS CODE
// const h2 = document.createElement("h2");
// h2.innerText = "Hello JS";
// document.querySelector("#root").append(h2);
// console.log(h2);

//react code
const h2 = React.createElement(
  "h2",
  { className: "subheading" },
  "Hello React"
);
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(h2);

const container = React.createElement(
  "div",
  {
    className: "container",
    id: "container",
  },
  React.createElement(
    "section",
    { key: 1 },
    React.createElement(
      "p",
      { key: 1 },
      "the library for web and native application"
    )
  )
);
