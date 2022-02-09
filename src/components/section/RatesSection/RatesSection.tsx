import React from 'react';
import classes from './RatesSection.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { RatesDescription } from '../../layout/RatesDescription';
import { RatesAccordion } from '../../layout/RatesAccordion';

export const RatesSection: React.FC = () => {
  return (
    <section id="rates-section" className={classes.rates}>
      <Container className={classes.transition}>
        <Row>
          <Col md={{ span: 4 }} className={classes.transition}>
            <div className={classes.inner}>
              <RatesDescription />
            </div>
          </Col>
          <Col md={{ span: 8 }}>
            <div className={classes.inner}>
              <RatesAccordion />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
