import React from 'react';
import cx from 'classnames';
import classes from './FundSection.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

export const FundSection: React.FC = () => {
  return (
    <section id="fund-section">
      <Container>
        <Row className={classes.fund}>
          <Col md="4" sm="12">
            <article className={classes.information}>
              <h3 className={classes.information__title}>Фонд</h3>
              <p className={classes.information__description}>
                в 2022 организовали фонд и общим пулом заходим в проекты на
                ранней стадии развития
              </p>
            </article>
          </Col>
          <Col md="4" sm="12">
            <article className={classes.projects}>
              <p className={cx(classes.projects__title, classes.gradient)}>
                30
              </p>
              <p
                className={cx(classes.projects__description, classes.gradient)}
              >
                Количество успешных проектов
              </p>
            </article>
          </Col>
          <Col md="4" sm="12">
            <article className={classes.allocation}>
              <p className={cx(classes.allocation__title, classes.gradient)}>
                750000$
              </p>
              <p
                className={cx(
                  classes.allocation__description,
                  classes.gradient
                )}
              >
                Общая сумма аллокаций
              </p>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
