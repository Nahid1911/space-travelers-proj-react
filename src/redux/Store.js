import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionsSlice/missionsSlice';
import rocketsReducer from './rocketsSlice/rocketsSlice';
import dragonsReducer from './dragonsSlice/dragonsSlice';

const Store = configureStore({
  reducer: {
    missions: missionReducer,
    rocketsStore: rocketsReducer,
    dragonsStore: dragonsReducer,
  },
});

export default Store;
