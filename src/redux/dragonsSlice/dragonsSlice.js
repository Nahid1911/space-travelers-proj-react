import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dragons: 'I am a dragon store',
};

const dragonSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {

  },
});

export default dragonSlice.reducer;
