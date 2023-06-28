import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import './Dragon.css';

const DragonItem = ({
  id, name, type, description, flickrImages,
}) => (
  <Container className="mainCardContainer">
    <div className="dragonImgContainre">
      <Image className="dragonImg" src={flickrImages} />
    </div>
    <div className="dragonInfoContainer">
      <Card.Body id={id} key={type}>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="descrStyle">{description}</Card.Text>
        <Button variant="primary">Reserve Dragon</Button>
      </Card.Body>
    </div>
  </Container>
);

DragonItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default DragonItem;
