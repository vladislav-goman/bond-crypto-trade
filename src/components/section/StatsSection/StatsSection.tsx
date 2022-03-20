import React from 'react';
import classes from './StatsSection.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import cx from 'classnames';
import Image from 'next/image';
import StarEyesEmoji from '../../../images/emoji/star-eyes.png';
import PartyGirlEmoji from '../../../images/emoji/girl.png';
import BeardDudeEmoji from '../../../images/emoji/beard.png';
import { SVGAnimation } from '../../common/SVGAnimation';
import { Animation } from '../../common/Animation';
import graphicUp from '../../../images/animations/graphicUp.json';
import students from '../../../images/animations/students.json';
import columns from '../../../images/animations/columns.json';
import { CountUp } from '../../common/CountUp';

export const StatsSection: React.FC = () => {
  return (
    <section id="stats-section" className={classes.stats}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={classes.inner}>
              <div className={classes.item1}>
                <Animation className={'animate__fadeIn'}>
                  <article className={classes.card}>
                    <header className={classes.header}>
                      <h2 className={classes.title}>
                        <CountUp duration={1.5} separator=" " end={195} prefix="&#36;" suffix="M" />
                      </h2>
                      <p className={classes.description}>Торговый объем за 2021 год</p>
                    </header>
                    <main className={cx(classes.content, classes.stretch)}>
                      <SVGAnimation animationData={graphicUp} />
                    </main>
                  </article>
                </Animation>
              </div>
              <div className={classes.item2}>
                <Animation className={'animate__fadeIn'}>
                  <article className={cx(classes.card, classes.horizontal)}>
                    <header className={classes.header}>
                      <h2 className={classes.title}>
                        <CountUp duration={1.5} separator=" " end={400} />
                      </h2>
                      <p className={classes.description}>Довольных учеников</p>
                    </header>
                    <main className={classes.content}>
                      <div className={cx(classes.emoji, classes.top)}>
                        <Animation className={'animate__jackInTheBox'}>
                          <Image
                            quality={100}
                            className={classes.emoji}
                            alt="Dude with"
                            layout="responsive"
                            src={StarEyesEmoji}
                          />
                        </Animation>
                      </div>
                      <div className={cx(classes.emoji, classes.right)}>
                        <Animation className={'animate__jackInTheBox'} delay={1}>
                          <Image
                            quality={100}
                            className={classes.emoji}
                            layout="responsive"
                            alt="Party Girl Emoji"
                            src={PartyGirlEmoji}
                          />
                        </Animation>
                      </div>
                      <div className={cx(classes.emoji, classes.left)}>
                        <Animation className={'animate__jackInTheBox'} delay={2}>
                          <Image
                            quality={100}
                            className={classes.emoji}
                            layout="responsive"
                            alt="Girl Emoji"
                            src={BeardDudeEmoji}
                          />
                        </Animation>
                      </div>
                    </main>
                  </article>
                </Animation>
              </div>
              <div className={classes.item3}>
                <Animation className={'animate__fadeIn'}>
                  <article className={cx(classes.card, classes.horizontal)}>
                    <header className={classes.header}>
                      <h2 className={classes.title} style={{ width: '203px' }}>
                        <CountUp duration={1.5} separator=" " end={4} /> года
                      </h2>
                      <p className={classes.description}>Управления активами</p>
                    </header>
                    <main className={classes.content}>
                      <SVGAnimation className={classes.marginLeft} animationData={columns} />
                    </main>
                  </article>
                </Animation>
              </div>
              <div className={classes.item4}>
                <Animation className={'animate__fadeIn'}>
                  <article className={cx(classes.card, classes.center)}>
                    <header className={classes.header}>
                      <h2 className={classes.title}>
                        <CountUp duration={1.5} separator=" " end={19} />
                      </h2>
                      <p className={classes.description}>Успешных потоков обучения </p>
                    </header>
                    <main className={classes.content}>
                      <SVGAnimation animationData={students} />
                    </main>
                  </article>
                </Animation>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
