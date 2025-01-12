let state = {
  count: 0,
};

let prevState = state; //prevstate now references the same object as state
console.log(state); //output count = 0
console.log(prevState); // output count = 0
console.log(prevState === state);

function increment() {
  //Mutating State
  // state.count = state.count + 1;

  // not mutating state creating a new object with an updated count
  state = { count: state.count + 1 };
}
increment();
console.log(state); //output 1

increment();
console.log(state); //output 1
console.log(prevState);
console.log(prevState === state);
