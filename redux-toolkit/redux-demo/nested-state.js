const redux = require("redux");
const produce = require("immer").produce;

const initialState = {
  name: "ashraf",
  address: {
    street: "123 main St",
    city: "Boston",
    state: "Ma",
  },
};

const STREET_UPDATED = "STREET_UPDATED";

//ACTION
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

//execution

const store = redux.createStore(reducer);
console.log("initialState", initialState);

store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(updateStreet("Ampang"));
store.dispatch(updateStreet("bangi"));
store.dispatch(updateStreet("kajang"));
