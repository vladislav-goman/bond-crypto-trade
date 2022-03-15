import React from 'react';
import classes from './IDOWelcome.module.scss';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { Animation } from '../../common/Animation';
import { Button, ButtonType } from '../../common/Button';
import { Calendar, Timer, Money } from '../../icons';

export const IDOWelcome: React.FC = () => {
  return (
    <section id="ido-welcome-section" className={classes.welcome}>
      <Container>
        <Row>
          <Col md={12}>
            <Animation className={'animate__fadeIn'}>
              <div className={classes.inner}>
                <header className={classes.header}>
                  <h2 className={classes.title}>Курс об IDO</h2>
                  <p className={classes.description}>
                    Онлайн-курс об IDO и инвестициях в проекты на ранних стадиях развития
                  </p>
                </header>
                <main className={classes.main}>
                  <Animation className={'animate__fadeInLeft'}>
                    <Button className={classes.primaryButton} title="Регистрация" />
                  </Animation>
                  <Animation className={'animate__fadeInRight'}>
                    <Link href="/ido" passHref>
                      <Button
                        className={classes.secondaryButton}
                        isLink
                        title="Подробнее"
                        type={ButtonType.secondary}
                      />
                    </Link>
                  </Animation>
                </main>
                <footer className={classes.footer}>
                  <Container>
                    <Row>
                      <Col md={{ span: 10, offset: 1 }}>
                        <div className={classes.highlights}>
                          <article className={classes.card}>
                            <header className={classes.top}>
                              <Calendar />
                              <h4 className={classes.label}>Старт</h4>
                            </header>
                            <h3 className={classes.info}>26 января</h3>
                          </article>
                          <article className={classes.card}>
                            <header className={classes.top}>
                              <Timer />
                              <h4 className={classes.label}>Продолжительность</h4>
                            </header>
                            <h3 className={classes.info}>2 недели</h3>
                          </article>
                          <article className={classes.card}>
                            <header className={classes.top}>
                              <Money />
                              <h4 className={classes.label}>Цена</h4>
                            </header>
                            <span className={classes.group}>
                              <h3 className={classes.info}>€399</h3>
                              <span className={classes.muted}>€699</span>
                            </span>
                          </article>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </footer>
              </div>
            </Animation>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
