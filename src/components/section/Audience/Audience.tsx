import React from 'react';
import classes from './Audience.module.scss';
import cx from 'classnames';
import { Container, Row, Col } from 'react-bootstrap';
import { Animation } from '../../common/Animation';
import { Star } from '../../icons';

export const Audience: React.FC = () => {
  return (
    <section id="ido-audience-section" className={classes.audience}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={classes.inner}>
              <Animation>
                <h2 className={classes.title}>Для кого курс?</h2>
                <p className={classes.description}>
                  Курс для тех, кто хочет разобраться в блокчейне, научиться анализировать криптопроекты и понимать
                  стадии их развития с целью инвестирования и получения большой прибыли.
                </p>
              </Animation>
            </div>
          </Col>
          <Col md={12}>
            <div className={classes.card}>
              <h3 className={classes.header}>Какой вы получите результат?</h3>
              <ul className={classes.list}>
                <div className={classes.group}>
                  <Animation className={cx('animate__fadeInLeft', classes.animate)}>
                    <article className={classes.item}>
                      <Star fill="#641AAD" />
                      <h4 className={classes.text}>
                        Вы научитесь самостоятельно анализировать проекты и участвовать в них. Познаете инструменты
                        анализа. Поймете, что такое тренд и как не попасть на скам. А также узнаете как быстро продать
                        полученные токены и не упустить большие иксы.
                      </h4>
                    </article>
                  </Animation>
                  <Animation className={cx('animate__fadeInLeft', classes.animate)}>
                    <article className={classes.item}>
                      <Star fill="#641AAD" />
                      <h4 className={classes.text}>
                        Вы получите всю необходимую информацию на живых вебинарах, а также поддержку 24/7 до и после
                        них.
                      </h4>
                    </article>
                  </Animation>
                </div>
                <div className={classes.group}>
                  <Animation className={cx('animate__fadeInRight', classes.animate)}>
                    <article className={classes.item}>
                      <Star fill="#641AAD" />
                      <h4 className={classes.text}>
                        Вы научитесь работать с инструментами для анализа проектов и их соц.сетей.
                      </h4>
                    </article>
                  </Animation>
                  <Animation className={'animate__fadeInRight'}>
                    <article className={classes.item}>
                      <Star fill="#641AAD" />
                      <h4 className={classes.text}>
                        Получите доступ в наше уникальное сообщество, где каждый день мы делимся анализом и мнением
                        относительно ситуации на рынке. Скидка 10 % на любой наш курс. Приглашение в наше закрытое
                        сообщество.
                      </h4>
                    </article>
                  </Animation>
                </div>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
