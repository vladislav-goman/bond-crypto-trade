import React from 'react';
import classes from './StatsSection.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import cx from 'classnames';
import Image from 'next/image';
import StarEyesEmoji from '../../../images/emoji/star-eyes.png';
import PartyGirlEmoji from '../../../images/emoji/girl.png';
import BeardDudeEmoji from '../../../images/emoji/beard.png';
import { Animation } from '../../common/Animation';
import graphicUp from '../../../images/animations/graphicUp.json';
import students from '../../../images/animations/students.json';
import columns from '../../../images/animations/columns.json';

export const StatsSection: React.FC = () => {
  return (
    <section id="stats-section" className={classes.stats}>
      <Container>
        <Row>
          <Col xl={4}>
            <div className={classes.inner}>
              <article className={classes.card}>
                <header className={classes.header}>
                  <h2 className={classes.title}>$195M</h2>
                  <p className={classes.description}>
                    Торговый объем за 2021 год
                  </p>
                </header>
                <main className={cx(classes.content, classes.stretch)}>
                  <Animation animationData={graphicUp} />
                </main>
              </article>
            </div>
          </Col>
          <Col xl={5}>
            <div className={classes.inner}>
              <article className={cx(classes.card, classes.horizontal)}>
                <header className={classes.header}>
                  <h2 className={classes.title}>400</h2>
                  <p className={classes.description}>Довольных учеников</p>
                </header>
                <main className={classes.content}>
                  <div className={cx(classes.emoji, classes.top)}>
                    <Image
                      quality={100}
                      className={classes.emoji}
                      alt="Dude with stars eyes Emoji"
                      src={StarEyesEmoji}
                    />
                  </div>
                  <div className={cx(classes.emoji, classes.right)}>
                    <Image
                      quality={100}
                      className={classes.emoji}
                      alt="Party Girl Emoji"
                      src={PartyGirlEmoji}
                    />
                  </div>
                  <div className={cx(classes.emoji, classes.left)}>
                    <Image
                      quality={100}
                      className={classes.emoji}
                      alt="Beard Dude Girl Emoji"
                      src={BeardDudeEmoji}
                    />
                  </div>
                </main>
              </article>
              <article className={cx(classes.card, classes.horizontal)}>
                <header className={classes.header}>
                  <h2 className={classes.title}>4 года</h2>
                  <p className={classes.description}>Управления активами</p>
                </header>
                <main className={classes.content}>
                  <Animation
                    className={classes.marginLeft}
                    animationData={columns}
                  />
                </main>
              </article>
            </div>
          </Col>
          <Col xl={3}>
            <div className={classes.inner}>
              <article className={cx(classes.card, classes.center)}>
                <header className={classes.header}>
                  <h2 className={classes.title}>19</h2>
                  <p className={classes.description}>
                    Успешных потоков обучения{' '}
                  </p>
                </header>
                <main className={classes.content}>
                  <Animation animationData={students} />
                </main>
              </article>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
