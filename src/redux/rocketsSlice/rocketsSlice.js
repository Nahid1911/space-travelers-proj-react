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
  flickrimages: rocket.flickr_images,
  reserved: false,
  wikiLink: rocket.wikipedia,
}))));

export const reserveRocket = createAsyncThunk('rocket/reserveRocket', (id) => id);

export const cancelReservation = createAsyncThunk('rocket/cancelReservation', (id) => id);

export const getReservation = createAsyncThunk('rocket/getReservation');

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(reserveRocket.fulfilled, (state, action) => {
      const { id } = action.payload;
      state.isLoading = false;

      const newState = state.rockets.map((rocket) => (rocket.id === id
        ? { ...rocket, reserved: true } : rocket));
      state.error = '';
      return { ...state, rockets: newState };
    });

    builder.addCase(getReservation.fulfilled, (state) => {
      state.isLoading = false;
      const newState = state.rockets.filter((rocket) => (rocket.reserved));
      state.error = '';
      return { rockets: newState };
    });

    builder.addCase(cancelReservation.fulfilled, (state, action) => {
      const { id } = action.payload;
      state.isLoading = false;

      const newState = state.rockets.map((rocket) => (rocket
        .id === id ? { ...rocket, reserved: false } : rocket));
      state.error = '';
      return { ...state, rockets: newState };
    });

    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.rockets = action.payload;
      state.error = '';
    });
  },
});

export default rocketSlice.reducer;
