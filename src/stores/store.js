import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import quoteReducer from './reducers';

const store = configureStore({
  reducer: quoteReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
