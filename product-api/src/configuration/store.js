import { configureStore } from "@reduxjs/toolkit";

// Define the initial state with a count property
const initialState = {
  count: 0,
};

// Create a reducer function to handle actions
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

// Create the Redux store with the reducer
const store = configureStore({
  reducer: reducer, // or just "reducer" since the property name and value are the same
});

export default store;
