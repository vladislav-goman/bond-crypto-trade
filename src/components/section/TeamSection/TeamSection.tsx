import React from 'react';
import Image from 'next/image';
import classes from './TeamSection.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import ignat from '../../../images/team/ignat.png';
import rotaru from '../../../images/team/rotaru.png';
import bodya from '../../../images/team/bodya.jpg';
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
                <Image src={ignat} alt="Игнат Бонд" className={classes.memberImage} placeholder="blur" />
                <a href="https://t.me/Ignatbond" className={classes.telegramContainer} target="_blank" rel="noreferrer">
                  <Image src={telegram} alt="telegram" className={classes.telegram} />
                </a>
                <p className={classes.fullName}>Игнат Бонд</p>
                <p className={classes.position}>Основатель</p>
              </div>
              <div className={classes.card}>
                <Image src={rotaru} alt="Макcим Ротару" className={classes.memberImage} placeholder="blur" />
                <a href="https://t.me/maxdsl" className={classes.telegramContainer} target="_blank" rel="noreferrer">
                  <Image src={telegram} alt="telegram" className={classes.telegram} />
                </a>
                <p className={classes.fullName}>Макcим Ротару</p>
                <p className={classes.position}>Сооснователь и копирайтер на пол ставки</p>
              </div>
              <div className={classes.card}>
                <Image src={bodya} alt="Bodya Invate" className={classes.memberImage} placeholder="blur" />
                <a
                  href="https://t.me/bodyainvade"
                  className={classes.telegramContainer}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={telegram} alt="telegram" className={classes.telegram} />
                </a>
                <p className={classes.fullName}>Bodya Invate</p>
                <p className={classes.position}>IDO Master</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
