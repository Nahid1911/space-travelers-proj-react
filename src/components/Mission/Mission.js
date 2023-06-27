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

  return (
    <div>
      <table className="table table-striped table-hover table-bordered">
        <tr className="fs-5">
          <th className="p-2">Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </table>
    </div>
  );
};
export default Missions;
