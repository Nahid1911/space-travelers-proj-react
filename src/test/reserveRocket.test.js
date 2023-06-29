import rocketsReducer, { reserveRocket } from '../redux/rocketsSlice/rocketsSlice';

describe('reserveRocket reducer', () => {
  it('should add the reserved property of the rocket with the given id', () => {
    const initialState = {
      rockets: [
        {
          id: '1', name: 'Falcon 1', description: 'Description 1', type: 'none', flickrimages: '', reserved: false,
        },
        {
          id: '2', name: 'Falcon 9', description: 'Description 1', type: 'none', flickrimages: '', reserved: false,
        },
      ],
    };

    const expectedState = {
      rockets: [
        {
          id: '1', name: 'Falcon 1', description: 'Description 1', type: 'none', flickrimages: '', reserved: false,
        },
        {
          id: '2', name: 'Falcon 9', description: 'Description 1', type: 'none', flickrimages: '', reserved: false,
        },
      ],
    };

    const action = reserveRocket({ id: '1' });
    const actualState = rocketsReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });
});
