const store = require("./app/stores");
const cakeActions = require("./features/cake/cakeSlice.js").cakeActions;
const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;

console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restock(3));
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restock(3));

unsubscribe();
