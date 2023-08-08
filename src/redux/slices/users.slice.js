import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  users: []
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(state, action);
    }
  }
});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;