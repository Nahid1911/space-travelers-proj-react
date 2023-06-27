import { React, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { fetchRockets } from '../../redux/rocketsSlice/rocketsSlice';
import logo from '../../assets/logo.png';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch, rockets]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Falcon 1</Card.Title>
        <Card.Text>
          <img src={logo} alt="logo" />
          The Falcon 1 was an expendable launch system
        </Card.Text>
        <Button variant="primary">Reserve Rocket</Button>
      </Card.Body>
    </Card>
  );
};

export default Rockets;
