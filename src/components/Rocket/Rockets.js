import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/rocketsSlice/rocketsSlice';
import RocketItem from './RocketItem';

const Rockets = () => {
  const dispatch = useDispatch();

  const rockets = useSelector((state) => state.rocketsStore.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets]);

  return (
    <div>
      {rockets.map((rocket) => (
        <RocketItem
          key={rocket.id}
          id={rocket.id}
          flickrImages={rocket.flickrimages}
          name={rocket.name}
          description={rocket.description}
          reserved={rocket.reserved}
        />
      ))}
      ;
    </div>
  );
};

export default Rockets;
