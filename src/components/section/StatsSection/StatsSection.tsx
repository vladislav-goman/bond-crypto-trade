import React from 'react';
import classes from './StatsSection.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import cx from 'classnames';

export const StatsSection: React.FC = () => {
  return (
    <section id="stats-section" className={classes.stats}>
      <Container>
        <Row>
          <Col md={5}>
            <div className={classes.inner}>
              <article className={classes.card}>
                <header className={classes.header}>
                  <h2 className={classes.title}>$195M</h2>
                  <p className={classes.description}>
                    Торговый объем за 2021 год
                  </p>
                </header>
                <main className={classes.content}></main>
              </article>
            </div>
          </Col>
          <Col md={4}>
            <div className={classes.inner}>
              <article className={classes.card}>
                <header className={classes.header}>
                  <h2 className={classes.title}>400</h2>
                  <p className={classes.description}>Довольных учеников</p>
                </header>
                <main className={classes.content}></main>
              </article>
              <article className={classes.card}>
                <header className={classes.header}>
                  <h2 className={classes.title}>4 года</h2>
                  <p className={classes.description}>Управления активами</p>
                </header>
                <main className={classes.content}></main>
              </article>
            </div>
          </Col>
          <Col md={3}>
            <div className={classes.inner}>
              <article className={cx(classes.card, classes.center)}>
                <header className={classes.header}>
                  <h2 className={classes.title}>19</h2>
                  <p className={classes.description}>
                    Успешных потоков обучения{' '}
                  </p>
                </header>
                <main className={classes.content}></main>
              </article>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
