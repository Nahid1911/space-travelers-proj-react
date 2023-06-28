import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import URL from '../API';

const initialState = {
  rockets: [],
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', () => axios.get(URL.rocketsURL).then((response) => response.data));

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.rockets = action.payload;
    });
  },
});

export default rocketSlice.reducer;
