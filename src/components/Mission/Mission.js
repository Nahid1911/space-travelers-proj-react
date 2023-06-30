import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
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
                <td className="text-light m-10">
                  { mission.reserved ? (
                    <Badge data-testid="active-member-badge" bg="info">Active Member</Badge>
                  ) : (
                    <Badge data-testid="not-member-badge" bg="secondary">NOT A MEMBER</Badge>
                  )}
                </td>
                <td className="text-center">
                  { mission.reserved ? (
                    <Button data-testid="leave-mission-button" variant="outline-danger" onClick={() => dispatch(leavingMission({ id: mission.mission_id }))}>Leave Missions</Button>
                  ) : (
                    <Button data-testid="join-mission-button" variant="outline-secondary" onClick={() => dispatch(joiningMission({ id: mission.mission_id }))}>Join Missions</Button>
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
