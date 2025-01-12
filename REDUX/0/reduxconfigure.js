import { createStore } from "redux";

const initialState = {
  name: "pg",
  age: "22",
  post: 1,
};

// REDUX ACTION
const INCREMENT = "post/increment";
const DECREMENT = "post/decrement";
const INCREMENT_BY = "post/incrementBy";
const DECREMENT_BY = "post/decrementBy";

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        post: state.post + 1,
      };
    case DECREMENT:
      return {
        ...state,
        post: state.post - 1,
      };
    case INCREMENT_BY:
      return {
        ...state,
        post: state.post + action.payload,
      };
    case DECREMENT_BY:
      return {
        ...state,
        post: state.post - action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT_BY, payload: 5 });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: DECREMENT_BY, payload: 10 });
