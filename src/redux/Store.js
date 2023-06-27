import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionsSlice/missionsSlice';

const Store = configureStore({
  reducer: {
    mission: missionReducer,

  },
});

export default Store;
