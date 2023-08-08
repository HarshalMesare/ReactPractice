import {createSlice} from '@reduxjs/toolkit';

const counterState = {
  counter: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: counterState,
  reducers: {

    incrementCounterBy1: (state, action) => {
      state.counter += 1;
    },

    incrementCounterBy5: (state, action) => {
      state.counter += 5;
    },

    decrementCounterBy1: (state, action) => {
      state.counter -= 1;
    },

    decrementCounterBy5: (state, action) => {
      state.counter -= 5;
    },

    resetCounter: (state, action) => {
      state.counter = 0;
    },

    incrementBySpecificValue: (state, action) => {
      state.counter = Number(action.payload);
    }    
  }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;