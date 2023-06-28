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

  it('dispatches the correct actions when API call is successful', async () => {
    // Mock the fetch function to return a successful response
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve([
        { mission_id: '1', mission_name: 'Mission 1', description: 'Description 1' },
        { mission_id: '2', mission_name: 'Mission 2', description: 'Description 2' },
      ]),
    });
