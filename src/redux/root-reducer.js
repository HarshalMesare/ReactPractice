import {combineReducers} from '@reduxjs/toolkit';

import counterReducer from './slices/counter.slice';

const rootReducer = combineReducers({
  counterState: counterReducer
});

export default rootReducer;