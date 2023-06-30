import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import './Rocket.css';
import { useDispatch } from 'react-redux';
import { cancelReservation, reserveRocket } from '../../redux/rocketsSlice/rocketsSlice';

const RocketItem = ({
  id, name, description, flickrImages, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="mainBodyDiv">
      <Row>
        <Col>
          <Image src={flickrImages} />
        </Col>
        <Col md={10} lg={10}>
          <Card>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                { reserved ? (<Badge bg="primary">Reserved</Badge>) : ''}
                {description}
              </Card.Text>

              { !reserved ? (
                <Button variant="primary" onClick={() => dispatch(reserveRocket({ id }))}>Reserve Rocket</Button>
              ) : (
                <Button variant="outline-secondary" onClick={() => dispatch(cancelReservation({ id }))}>Cancel Reservation</Button>
              )}

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
RocketItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketItem;
