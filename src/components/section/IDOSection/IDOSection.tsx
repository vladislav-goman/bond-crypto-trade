import React from 'react';
import Image from 'next/image';
import cx from 'classnames';
import classes from './IDOSection.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { Button, ButtonType } from '../../common/Button';
import { Animation } from '../../common/Animation';
import timer from '../../../images/timer.svg';
import money from '../../../images/money-bill.svg';
import hands from '../../../images/hands-helping.svg';

export const IDOSection: React.FC = () => {
  return (
    <section id="ido-section" className={classes.ido}>
      <Container>
        <h3 className={classes.ido__title}>Отдельный курс IDO</h3>
        <Row>
          <Col lg={{ span: 4, offset: 2 }} sm={{ span: 6, offset: 0 }}>
            <Animation className={'animate__fadeInLeft'}>
              <div className={classes.ido__card}>
                <p className={classes.ido__card__title}>
                  Отдельный курс&nbsp;
                  <span className={classes.ido__card__gradient}>IDO</span>
                </p>
                <p className={classes.ido__card__description}>
                  Разработали и успешно проводим курс по инвестициям в проекты на ранней стадии развития, при поддержке
                  экспертов в области IDO.
                </p>
                <div className={classes.buttonGroup}>
                  <Button title="Записаться" />
                  <Button title="Подробнее" type={ButtonType.secondary} />
                </div>
              </div>
            </Animation>
          </Col>
          <Col md={{ offset: 5 }}>
            <Animation className={'animate__fadeInRight'}>
              <section className={classes.benefits}>
                <div className={cx(classes.ido__card, classes.ido__card__small)}>
                  <Image src={timer} alt="timer" />
                  <p className={classes.benefits__text}>2 недели обучения</p>
                </div>
                <div className={cx(classes.ido__card, classes.ido__card__small)}>
                  <Image src={money} alt="money bill" />
                  <p className={classes.benefits__text}>Полное погружение в IDO</p>
                </div>
                <div className={cx(classes.ido__card, classes.ido__card__small)}>
                  <Image src={hands} alt="hands" />
                  <p className={classes.benefits__text}>Доступ к аллокациям от нашего фонда</p>
                </div>
              </section>
            </Animation>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
