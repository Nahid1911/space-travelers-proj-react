import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './Dragon.css';
import { useDispatch } from 'react-redux';
import { reserveDragon, cancelReservation } from '../../redux/dragonsSlice/dragonsSlice';

const DragonItem = ({
  id, name, description, flickrImages, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="dargContainer">
      <div className="dragonImgContainre">
        <Image className="dragonImg" src={flickrImages} />
      </div>
      <div className="dragonInfoContainer">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="descrStyle">
            {reserved && <span className="reserveSpan">| Reserved | </span>}
            {description}
          </Card.Text>

          { !reserved ? (
            <Button variant="primary" onClick={() => dispatch(reserveDragon({ id }))}>Reserve Dragons</Button>
          ) : (
            <Button variant="outline-secondary text-danger border-danger" onClick={() => dispatch(cancelReservation({ id }))}>Cancel Reservation</Button>
          )}

        </Card.Body>
      </div>
    </div>
  );
};

DragonItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default DragonItem;
