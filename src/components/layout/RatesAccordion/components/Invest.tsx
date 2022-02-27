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
      <svg
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0L10.116 5.08754L15.6085 5.52786L11.4238 9.11246L12.7023 14.4721L8 11.6L3.29772 14.4721L4.5762 9.11246L0.391548 5.52786L5.88397 5.08754L8 0Z"
          fill="#641AAD"
        />
      </svg>
    </div>
  );
};

export const Invest: React.FC = () => {
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
                <h5 className={classes.label}>
                  Для людей со средним и крупным капиталом
                </h5>
              </li>
              <li className={classes.listItem}>
                <div className={classes.mark}>
                  <PlusMark />
                </div>
                <h5 className={classes.label}>
                  У кого мало времени для ежедневной торговли
                </h5>
              </li>
              <li className={classes.listItem}>
                <div className={classes.mark}>
                  <PlusMark />
                </div>
                <h5 className={classes.label}>Импульсивных и азартных людей</h5>
              </li>
              <li className={classes.listItem}>
                <div className={classes.mark}>
                  <PlusMark />
                </div>
                <h5 className={classes.label}>
                  Кто не хочет глубоко изучать технический анализ
                </h5>
              </li>
              <li className={classes.listItem}>
                <div className={classes.mark}>
                  <PlusMark />
                </div>
                <h5 className={classes.label}>
                  Кто хочет иметь доходность от 30% годовых
                </h5>
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
                <h5 className={classes.label}>14 онлайн вебинаров с Игнатом</h5>
              </li>
              <li className={classes.listItem}>
                <div className={classes.mark}>
                  <StarMark />
                </div>
                <h5 className={classes.label}>
                  Все вебинары будут доступны в записи
                </h5>
              </li>
              <li className={classes.listItem}>
                <div className={classes.mark}>
                  <StarMark />
                </div>
                <h5 className={classes.label}>Проверка домашнего задания</h5>
              </li>
              <li className={classes.listItem}>
                <div className={classes.mark}>
                  <StarMark />
                </div>
                <h5 className={classes.label}>Теоретический материал</h5>
              </li>
              <li className={classes.listItem}>
                <div className={classes.mark}>
                  <StarMark />
                </div>
                <h5 className={classes.label}>
                  Доступ к нашей уникальной библиотеке профессиональной
                  литературы
                </h5>
              </li>
              <li className={classes.listItem}>
                <div className={classes.mark}>
                  <StarMark />
                </div>
                <h5 className={classes.label}>
                  Пожизненную связь с кураторами
                </h5>
              </li>
              <li className={classes.listItem}>
                <div className={classes.mark}>
                  <StarMark />
                </div>
                <h5 className={classes.label}>
                  Пожизненный доступ в наше сообщество
                </h5>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
