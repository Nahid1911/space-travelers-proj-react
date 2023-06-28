import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import MyProfileStyle from './MyProfile.module.css';
import { leavingMission } from '../../redux/missionsSlice/missionsSlice';

const MyProfile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const joinedmissions = missions.filter((mission) => mission.reserved === true);
  return (
    <div className="profile-container mx-5" style={{ display: 'flex' }}>
      <div className="px-4" style={{ width: '34%' }}>
        <h2>My Missions</h2>
        { joinedmissions.length === 0
        && <p className={MyProfileStyle.title}>&emsp; Join ✍ a Mission First</p>}
        <Table bordered>
          <tbody>
            {
        joinedmissions.map((mission) => (
          <tr key={mission.mission_id}>
            <td className={MyProfileStyle.fontSize}>
              {mission.mission_name}
            </td>
            <td className="text-center">
              <Button variant="danger" align="right" onClick={() => dispatch(leavingMission({ id: mission.mission_id }))}>Leave Missions</Button>
            </td>
            <td className="text-center">
              <Button variant="info" onClick={() => window.open(mission.wikipedia)}>Read More</Button>
            </td>
          </tr>
        ))
        }
          </tbody>

        </Table>
      </div>
      <div className="px-4" style={{ width: '33%' }}>
        <h2>My Rockets</h2>
        <Table bordered>
          <tbody>
            {/*     render here your list */}
          </tbody>

        </Table>
      </div>
      <div className="px-4" style={{ width: '33%' }}>
        <h2>My Dragons</h2>
        <Table bordered>
          <tbody>
            {/*     render here your list */}

          </tbody>

        </Table>
      </div>
    </div>
  );
};

export default MyProfile;
