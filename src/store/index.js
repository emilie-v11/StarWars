import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { peopleApi } from '../services/peopleApi';
import peopleReducer from './slices/peopleSlice';

const store = configureStore({
  reducer: {
    people: peopleReducer,
    [peopleApi.reducerPath]: peopleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(peopleApi.middleware),
});

setupListeners(store.dispatch);

export default store;
