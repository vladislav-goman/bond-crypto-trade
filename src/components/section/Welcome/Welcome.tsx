import React from 'react';
import classes from './Welcome.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import cx from 'classnames';
import Image from 'next/image';
import { Button, ButtonType } from '../../common/Button';
import { BackgroundChart } from '../../common/BackgroundChart';
import MonacoIcon from '../../../images/monaco.svg';

export const Welcome: React.FC = () => {
  return (
    <section id="welcome-section" className={classes.welcome}>
      <BackgroundChart />
      <Container>
        <Row>
          <Col>
            <div>
              <h4
                className={cx(
                  classes.countryChip,
                  'animate__animated',
                  'animate__fadeIn'
                )}
              >
                <span className={classes.label}>Прямиком из Монако</span>
                <Image src={MonacoIcon} alt="Monaco Icon" />
              </h4>
              <h1
                className={cx(
                  classes.header,
                  'animate__animated',
                  'animate__fadeIn'
                )}
              >
                Лучшее обучение{' '}
                <span className={classes.highlight}>трейдингу.</span>
              </h1>
              <article
                className={cx(
                  classes.description,
                  'animate__animated',
                  'animate__fadeIn'
                )}
              >
                Результаты зависят от опыта и личной дисциплины. Улучшить навыки
                и повысить продуктивность можно на нашем курсе.
              </article>
              <div className={classes.buttonGroup}>
                <Button
                  className={cx('animate__animated', 'animate__fadeInLeft')}
                  title="Регистрация"
                />
                <Button
                  className={cx('animate__animated', 'animate__fadeInRight')}
                  title="Подробнее"
                  type={ButtonType.secondary}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
