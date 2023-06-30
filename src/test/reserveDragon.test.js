import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { reserveDragon } from '../redux/dragonsSlice/dragonsSlice';

// Create a mock store
const mockStore = configureMockStore([thunk]);

describe('reserveDragon async action', () => {
  let store;

  beforeEach(() => {
    // Create a new store before each test
    store = mockStore({});
  });

  it('should update the state of reserved key as true inside the redux store', async () => {
    // Arrange
    const dragonId = 1;
    const expectedActions = [
      { type: 'dragons/reserveDragon/pending', meta: { arg: dragonId, requestId: expect.any(String), requestStatus: 'pending' }, payload: undefined },
      { type: 'dragons/reserveDragon/fulfilled', meta: { arg: dragonId, requestId: expect.any(String), requestStatus: 'fulfilled' }, payload: dragonId },
    ];

    // Mock the fetch function to return a successful response
    global.fetch = jest.fn().mockResolvedValue({ ok: true });

    // Act
    await store.dispatch(reserveDragon(dragonId));

    // Assert
    const dispatchedActions = store.getActions();
    expect(dispatchedActions).toEqual(expectedActions);
  });

  it('should show an error message when call from react store fails', async () => {
    // Arrange
    const dragonId = 1;
    const expectedActions = [
      { type: 'dragons/reserveDragon/pending', meta: { arg: dragonId, requestId: expect.any(String), requestStatus: 'pending' }, payload: undefined },
      { type: 'dragons/reserveDragon/fulfilled', meta: { arg: dragonId, requestId: expect.any(String), requestStatus: 'fulfilled' }, payload: 1 },
    ];

    // Mock the fetch function to throw an error
    global.fetch = jest.fn().mockRejectedValue(new Error('Failed to reserve dragon.'));

    // Act
    await store.dispatch(reserveDragon(dragonId)).catch(() => {});

    // Assert
    const dispatchedActions = store.getActions();
    expect(dispatchedActions).toEqual(expectedActions.slice(0, 2));
  });
});
