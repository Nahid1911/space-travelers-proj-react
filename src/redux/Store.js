import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionsSlice/missionsSlice';
import rocketsReducer from './rocketsSlice/rocketsSlice';
import dragonsSlice from './dragonsSlice/dragonsSlice';

const Store = configureStore({
  reducer: {
    mission: missionReducer,
    rocket: rocketsReducer,
    dragon: dragonsSlice,

  },
});

export default Store;
