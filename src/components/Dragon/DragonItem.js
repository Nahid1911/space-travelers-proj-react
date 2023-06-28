import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './Dragon.css';
import { useDispatch } from 'react-redux';
import { reserveDragon } from '../../redux/dragonsSlice/dragonsSlice';

const DragonItem = ({
  id, name, type, description, flickrImages,
}) => {
  const dispatch = useDispatch();
  const [reserved, setReserved] = useState(false);

  const handleReserveDragon = () => {
    dispatch(reserveDragon(id));
    setReserved(true);
  };

  return (
    <Container className="mainCardContainer">
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
            id={id}
            variant="primary"
            onClick={handleReserveDragon}
            disabled={reserved} // Disable button when already reserved
          >
            {reserved ? 'Reserved' : 'Reserve Dragon'}
          </Button>
        </Card.Body>
      </div>
    </Container>
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
