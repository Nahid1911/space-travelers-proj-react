import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { FetchMissions, leavingMission, joiningMission } from '../../redux/missionsSlice/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const fetched = useSelector((state) => state.missions.missions.length > 0);
  useEffect(() => {
    if (!fetched) {
      dispatch(FetchMissions());
    }
  }, [dispatch, fetched]);

  const missions = useSelector((state) => state.missions.missions);

  return (
    <div>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr className="fs-5">
            <th className="p-2">Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map((mission) => (

              <tr key={mission.mission_id}>
                <td className="fw-bold">{mission.mission_name}</td>
                <td>{mission.description}</td>
                {mission.reserved ? <td className="badge bg-primary text-center text-light m-4">Active Member</td> : <td className="badge bg-secondary text-light m-4">NOT A MEMBER</td>}
                <td className="text-center">
                  { mission.reserved ? (
                    <Button variant="outline-danger" onClick={() => dispatch(leavingMission({ id: mission.mission_id }))}>Leave Missions</Button>
                  ) : (
                    <Button variant="outline-secondary" onClick={() => dispatch(joiningMission({ id: mission.mission_id }))}>Join Missions</Button>
                  )}

                </td>

              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
