const redux = require("redux");
const produce = require("immer").produce;
const createdStore = redux.createdStore;

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
const store = createdStore(userReducer);

// store.subscribe(() => console.log(store.getState()));

// store.dispatch(fetchUserRequest);
