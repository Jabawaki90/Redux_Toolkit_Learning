const redux = require("redux");
const produce = require("immer").produce;
const logger = require("redux-logger");
const thunkMiddleWare = require("redux-thunk").default;
const axios = require("axios");
const createdStore = redux.createStore;
const applyMiddleWare = redux.applyMiddleware;

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

//state
const usersState = {
  loading: true,
  data: [],
  error: "",
};

//action
const fetchUserRequest = async () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};
const fetchUserSuccedeed = async () => {
  return {
    type: FETCH_USERS_SUCCEEDED,
  };
};
const fetchUserFailed = async () => {
  return {
    type: FETCH_USERS_FAILED,
  };
};

//reducer
const userReducer = (state = usersState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case FETCH_USERS_SUCCEEDED:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.data = action.payload;
      });
    case FETCH_USERS_FAILED:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = action.payload;
      });
    default:
  }
};

//execution
const userUrl = "https://jsonplaceholder.typicode.com/users";

const fetchRequest = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get(userUrl)
      .then((res) => {
        const users = res.data.map((g) => g.id);
        dispatch(fetchUserSuccedeed(users));
      })
      .catch((e) => {
        dispatch(fetchUserFailed(e.message));
      });
  };
};

const store = createdStore(userReducer, applyMiddleWare(thunkMiddleWare));

store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchRequest());
