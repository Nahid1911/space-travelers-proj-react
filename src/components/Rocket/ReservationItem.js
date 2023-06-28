import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import './Rocket.css';
import { Col } from 'react-bootstrap';

const ReservationItem = ({
  name,
}) => (
  <div>
    <Row>
      <Col md={10} lg={10}>
        <Card>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);
ReservationItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ReservationItem;
