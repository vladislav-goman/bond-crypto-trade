import React from 'react';
import classes from './Welcome.module.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import cx from 'classnames';
import Image from 'next/image';
import { Button, ButtonType } from '../../common/Button';
import { BackgroundChart } from '../../common/BackgroundChart';
import MonacoIcon from '../../../images/monaco.svg';
import { Animation } from '../../common/Animation';

export const Welcome: React.FC = () => {
  return (
    <section id="welcome-section" className={classes.welcome}>
      <BackgroundChart />
      <Container>
        <Row>
          <Col>
            <div>
              <Animation className={'animate__fadeIn'}>
                <h4 className={cx(classes.countryChip)}>
                  <span className={classes.label}>Прямиком из Монако</span>
                  <Image src={MonacoIcon} alt="Monaco Icon" />
                </h4>
              </Animation>
              <Animation className={'animate__fadeIn'}>
                <h1 className={cx(classes.header)}>
                  Лучшее обучение <span className={classes.highlight}>трейдингу</span> и{' '}
                  <span className={classes.highlight}>инвестициям</span>.
                </h1>
              </Animation>
              <Animation className={'animate__fadeIn'}>
                <article className={cx(classes.description)}>
                  Результаты зависят от опыта и личной дисциплины. Улучшить навыки и повысить продуктивность можно на
                  нашем курсе.
                </article>
              </Animation>
              <div className={classes.buttonGroup}>
                <Animation className={'animate__fadeInLeft'}>
                  <Button title="Регистрация" />
                </Animation>
                <Animation className={'animate__fadeInRight'}>
                  <AnchorLink href="#cards-section" offset="60" className={classes.link}>
                    <Button isLink title="Подробнее" type={ButtonType.secondary} />
                  </AnchorLink>
                </Animation>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
