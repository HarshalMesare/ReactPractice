import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root-reducer';
import { configureStore } from '@reduxjs/toolkit';

const composedEnhancer = composeWithDevTools();

const store = configureStore({
  reducer: rootReducer,composedEnhancer,
});

export default store;  