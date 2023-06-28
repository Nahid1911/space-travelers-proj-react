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
