import React from 'react';
import classes from './TradingCards.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { Badge } from '../../common/Badge';
import { TradingCardsCarousel } from '../../layout/TradingCardsCarousel';

export const TradingCards: React.FC = () => {
  return (
    <section id="cards-section" className={classes.tradingCards}>
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <div className={classes.inner}>
              <Badge>О трейдинге и инвестициях</Badge>
              <h2 className={classes.title}>Как начать торговать?</h2>
              <p className={classes.description}>
                Путь трейдера начинается с осознания, что в торговле нет быстрых
                результатов.
                <br />
                <br />
                Есть два варианте развития событий:
              </p>
              <ol className={classes.list}>
                <li className={classes.item}>
                  Самостоятельно образовываться, набирать опыт путём личных проб
                  и ошибок
                </li>
                <li className={classes.item}>
                  Обучаться с помощью ментора. Учиться на чужих ошибках. Вся
                  стратегия и знания проверены временем
                </li>
              </ol>
            </div>
          </Col>
          <Col md={7}>
            <div className={classes.inner}>
              <TradingCardsCarousel />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
