import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import newsReducer from './newsSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;

