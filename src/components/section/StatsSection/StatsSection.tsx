import React from 'react';
import classes from './StatsSection.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { Button, ButtonType } from '../../common/Button';
import { BackgroundChart } from '../../common/BackgroundChart';
import MonacoIcon from '../../../images/monaco.svg';

export const StatsSection: React.FC = () => {
  return (
    <section id="stats-section" className={classes.stats}>
      <BackgroundChart />
      <Container>
        <Row>
          <Col>
            <div className={classes.welcome}>
              <h4 className={classes.countryChip}>
                <span className={classes.label}>Прямиком из Монако</span>
                <Image src={MonacoIcon} alt="Monaco Icon" />
              </h4>
              <h1 className={classes.header}>
                Лучшее обучение{' '}
                <span className={classes.highlight}>трейдингу.</span>
              </h1>
              <p className={classes.description}>
                Результаты зависят от опыта и личной дисциплины. Улучшить навыки
                и повысить продуктивность можно на нашем курсе.
              </p>
              <div className={classes.buttonGroup}>
                <Button title="Регистрация" />
                <Button title="Подробнее" type={ButtonType.secondary} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <article></article>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
