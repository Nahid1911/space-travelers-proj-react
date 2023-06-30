import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { FetchMissions } from '../redux/missionsSlice/missionsSlice';
import { fetchRockets } from '../redux/rocketsSlice/rocketsSlice';
import { fetchDragons } from '../redux/dragonsSlice/dragonsSlice';
// Create a mock store
const mockStore = configureMockStore([thunk]);

describe('Fetch Missions async action', () => {
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

    // Define the expected actions that should be dispatched
    const expectedActions = [
      FetchMissions.pending().type,
      FetchMissions.fulfilled([
        { mission_id: '1', mission_name: 'Mission 1', description: 'Description 1' },
        { mission_id: '2', mission_name: 'Mission 2', description: 'Description 2' },
      ]).type,
    ];

    // Dispatch the async action
    await store.dispatch(FetchMissions());

    // Get the dispatched actions from the store
    const dispatchedActions = store.getActions();

    // Verify that the dispatched actions match the expected actions
    expect(dispatchedActions.map((action) => action.type)).toEqual(expectedActions);
  });

  it('dispatches the correct actions when API call fails', async () => {
    // Mock the fetch function to throw an error
    global.fetch = jest.fn().mockRejectedValue('API error');

    // Define the expected actions that should be dispatched
    const expectedActions = [
      FetchMissions.pending().type,
      FetchMissions.rejected().type,
    ];

    // Dispatch the async action
    await store.dispatch(FetchMissions());

    // Get the dispatched actions from the store
    const dispatchedActions = store.getActions();

    // Verify that the dispatched actions match the expected actions
    expect(dispatchedActions.map((action) => action.type)).toEqual(expectedActions);
  });


  it('dispatches the correct actions when API call is successful', async () => {
    // Mock the fetch function to return a successful response
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve([
        { id: '1', name: 'Mission 1', description: 'Description 1' },
        { id: '2', name: 'Mission 2', description: 'Description 2' },
      ]),
    });

    // Define the expected actions that should be dispatched
    const expectedActions = [
      fetchDragons.pending().type,
      fetchDragons.fulfilled([
        { id: '1', name: 'Mission 1', description: 'Description 1' },
        { id: '2', name: 'Mission 2', description: 'Description 2' },
      ]).type,
    ];

    // Dispatch the async action
    await store.dispatch(fetchDragons());

    // Get the dispatched actions from the store
    const dispatchedActions = store.getActions();

    // Verify that the dispatched actions match the expected actions
    expect(dispatchedActions.map((action) => action.type)).toEqual(expectedActions);
  });

  it('dispatches the correct actions when API call fails', async () => {
    // Mock the fetch function to throw an error
    global.fetch = jest.fn().mockRejectedValue('API error');

    // Define the expected actions that should be dispatched
    const expectedActions = [
      fetchDragons.pending().type,
      fetchDragons.rejected().type,
    ];

    // Dispatch the async action
    await store.dispatch(fetchDragons());

    // Get the dispatched actions from the store
    const dispatchedActions = store.getActions();

    // Verify that the dispatched actions match the expected actions
    expect(dispatchedActions.map((action) => action.type)).toEqual(expectedActions);
});
it('dispatches the correct actions when API call is successful', async () => {
    // Mock the fetch function to return a successful response
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve([
        {
          id: '1', name: 'Falcon 1', description: 'Description 1', type: 'none', flickrimages: '', reserved: false,
        },
        {
          id: '1', name: 'Falcon 9', description: 'Description 1', type: 'none', flickrimages: '', reserved: false,
        },
      ]),
    });

    // Define the expected actions that should be dispatched
    const expectedActions = [
      fetchRockets.pending().type,
      fetchRockets.fulfilled([
        {
          id: '1', name: 'Falcon 1', description: 'Description 1', type: 'none', flickrimages: '', reserved: false,
        },
        {
          id: '1', name: 'Falcon 9', description: 'Description 1', type: 'none', flickrimages: '', reserved: false,
        },
      ]).type,
    ];

    // Dispatch the async action
    await store.dispatch(fetchRockets());

    // Get the dispatched actions from the store
    const dispatchedActions = store.getActions();

    // Verify that the dispatched actions match the expected actions
    expect(dispatchedActions.map((action) => action.type)).toEqual(expectedActions);
  });});

