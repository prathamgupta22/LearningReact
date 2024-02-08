// import { createStore } from "redux";

// // Initial state
// const initialState = {
//   post: 1,
//   name: "pg",
//   age: 25,
// };

// // Reducer function
// function reducer(state = initialState, action) {
//   if (action.type === "post/increment") {
//     return { ...state, post: state.post + 1 };
//   } else if (action.type === "post/decrement") {
//     return { ...state, post: state.post - 1 };
//   } else if (action.type === "post/incrementBy") {
//     return { ...state, post: state.post + action.payload };
//   }
//   return state;
// }

// // Initial state
// console.log("Initial state:", initialState);

// // Dispatch actions and log state changes
// let newState = reducer(initialState, { type: "post/increment" });
// console.log("State after 'post/increment':", newState);

// newState = reducer(newState, { type: "post/increment" });
// console.log("State after second 'post/increment':", newState);

// newState = reducer(newState, { type: "post/decrement" });
// console.log("State after 'post/decrement':", newState);

// newState = reducer(newState, { type: "post/decrement" });
// console.log("State after second 'post/decrement':", newState);

// // Unknown action type, should return the current state
// newState = reducer(newState, { type: "kahana lao" });
// console.log("State after 'kahana lao':", newState);

// // Action with payload
// newState = reducer(newState, { type: "post/incrementBy", payload: 10 });
// console.log("State after 'post/incrementBy' with payload 10:", newState);

// newState = reducer(newState, { type: "post/decrement", payload: 20 });
// console.log("State after 'post/decrement' with payload 20:", newState);

// // Create Redux store
// const store = createStore(reducer);

// // Subscribe to store changes and log state
// store.subscribe(() => {
//   console.log("State from store subscription:", store.getState());
// });

// // Dispatch an action and observe the state change
// store.dispatch({ type: "post/increment" });
// // The updated state will be logged through the store subscription

import { createStore } from "redux";

const initialState = {
  post: 0,
  name: "Anurag Singh",
  age: 26,
};
//NAMING CONVENTION FOR REDUX ACTION SHOULD BE IN CAPTAL LETTER
const INCREMENT = "post/increment";
const DECREMENT = "post/decrement";
const INCREASE_BY = "post/increaseBy";
const DECREASE_BY = "post/decreaseBy";

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, post: state.post + 1 };
    case DECREMENT:
      return { ...state, post: state.post - 1 };
    case INCREASE_BY:
      return { ...state, post: state.post + action.payload };
    case DECREASE_BY:
      return { ...state, post: state.post - action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: INCREASE_BY, payload: 15 });
store.dispatch({ type: DECREASE_BY, payload: 5 });
