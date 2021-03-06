import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import cx from 'classnames';
import classes from '../RatesAccordion.module.scss';

const PlusMark: React.FC = () => {
  return (
    <div className={classes.plusMark}>
      <div className={classes.vertical}></div>
      <div className={classes.horizontal}></div>
    </div>
  );
};

const StarMark: React.FC = () => {
  return (
    <div className={classes.starMark}>
      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 0L10.116 5.08754L15.6085 5.52786L11.4238 9.11246L12.7023 14.4721L8 11.6L3.29772 14.4721L4.5762 9.11246L0.391548 5.52786L5.88397 5.08754L8 0Z"
          fill="#641AAD"
        />
      </svg>
    </div>
  );
};

export const Personal: React.FC = () => {
  return (
    <Container className={classes.container}>
      <Row>
        <Col md={6}>
          <div className={classes.inner}>
            <h3 className={classes.title}>Кому подойдет:</h3>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <div className={classes.mark}>
                  <PlusMark />
                </div>
                <h5 className={classes.label}>Для тех, кто хочет получить персональное менторство.</h5>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={6}>
          <div className={cx(classes.inner, classes.marginTopMobile)}>
            <h4 className={classes.title}>Что вам даст тариф:</h4>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <div className={classes.mark}>
                  <StarMark />
                </div>
                <h5 className={classes.label}>Поможем достигнуть результата и привести вас из точки А в точку Б.</h5>
              </li>
              <li className={classes.listItem}>
                <div className={classes.mark}>
                  <StarMark />
                </div>
                <h5 className={classes.label}>Поможем вам развиваться независимо от вашего уровня.</h5>
              </li>
              <li className={classes.listItem}>
                <div className={classes.mark}>
                  <StarMark />
                </div>
                <h5 className={classes.label}>Доступ как к групповым, так и индивидуальным материалам.</h5>
              </li>
              <li className={classes.listItem}>
                <div className={classes.mark}>
                  <StarMark />
                </div>
                <h5 className={classes.label}>
                  Персональный подход, постоянный контроль, срез кривой капитала каждый месяц после обучения.
                </h5>
              </li>
              <li className={classes.listItem}>
                <div className={classes.mark}>
                  <StarMark />
                </div>
                <h5 className={classes.label}>Прямой контакт с Игнатом 24/7</h5>
              </li>
              <li className={classes.listItem}>
                <div className={classes.mark}>
                  <StarMark />
                </div>
                <h5 className={classes.label}>Длительность 8 недель и поддержка после обучения.</h5>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
