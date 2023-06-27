import {useDispatch} from 'react';


const Missions = () => {
  const dispatch = useDispatch();
  const missionsLoaded = useSelector((state) => state.missions.missions.length > 0);
  useEffect(() => {
    if (!missionsLoaded) {
      dispatch(FetchMissions());
    }
  }, [dispatch, missionsLoaded]);
}

export default Missions;
