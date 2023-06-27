const createSlice = require("@reduxjs/toolkit");

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfCakes--;
    },
    restock: (state, action) => {
      state.numOfCakes = action.payload;
    },
  },
});

module.exports = cakeSlice.reducers;
module.exports.cakeActions = cakeSlice.actions;
