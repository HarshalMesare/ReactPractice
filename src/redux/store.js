import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root-reducer';
// import { configureStore } from '@reduxjs/toolkit';
// import postsReducer from './postsSlice';

const composedEnhancer = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancer);


export default store;  