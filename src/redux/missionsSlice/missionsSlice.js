import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: 'Intial state',
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {

  },
});

export default missionSlice.reducers;
