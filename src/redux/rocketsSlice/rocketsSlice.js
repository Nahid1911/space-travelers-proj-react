import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import URL from '../API';

const initialState = {
  rockets: [],
  isLoading: false,
  error: '',
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', () => axios.get(URL.rocketsURL).then((response) => response.data.map((rocket) => ({
  id: rocket.id,
  name: rocket.name,
  description: rocket.description,
  type: rocket.type,
  flickr_images: rocket.flickr_images,
}))));

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.rockets = action.payload;
      state.error = '';
    });

    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.isLoading = false;
      state.rockets = [];
      state.error = action.error.message;
    });
  },
});

export default rocketSlice.reducer;
