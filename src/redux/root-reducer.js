import { combineReducers } from '@reduxjs/toolkit';

import usersReducer from './slices/users.slice';
import postReducer from './slices/postsSlice';

const rootReducer = combineReducers({
  userData: usersReducer,
  postState: postReducer
});

export default rootReducer;         