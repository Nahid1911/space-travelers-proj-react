import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import Missions from '../components/Mission/Mission';
import { FetchMissions, leavingMission, joiningMission } from '../redux/missionsSlice/missionsSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../redux/missionsSlice/missionsSlice', () => ({
  FetchMissions: jest.fn(),
  leavingMission: jest.fn(),
  joiningMission: jest.fn(),
}));

describe('Missions component', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockImplementation((selector) => selector({
      missions: {
        missions: [
          {
            mission_id: '1',
            mission_name: 'Mission 1',
            description: 'Mission description 1',
            reserved: false,
          },
          {
            mission_id: '2',
            mission_name: 'Mission 2',
            description: 'Mission description 2',
            reserved: true,
          },
        ],
      },
    }));
  });

  afterEach(() => {
    useDispatch.mockClear();
    useSelector.mockClear();
    FetchMissions.mockClear();
    leavingMission.mockClear();
    joiningMission.mockClear();
  });

  it('should fetchm missions if not already fetched', () => {
    useSelector.mockImplementation((selector) => selector({
      missions: {
        missions: [],
      },
    }));

    render(<Missions />);

    expect(useDispatch).toHaveBeenCalled();
    expect(FetchMissions).toHaveBeenCalled();
  });

  it('should display missions with correct information', () => {
    const { getByText, getByTestId } = render(<Missions />);

    expect(getByText('Mission 1')).toBeTruthy();
    expect(getByText('Mission description 1')).toBeTruthy();
    expect(getByTestId('not-member-badge').textContent).toBe('NOT A MEMBER');
    expect(getByTestId('join-mission-button').textContent).toBe('Join Missions');

    expect(getByText('Mission 2')).toBeTruthy();
    expect(getByText('Mission description 2')).toBeTruthy();
    expect(getByTestId('active-member-badge').textContent).toBe('Active Member');
    expect(getByTestId('leave-mission-button').textContent).toBe('Leave Missions');
  });

  it('should dispatch leaving Mission when "Leave Missions" button is clicked', () => {
    const { getByTestId } = render(<Missions />);
    fireEvent.click(getByTestId('leave-mission-button'));

    expect(useDispatch).toHaveBeenCalled();
    expect(leavingMission).toHaveBeenCalledWith({ id: '2' });
  });
  it('should dispatch joiningMission when "Join Missions" button is clicked', () => {
    const { getByTestId } = render(<Missions />)
    fireEvent.click(getByTestId('join-mission-button'));

    expect(useDispatch).toHaveBeenCalled();
    expect(joiningMission).toHaveBeenCalledWith({ id: '1' });
  });
});