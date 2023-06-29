import dagonReducer, { cancelReservation } from '../redux/dragonsSlice/dragonsSlice';

describe('cancelReservation reducer', () => {
  it('should add the reserved property of the rocket with the given id', () => {
    const initialState = {
      rockets: [
        {
          id: '1', name: 'Dragon 1', description: 'Description 1', type: 'none', flickrimages: '', reserved: false,
        },
        {
          id: '2', name: 'Dragon 9', description: 'Description 1', type: 'none', flickrimages: '', reserved: false,
        },
      ],
    };

    const expectedState = {
      rockets: [
        {
          id: '1', name: 'Dragon 1', description: 'Description 1', type: 'none', flickrimages: '', reserved: false,
        },
        {
          id: '2', name: 'Dragon 9', description: 'Description 1', type: 'none', flickrimages: '', reserved: false,
        },
      ],
    };

    const action = cancelReservation({ id: '1' });
    const actualState = dagonReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });
});
