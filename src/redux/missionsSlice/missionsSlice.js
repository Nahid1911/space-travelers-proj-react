import { createSlice } from '@reduxjs/toolkit';

const MISSIONS_API_URL = 'https://api.spacexdata.com/v3/missions';
export const FetchMissions = createAsyncThunk(
  'redux/missions/missions.js',
  async (_, thunkAPI) => {
    const response = await fetch(MISSIONS_API_URL)
      .catch((error) => thunkAPI.rejectWithValue('An error occurred while fetching the data'));
    return response.json();
  },
);

const initialState = {
  missions: 'Intial state',
  isLoading: false,
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {

  },
});

export default missionSlice.reducer;
