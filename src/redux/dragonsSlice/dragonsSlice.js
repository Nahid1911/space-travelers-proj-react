import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  dragonsArray: [],
  error: '',
};
const MISSIONS_API_URL = 'https://api.spacexdata.com/v3/dragons';
export const fetchDragons = createAsyncThunk(
  'dragons/fetchDragons',
  async (_, thunkAPI) => {
    const response = await fetch(MISSIONS_API_URL)
      .catch((error) => thunkAPI.rejectWithValue('An error occurred while fetching the data', error));
    return response.json();
  },
);
/* export const fetchDragons = createAsyncThunk('dragons/fetchDragons', () => (
  axios.get('https://api.spacexdata.com/v3/dragons')
    .then((response) => response.data.map((dragon) => ({
      id: dragon.id,
      name: dragon.name,
      type: dragon.type,
      description: dragon.description,
      flickrImage: dragon.flickr_images,
      reserved: false,
      wikipLink: dragon.wikipedia,
    })))
)); */

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
      const dragonsArray = action.payload;
      state.error = '';

      const dragons = dragonsArray.map((dragon) => ({
        id: dragon.id,
        name: dragon.name,
        type: dragon.type,
        description: dragon.description,
        flickrImage: dragon.flickr_images,
        reserved: false,
        wikipLink: dragon.wikipedia,
      }));
      state.dragonsArray = dragons;
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
