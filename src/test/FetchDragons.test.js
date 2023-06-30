import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchDragons } from '../redux/dragonsSlice/dragonsSlice';

// Create a mock store
const mockStore = configureMockStore([thunk]);

describe('fetchDragons async action', () => {
  let store;

  beforeEach(() => {
    // Create a new store before each test
    store = mockStore({});
  });

  it('should dispatch an array of objects when API call is successful', async () => {
    // Arrange
    const dragonsData = [
      {
        id: 1,
        name: 'Dragon 1',
        type: 'Type 1',
        description: 'Description 1',
        flickrImage: undefined,
        reserved: false,
        wikipLink: undefined,
      },
      {
        id: 2,
        name: 'Dragon 2',
        type: 'Type 2',
        description: 'Description 2',
        flickrImage: undefined,
        reserved: false,
        wikipLink: undefined,
      },
    ];
    const expectedActions = [
      { type: 'dragons/fetchDragons/pending', meta: { arg: undefined, requestId: expect.any(String), requestStatus: 'pending' }, payload: undefined },
      { type: 'dragons/fetchDragons/fulfilled', meta: { arg: undefined, requestId: expect.any(String), requestStatus: 'fulfilled' }, payload: dragonsData },
    ];

    // Mock the fetch function to return a successful response
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(dragonsData),
    });

    // Act
    await store.dispatch(fetchDragons());

    // Assert
    const dispatchedActions = store.getActions();
    expect(dispatchedActions).toEqual(expectedActions);
  });

  it('should show failur message when API call fails', async () => {
    // Arrange
    const expectedActions = [
      {
        type: 'dragons/fetchDragons/pending',
        meta: { arg: undefined, requestId: expect.any(String), requestStatus: 'pending' },
        payload: undefined,
      },
      expect.objectContaining({
        type: 'dragons/fetchDragons/rejected',
        error: expect.objectContaining({
          message: 'Failed to fetch dragons.',
          name: 'Error',
          stack: expect.any(String),
        }),
        meta: expect.objectContaining({
          arg: undefined,
          requestId: expect.any(String),
          requestStatus: 'rejected',
        }),
        payload: undefined,
      }),
    ];

    // Mock the fetch function to throw an error
    global.fetch = jest.fn().mockRejectedValue(new Error('Failed to fetch dragons.'));

    // Act
    await store.dispatch(fetchDragons());

    // Assert
    const dispatchedActions = store.getActions();
    expect(dispatchedActions).toEqual(expectedActions);
  });
});
