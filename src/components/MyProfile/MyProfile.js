import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import MyProfileStyle from './MyProfile.module.css';
import { leavingMission } from '../../redux/missionsSlice/missionsSlice';
import { cancelReservation } from '../../redux/dragonsSlice/dragonsSlice';
import { cancelReservation as cancelRocketReservation } from '../../redux/rocketsSlice/rocketsSlice';

const MyProfile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const joinedmissions = missions.filter((mission) => mission.reserved === true);
  const dragons = useSelector((state) => state.dragonsStore.dragonsArray);
  const joinedDragons = dragons.filter((dragon) => dragon.reserved === true);
  const rockets = useSelector((state) => state.rocketsStore.rockets);
  const joinedrockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div className="profile-container mx-5" style={{ display: 'flex' }}>
      <div className="px-4" style={{ width: '32%' }}>
        <h2>My Missions</h2>
        { joinedmissions.length === 0
        && <p className={MyProfileStyle.title}>&emsp; No Mission Joined !!!</p>}
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
      <div className="px-4" style={{ width: '34%' }}>
        <h2>My Rockets</h2>
        { joinedrockets.length === 0
        && <p className={MyProfileStyle.title}>&emsp; No Rocket Reserved !!!</p>}
        <Table bordered>
          <tbody>
            {
        joinedrockets.map((rocket) => (
          <tr key={rocket.id}>
            <td className={MyProfileStyle.fontSize}>
              {rocket.name}
            </td>
            <td className="text-center">
              <Button variant="danger" align="right" onClick={() => dispatch(cancelRocketReservation({ id: rocket.id }))}>Cancel Reservation</Button>
            </td>
            <td className="text-center">
              <Button variant="info" onClick={() => window.open(rocket.wikiLink)}>Read More</Button>
            </td>
          </tr>
        ))
        }
          </tbody>
        </Table>
      </div>
      <div className="px-4" style={{ width: '34%' }}>
        <h2>My Dragons</h2>
        { joinedDragons.length === 0
        && <p className={MyProfileStyle.title}>&emsp; No Dragon Reserved !!!</p>}
        <Table bordered>
          <tbody>
            {
        joinedDragons.map((dragon) => (
          <tr key={dragon.id}>
            <td className={MyProfileStyle.fontSize}>
              {dragon.name}
            </td>
            <td className="text-center">
              <Button variant="danger" align="right" onClick={() => dispatch(cancelReservation({ id: dragon.id }))}>Cancel Reservation </Button>
            </td>
            <td className="text-center">
              <Button variant="info" onClick={() => window.open(dragon.wikipLink)}>Read More</Button>
            </td>
          </tr>
        ))
        }
          </tbody>

        </Table>
      </div>
    </div>
  );
};

export default MyProfile;
