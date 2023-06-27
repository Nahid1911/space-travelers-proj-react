import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionsSlice/missionsSlice';
import rocketsSlice from './rocketsSlice/rocketsSlice';
import dragonsSlice from './dragonsSlice/dragonsSlice';

const Store = configureStore({
  reducer: {
    mission: missionReducer,
    rocket: rocketsSlice,
    dragon: dragonsSlice,

  },
});

export default Store;
