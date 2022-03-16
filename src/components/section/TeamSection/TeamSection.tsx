import React from 'react';
import Image from 'next/image';
import classes from './TeamSection.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import ignat from '../../../images/founder/bmw.png';
import rotaru from '../../../images/founder/bmw.png';
import concern from '../../../images/founder/bmw.png';
import philin from '../../../images/founder/bmw.png';
import bodya from '../../../images/founder/bmw.png';
import telegram from '../../../images/black-telegram.svg';

export const TeamSection: React.FC = () => {
  return (
    <section id="team-section" className={classes.team}>
      <Container>
        <div className={classes.header}>
          <h3 className={classes.title}>Наша команда</h3>
          <h4 className={classes.subtitle}>
            Многие участники нашей команды пришли в проект будучи нашими учениками. Мы стараемся увидеть талант в каждом
            и дать возможность реализовать себя.
          </h4>
        </div>
        <Row>
          <Col md={12}>
            <div className={classes.cardContainer}>
              <div className={classes.card}>
                <Image src={ignat} alt="Игнат Бонд" className={classes.memberImage} />
                <a href="#" className={classes.telegramContainer}>
                  <Image src={telegram} alt="telegram" className={classes.telegram} />
                </a>
                <p className={classes.fullName}>Игнат Бонд</p>
                <p className={classes.position}>Основатель</p>
              </div>
              <div className={classes.card}>
                <Image src={rotaru} alt="Маким Ротару" className={classes.memberImage} />
                <a href="#" className={classes.telegramContainer}>
                  <Image src={telegram} alt="telegram" className={classes.telegram} />
                </a>
                <p className={classes.fullName}>Маким Ротару</p>
                <p className={classes.position}>Сооснователь и копирайтер на пол ставки</p>
              </div>
              <div className={classes.card}>
                <Image src={concern} alt="Concern" className={classes.memberImage} />
                <a href="#" className={classes.telegramContainer}>
                  <Image src={telegram} alt="telegram" className={classes.telegram} />
                </a>
                <p className={classes.fullName}>Concern</p>
                <p className={classes.position}>Штрих 1</p>
              </div>
              <div className={classes.card}>
                <Image src={philin} alt="Philin" className={classes.memberImage} />
                <a href="#" className={classes.telegramContainer}>
                  <Image src={telegram} alt="telegram" className={classes.telegram} />
                </a>
                <p className={classes.fullName}>Philin</p>
                <p className={classes.position}>Штрих 2</p>
              </div>
              <div className={classes.card}>
                <Image src={bodya} alt="Bodya Invate" className={classes.memberImage} />
                <a href="#" className={classes.telegramContainer}>
                  <Image src={telegram} alt="telegram" className={classes.telegram} />
                </a>
                <p className={classes.fullName}>Bodya Invate</p>
                <p className={classes.position}>Штрих 3</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
