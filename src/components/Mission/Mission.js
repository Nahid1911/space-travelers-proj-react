import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchMissions } from '../../redux/missionsSlice/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const fetched = useSelector((state) => state.missions.missions.length > 0);
  useEffect(() => {
    if (!fetched) {
      dispatch(FetchMissions());
    }
  }, [dispatch, fetched]);
};

export default Missions;
