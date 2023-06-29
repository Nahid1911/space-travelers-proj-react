import dragonsReducer, { reserveDragon} from '../redux/dragonsSlice/dragonsSlice';

describe('reserve dragon reducer', () => {
  it('should add the reserved property of the dragon with the given id', () => {
    const initialState = {
      dragons: [
        {
          id: '1', name: 'Dragon 1', description: 'Description 1', type: 'none', flickrimages: '', reserved: false,
        },
        {
          id: '2', name: 'Dragon 9', description: 'Description 1', type: 'none', flickrimages: '', reserved: false,
        },
      ],
    };

    const expectedState = {
      dragons: [
        {
          id: '1', name: 'Dragon 1', description: 'Description 1', type: 'none', flickrimages: '', reserved: false,
        },
        {
          id: '2', name: 'Dragon 9', description: 'Description 1', type: 'none', flickrimages: '', reserved: false,
        },
      ],
    };

    const action = reserveDragon({ id: '1' });
    const actualState = dragonsReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });
});
