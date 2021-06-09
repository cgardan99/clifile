import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login, logout } from './userAPI';

const initialState = {
  user: null,
  status: 'loading',
};

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (payload) => {
        const response = await login(payload);
        return response.data;
    }
);

export const removeUser = createAsyncThunk(
    'user/removeUser',
    async () => {
        const response = await logout();
        return response.data;
    }
);  

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      init: {}
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
      })
      .addCase(removeUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeUser.fulfilled, (state) => {
        state.status = 'idle';
        state.value = null;
      });
  },
});

export const { init } = userSlice.actions;

export default userSlice.reducer;
