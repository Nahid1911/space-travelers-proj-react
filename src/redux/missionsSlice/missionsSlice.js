import { createSlice } from '@reduxjs/toolkit';

const MISSIONS_API_URL = 'https://api.spacexdata.com/v3/missions';
export const FetchMissions = createAsyncThunk(
  'redux/missions/missions.js',
  async (_, thunkAPI) => {
    const response = await fetch(MISSIONS_API_URL)
      .catch((error) => thunkAPI.rejectWithValue(error));
    return response.json();
  },
);

const initialState = {
  missions: 'Intial state',
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {

  },
});

export default missionSlice.reducer;
