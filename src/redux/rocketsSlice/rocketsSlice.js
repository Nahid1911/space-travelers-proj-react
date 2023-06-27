import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: 'I am a rocket store',
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {

  },
});

export default rocketSlice.reducer;
