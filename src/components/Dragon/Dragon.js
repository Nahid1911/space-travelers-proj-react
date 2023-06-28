import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { useDispatch } from 'react-redux';
import SideImg from '../assets/planet_bigger.png';
import './Dragon.css';
import { fetchDragons } from '../../redux/dragonsSlice/dragonsSlice';

const DragonsRender = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col md={2} lg={2}>
          <Image className="bodyImg" src={SideImg} />
        </Col>
        <Col md={10} lg={10}>
          <Card>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Reserve Dragon</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DragonsRender;
