import React from 'react';
import classes from './TradingCards.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { Badge } from '../../common/Badge';
import { TradingCardsCarousel } from '../../layout/TradingCardsCarousel';
import { Animation } from '../../common/Animation';

export const TradingCards: React.FC = () => {
  return (
    <section id="cards-section" className={classes.tradingCards}>
      <Container>
        <Row>
          <Col md={{ span: 4 }}>
            <Animation className={'animate__fadeInLeft'}>
              <div className={classes.inner}>
                <Badge>О трейдинге и инвестициях</Badge>
                <h2 className={classes.title}>Как начать торговать?</h2>
                <p className={classes.description}>
                  Путь трейдера начинается с осознания, что в торговле нет
                  быстрых результатов.
                </p>
                <p className={classes.description}>
                  Но не нужно отчаиваться, главное следовать небольшим сводом
                  правил:
                </p>
              </div>
            </Animation>
          </Col>
          <Col md={{ span: 7, offset: 1 }}>
            <div className={classes.inner}>
              <Animation className={'animate__fadeInRight'}>
                <TradingCardsCarousel />
              </Animation>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
