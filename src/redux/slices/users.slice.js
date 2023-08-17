import { createSlice } from '@reduxjs/toolkit';

const userState = {
  users: [],
};

const initialState = {
  posts: [],
  loading: false
};

const usersSlice = createSlice({
  name: 'users',
  initialState: userState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    editQuote: (state, action) => {
      const { index, updatedQuote } = action.payload;
      state.users[index] = updatedQuote;
    },
    deleteQuote: (state, action) => {
      const index = action.payload;
      state.users.splice(index, 1);
    },
  },    

});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;  