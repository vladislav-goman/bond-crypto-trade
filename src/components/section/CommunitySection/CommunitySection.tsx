import React from 'react';
import Image from 'next/image';
import classes from './CommunitySection.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import phone from '../../../images/phone.svg';
import messages from '../../../images/messages.svg';
import pieChart from '../../../images/pie-chart.svg';
import lightbulb from '../../../images/lightbulb.svg';

export const CommunitySection: React.FC = () => {
  return (
    <section id="community-section" className={classes.community}>
      <Container>
        <Row>
          <Col>
            <p className={classes.title}>Комьюнити</p>
            <p className={classes.description}>
              Все ученики получают доступ в наше закрытое сообщество. Это беседа
              в Telegram канале, где находятся все наши кураторы, ученики и
              Игнат.
            </p>
            <p className={classes.description}>
              Новички в начале обучения всегда нуждаются в поддержке и
              мотивации, а опытные трейдеры делятся друг с другом аналитикой и
              результатами.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <article className={classes.benefit__section}>
              <div className={classes.benefit__container}>
                <p className={classes.benefit__title}>$25M</p>
                <p className={classes.benefit__text}>
                  Депозит участников нашего закрытого сообщества
                </p>
              </div>
              <div className={classes.benefit__container}>
                <p className={classes.benefit__title}>400</p>
                <p className={classes.benefit__text}>
                  Количество учеников, которые уже получают прибыль
                </p>
              </div>
            </article>
          </Col>
        </Row>
        <Row className={classes.center}>
          <Col md="12">
            <article className={classes.advantages__section}>
              <div className={classes.advantages__container}>
                <div className={classes.image__container}>
                  <Image src={phone} className={classes.image} alt="phone" />
                </div>
                <p className={classes.advantages__text}>
                  Еженедельные групповые звонки
                </p>
              </div>
              <div className={classes.advantages__container}>
                <div className={classes.image__container}>
                  <Image
                    src={messages}
                    className={classes.image}
                    alt="messages"
                  />
                </div>
                <p className={classes.advantages__text}>
                  Разбор и аналитика рынка
                </p>
              </div>
              <div className={classes.advantages__container}>
                <div className={classes.image__container}>
                  <Image
                    src={pieChart}
                    className={classes.image}
                    alt="pieChart"
                  />
                </div>
                <p className={classes.advantages__text}>
                  Инсайды и бизнес идеи
                </p>
              </div>
              <div className={classes.advantages__container}>
                <div className={classes.image__container}>
                  <Image
                    src={lightbulb}
                    className={classes.image}
                    alt="lightbulb"
                  />
                </div>
                <p className={classes.advantages__text}>IDO и инвестиции</p>
              </div>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
