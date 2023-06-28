import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import Missions from '../components/Mission/Mission';
import { FetchMissions, leavingMission, joiningMission } from '../redux/missionsSlice/missionsSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));


