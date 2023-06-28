import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { FetchMissions } from '../redux/missionsSlice/missionsSlice';

// Create a mock store
const mockStore = configureMockStore([thunk]);

describe('FetchMissions async action', () => {
  let store;

  beforeEach(() => {
    // Create a new store before each test
    store = mockStore({});
  });
