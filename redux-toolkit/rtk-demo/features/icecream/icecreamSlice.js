const createSlice = require("@reduxjs/toolkit").createSlice;
const { cakeActions } = require("../cake/cakeSlice");

const initialState = {
  numOfIcecream: 23,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIcecream--;
    },
    restock: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numOfIcecream--;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecream--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.icecreamActions = iceCreamSlice.actions;
