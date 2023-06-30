import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import ReservationItem from './ReservationItem';

const Reservations = () => {
  const rockets = useSelector((state) => state.rocketsStore.rockets);
  const reservedrockets = rockets.filter((rocket) => (rocket.reserved));
  return (
    <div>
      {(reservedrockets.length === 0) ? 'There are no reserved rockets to display' : ''}
      {reservedrockets.map((rocket) => (
        <ReservationItem
          key={rocket.id}
          name={rocket.name}
        />
      ))}
    </div>
  );
};

export default Reservations;
