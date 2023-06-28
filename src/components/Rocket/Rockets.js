import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { useDispatch } from 'react-redux';
import rocketImg from '../../assets/logo.png';
import { fetchRockets } from '../../redux/rocketsSlice/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col md={2} lg={2}>
          <Image className="bodyImg" src={rocketImg} />
        </Col>
        <Col md={10} lg={10}>
          <Card>
            <Card.Body>
              <Card.Title>Falcon 1</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Reserve Rocket</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Rockets;
