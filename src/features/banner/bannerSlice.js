import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    banner: false
};


export const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        init: (state) => {
            state.banner = true
        },
        deInit: (state) => {
            state.banner = false
        }
    },
    
});

export const { init, deInit } = bannerSlice.actions;

export default bannerSlice.reducer;
