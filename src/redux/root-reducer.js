import { combineReducers } from '@reduxjs/toolkit';

import usersReducer from './slices/users.slice';

const rootReducer = combineReducers({
  userData: usersReducer
});

export default rootReducer;  