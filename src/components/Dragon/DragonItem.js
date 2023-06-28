import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './Dragon.css';
import { useDispatch } from 'react-redux';
import { reserveDragon, cancelReservation } from '../../redux/dragonsSlice/dragonsSlice';

const DragonItem = ({
  id, name, type, description, flickrImages,
}) => {
  const dispatch = useDispatch();
  const [reserved, setReserved] = useState(false);
  const [btnClass, setBtnClass] = useState('fbg-primary text-white');

  const handleReserveDragon = () => {
    if (reserved) {
      dispatch(cancelReservation(id));
      setReserved(false);
      setBtnClass('fbg-primary text-white');
    } else {
      dispatch(reserveDragon(id));
      setReserved(true);
      setBtnClass('bg-light text-danger');
    }
  };

  return (
    <div className="dargContainer">
      <div className="dragonImgContainre">
        <Image className="dragonImg" src={flickrImages} />
      </div>
      <div className="dragonInfoContainer">
        <Card.Body key={type}>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="descrStyle">
            {reserved && <span className="reserveSpan">| Reserved | </span>}
            {description}
          </Card.Text>
          <Button
            className={btnClass}
            id={id}
            variant="primary"
            onClick={handleReserveDragon}
          >
            {reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
          </Button>
        </Card.Body>
      </div>
    </div>
  );
};

DragonItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default DragonItem;
