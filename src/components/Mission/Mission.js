import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { FetchMissions } from '../../redux/missionsSlice/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const fetched = useSelector((state) => state.missions.missions.length > 0);
  useEffect(() => {
    if (!fetched) {
      dispatch(FetchMissions());
    }
  }, [dispatch, fetched]);

  const missions = useSelector((state) => state.missions.missions);

  
};

export default Missions;
