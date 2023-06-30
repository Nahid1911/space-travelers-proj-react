import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  dragonsArray: [],
  error: '',
};

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/dragons');
    if (!response.ok) {
      throw new Error('Failed to fetch dragons.');
    }
    const data = await response.json();
    const dragons = data.map((dragon) => ({
      id: dragon.id,
      name: dragon.name,
      type: dragon.type,
      description: dragon.description,
      flickrImage: dragon.flickr_images,
      reserved: false,
      wikipLink: dragon.wikipedia,
    }));
    return dragons;
  } catch (error) {
    throw new Error('Failed to fetch dragons.');
  }
});

export const reserveDragon = createAsyncThunk('dragons/reserveDragon', (id) => id);

export const cancelReservation = createAsyncThunk('dragons/cancelReservation', (id) => id);

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
    builder.addCase(reserveDragon.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(reserveDragon.fulfilled, (state, action) => {
      const { id } = action.payload;
      state.isLoading = false;
      state.dragonsArray = state.dragonsArray.map((dragon) => (dragon
        .id === id ? { ...dragon, reserved: true } : dragon));
      state.error = '';
    });
    builder.addCase(reserveDragon.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(cancelReservation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(cancelReservation.fulfilled, (state, action) => {
      const { id } = action.payload;
      state.isLoading = false;
      state.dragonsArray = state.dragonsArray.map((dragon) => (dragon
        .id === id ? { ...dragon, reserved: false } : dragon));
      state.error = '';
    });
    builder.addCase(cancelReservation.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default dragonSlice.reducer;
