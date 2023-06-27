import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const MISSIONS_API_URL = 'https://api.spacexdata.com/v3/missions';
export const FetchMissions = createAsyncThunk(
  'redux/missions/missions.js',
  async (_, thunkAPI) => {
    const response = await fetch(MISSIONS_API_URL)
      .catch((error) => thunkAPI.rejectWithValue('An error occurred while fetching the data', error));
    return response.json();
  },
);

const initialState = {
  missions: [],
  isLoading: false,
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const { id } = action.payload;

      const newState = state.missions.map((mission) => {
        if (mission.mission_id !== id) { return mission; }

        return { ...mission, reserved: true };
      });

      return { ...state, missions: newState };
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(FetchMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = action.payload;

        const missions = data.map((element) => ({
          mission_id: element.mission_id,
          mission_name: element.mission_name,
          description: element.description,
        }));
        state.missions = missions;
      })
      .addCase(FetchMissions.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { joinMission } = missionSlice.actions;
export default missionSlice.reducer;
