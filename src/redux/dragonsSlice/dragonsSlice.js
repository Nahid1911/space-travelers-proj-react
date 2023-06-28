import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', () => (axios
  .get('https://api.spacexdata.com/v3/dragons')
  .then((response) => response.data.map((dragon) => ({
    id: dragon.id,
    name: dragon.name,
    type: dragon.type,
    description: dragon.description,
    flickrImage: dragon.flickr_images,
  })))
));

const initialState = {
  isLoading: false,
  dragonsArray: [],
  error: '',
};

const dragonSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDragons.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDragons.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dragonsArray = action.payload;
      state.error = '';
    });
    builder.addCase(fetchDragons.rejected, (state, action) => {
      state.isLoading = false;
      state.dragonsArray = [];
      state.error = action.error.message;
    });
  },
});

export default dragonSlice.reducer;
