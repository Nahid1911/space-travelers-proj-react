import missionsReducer, { joiningMission } from '../redux/missionsSlice/missionsSlice';

describe('joinMission reducer', () => {
  it('should add the reserved property of the mission with the given id', () => {
    const initialState = {
      missions: [
        { mission_id: '454d', mission_name: 'Mission 1', description: 'Description 1' },
        { mission_id: '532', mission_name: 'Mission 2', description: 'Description 2' },
      ],
    };

    const expectedState = {
      missions: [
        {
          mission_id: '454d', mission_name: 'Mission 1', description: 'Description 1', reserved: true,
        },
        { mission_id: '532', mission_name: 'Mission 2', description: 'Description 2' },
      ],
    };

    const action = joiningMission({ id: '454d' });
    const actualState = missionsReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });
});
