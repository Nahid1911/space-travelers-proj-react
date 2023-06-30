import missionsReducer, { leavingMission } from '../redux/missionsSlice/missionsSlice';

describe('leaveMission reducer', () => {
  it('should update the reserved property of the mission with the given id', () => {
    const initialState = {
      missions: [
        {
          mission_id: '4453', mission_name: 'Mission 1', description: 'Description 1', reserved: true,
        },
        { mission_id: '123', mission_name: 'Mission 2', description: 'Description 2' },
      ],
    };

    const expectedState = {
      missions: [
        {
          mission_id: '4453', mission_name: 'Mission 1', description: 'Description 1', reserved: false,
        },
        { mission_id: '123', mission_name: 'Mission 2', description: 'Description 2' },
      ],
    };

    const action = leavingMission({ id: '4453' });
    const actualState = missionsReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });
});
