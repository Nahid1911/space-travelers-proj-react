import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionsSlice/missionsSlice';
import rocketsSlice from './rocketsSlice/rocketsSlice';
import dragonsReducer from './dragonsSlice/dragonsSlice';

const Store = configureStore({
  reducer: {
    missions: missionReducer,
    rocket: rocketsSlice,
    dragonsStore: dragonsReducer,

  },
});

export default Store;
