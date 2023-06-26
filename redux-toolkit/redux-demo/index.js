const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCK = "CAKE_RESTOCK";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCK = "ICECREAM_RESTOCK";

//action
const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
};

const restockCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCK,
    payload: qty,
  };
};
const orderIceCream = () => {
  return {
    type: ICECREAM_ORDERED,
    payload: 1,
  };
};

const restockIceCream = (qty = 1) => {
  return {
    type: ICECREAM_RESTOCK,
    payload: qty,
  };
};

//initialState
const cakeState = {
  numOfCakes: 10,
};
const iceCreamState = {
  numOfIceCream: 20,
};

//reducer (previousState, action) => newState
const cakeReducer = (state = cakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_RESTOCK:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return cakeState;
  }
};

const iceCreamReducer = (state = iceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - action.payload,
      };
    case ICECREAM_RESTOCK:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
      };
    default:
      return iceCreamState;
  }
};

//execution
const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

const unsubscribe = store.subscribe(() => {});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(4));
store.dispatch(orderIceCream());
store.dispatch(orderIceCream());
store.dispatch(orderIceCream());
store.dispatch(orderIceCream());
store.dispatch(restockIceCream(7));

unsubscribe();
