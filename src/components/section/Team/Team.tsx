import React from 'react';
import classes from './Welcome.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

export const Team: React.FC = () => {
  return (
    <section id="team-section" className={classes.team}>
      <Container>
        <Row>
          <Col>
            <div></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
