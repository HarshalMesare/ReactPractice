import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './slices/users.slice';

const rootReducer = combineReducers({
  usersState: userReducer
});
  
export default rootReducer;