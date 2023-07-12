const configureStore = require("@reduxjs/toolkit").configureStore;
// const reduxLogger = require("redux-logger");

const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice");
const userReducer = require("../features/user/userSlice");
// const { getDefaultMiddleware } = require("@reduxjs/toolkit");

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
