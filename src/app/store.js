import { configureStore } from '@reduxjs/toolkit';
import bannerReducer from '../features/banner/bannerSlice';
import userReducer from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    banner: bannerReducer
  },
});
