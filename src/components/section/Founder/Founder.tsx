import React from 'react';
import classes from './Founder.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper';
import Image from 'next/image';
import { Telegram, Youtube, Instagram } from '../../icons';
import WithCar from '../../../images/founder/with-car.png';

export const Founder: React.FC = () => {
  return (
    <section id="team-section" className={classes.team}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={classes.inner}>
              <Container>
                <Row>
                  <Col md={12}>
                    <h2 className={classes.title}>Игнат Бонд</h2>
                    <p className={classes.description}>Основатель образовательного продукта BondCryptoTrade</p>
                    <div className={classes.social}>
                      <a href="https://telegram.com" target="_blank" rel="noreferrer">
                        <Telegram fill="#0D0033" />
                      </a>
                      <a href="https://youtube.com" target="_blank" rel="noreferrer">
                        <Youtube fill="#0D0033" />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <Instagram fill="#0D0033" />
                      </a>
                    </div>
                  </Col>
                  <Col md={12}>
                    <Swiper
                      modules={[A11y]}
                      spaceBetween={0}
                      slidesPerView={'auto'}
                      className={classes.container}
                      grabCursor
                    >
                      <SwiperSlide className={classes.slide}>
                        <article className={classes.card}>
                          <div className={classes.image__container}>
                            <Image
                              className={classes.image}
                              quality={100}
                              src={WithCar}
                              alt="Игнат на фоне машины"
                              layout="responsive"
                            />
                          </div>
                          <h4 className={classes.header}>2017 год</h4>
                          <p className={classes.description}>
                            Сформировал свой первый крипто-портфель на отложенные 5000$ Удалось продать все активы на
                            пике их цен.
                          </p>
                        </article>
                      </SwiperSlide>
                      <SwiperSlide className={classes.slide}>
                        <article className={classes.card}>
                          <div className={classes.image__container}>
                            <Image
                              className={classes.image}
                              quality={100}
                              src={WithCar}
                              alt="Игнат на фоне машины"
                              layout="responsive"
                            />
                          </div>
                          <h4 className={classes.header}>2018 год</h4>
                          <p className={classes.description}>
                            Переехал в Монако за образованием. Окончательно решил связать свою деятельность с
                            криптовалютой. Начал торговать, не имея должного уровня знаний, и потерял больше 50000$ в
                            первые 3 месяца. Начал активно учиться торговле.
                          </p>
                        </article>
                      </SwiperSlide>
                      <SwiperSlide className={classes.slide}>
                        <article className={classes.card}>
                          <div className={classes.image__container}>
                            <Image
                              className={classes.image}
                              quality={100}
                              src={WithCar}
                              alt="Игнат на фоне машины"
                              layout="responsive"
                            />
                          </div>
                          <h4 className={classes.header}>2019 год</h4>
                          <p className={classes.description}>
                            Вышел на первые доходы. Прошел более десятка различных обучений, хороших и не очень. Стала
                            формироваться идея о создании собственной программы
                          </p>
                        </article>
                      </SwiperSlide>
                      <SwiperSlide className={classes.slide}>
                        <article className={classes.card}>
                          <div className={classes.image__container}>
                            <Image
                              className={classes.image}
                              quality={100}
                              src={WithCar}
                              alt="Игнат на фоне машины"
                              layout="responsive"
                            />
                          </div>
                          <h4 className={classes.header}>2020 год</h4>
                          <p className={classes.description}>
                            Во время пандемии было очень много времени, чтобы накопить должный опыт и отточить
                            полученные знания. Разработали собственное обучение, которое переросло в полноценную
                            занятость.
                          </p>
                        </article>
                      </SwiperSlide>
                      <SwiperSlide className={classes.slide}>
                        <article className={classes.card}>
                          <div className={classes.image__container}>
                            <Image
                              className={classes.image}
                              quality={100}
                              src={WithCar}
                              alt="Игнат на фоне машины"
                              layout="responsive"
                            />
                          </div>
                          <h4 className={classes.header}>2021-2022 год </h4>
                          <p className={classes.description}>
                            На сегодняшний день наше комьюнити составляет больше 400 человек. Мы успешно завершили 19
                            потоков. Наши ученики полноценно зарабатывают на жизнь с помощью трейдинга. Люди абсолютно
                            разных профессий переквалифицировались и вышли на абсолютно новый уровень с точки зрения
                            финансовой грамотности.
                          </p>
                        </article>
                      </SwiperSlide>
                      <SwiperSlide className={classes.slide}>
                        <article className={classes.card}>
                          <div className={classes.image__container}>
                            <Image
                              className={classes.image}
                              quality={100}
                              src={WithCar}
                              alt="Игнат на фоне машины"
                              layout="responsive"
                            />
                          </div>
                          <h4 className={classes.header}>Будущее</h4>
                          <p className={classes.description}>
                            У нас очень грандиозные цели и планы на будущее. От создания хедж-фонда до выпуска коллекции
                            NFT и собственного токена. Каждодневная работа над ошибками, развитие нашего
                            образовательного продукта. И многое многое другое. Я надеюсь увидеть Вас в нашем комьюнити и
                            верю, что мы сможем многим поделиться друг с другом.
                          </p>
                        </article>
                      </SwiperSlide>
                    </Swiper>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
