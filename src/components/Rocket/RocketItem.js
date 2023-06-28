import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import './Rocket.css';

const RocketItem = ({
  name, description, flickrImages,
}) => (
  <Container>
    <Row>
      <Col>
        <Image src={flickrImages} />
      </Col>
      <Col md={10} lg={10}>
        <Card>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Button variant="primary">Reserve Rocket</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
RocketItem.propTypes = {
  name: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RocketItem;
