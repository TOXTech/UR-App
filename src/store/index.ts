import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import pollutionReducer from './slices/pollutionSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    pollution: pollutionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;