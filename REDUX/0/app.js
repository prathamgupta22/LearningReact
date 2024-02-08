// let state = {
//   count: 0,
//   name: "ph",
//   age: 26,
// };

// let prevState = state; // prevState now references the same object as state
// console.log(state); // Output: { count: 0 }
// console.log(prevState); // Output: { count: 0 }

// function increment() {
//   // Mutating State
//   // state.count = state.count + 1;

//   // not mutating state - creating a new object with an updated count
//   // state = { count: state.count + 1 };
//   state = { ...state, count: state.count + 1 };
// }

// // increment();
// // console.log(state); // Output: { count: 1 }
// // increment();
// // console.log(state); // Output: { count: 2 }
// // console.log(prevState); // Output: { count: 0 }

// //redux
let reduxState = {
  count: 0,
  name: "pg",
  age: 22,
};

function reducer(state) {
  return { ...state, count: state.count + 1 };
}
//what redux do
reduxState = reducer(reduxState);
console.log(reduxState);
reduxState = reducer(reduxState);
console.log(reduxState);
reduxState = reducer(reduxState);
console.log(reduxState);
reduxState = reducer(reduxState);
console.log(reduxState);
