import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './taskSlice';
import userReducer from './userSlice';
import authReduce from './authSlice';

export const store = configureStore({
  reducer: {
    auth: authReduce,
    task: taskReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
