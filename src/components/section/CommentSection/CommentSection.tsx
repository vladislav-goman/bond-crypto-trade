import React, { useRef } from 'react';
import Image from 'next/image';
import classes from './CommentSection.module.scss';
import cx from 'classnames';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper';
import customer from '../../../images/customer-favicon.png';
import leftArrow from '../../../images/left-arrow.svg';
import rightArrow from '../../../images/right-arrow.svg';

export const CommentSection: React.FC = () => {
  return (
    <section id="comment-section">
      <Container>
        <h3 className={classes.comment__title}>Почему люди выбирают нас</h3>
        <Row>
          <Col md={12}>
            <div className={classes.inner}>
              <div id="previousButton" className={cx(classes.previousButton, 'swiper-button-prev')}>
                <Image src={leftArrow} alt="Стрелка влево" />
              </div>

              <div id="nextButton" className={cx(classes.nextButton, 'swiper-button-next')}>
                <Image src={rightArrow} alt="Стрелка вправо" />
              </div>
              <Swiper
                modules={[A11y, Navigation]}
                spaceBetween={16}
                slidesPerView={'auto'}
                className={classes.container}
                breakpoints={{ 0: { slidesPerView: 1.15 }, 768: { slidesPerView: 1.5 }, 1200: { slidesPerView: 3 } }}
                navigation={{
                  prevEl: '#previousButton',
                  nextEl: '#nextButton',
                }}
                grabCursor
              >
                <SwiperSlide className={classes.slide}>
                  <article className={classes.card}>
                    <div className={classes.header}>
                      <div className={classes.customerImage}>
                        <Image src={customer} alt="пользователь" />
                      </div>
                      <div className={classes.personalDetails}>
                        <p className={classes.fullName}>Leslie Alexander</p>
                      </div>
                    </div>
                    <p className={classes.description}>
                      Я пришел новичком в крипте. К концу второго потока собрал портфель на споте и отбил стоимость
                      обучения, сделав к депозиту +40%(на растущем рынке) Большим плюсом это сообщество, которое
                      остаётся с вами навсегда. Как итог: однозначно стоит своих денег.
                    </p>
                    <p className={classes.date}>12 января • 17:00</p>
                  </article>
                </SwiperSlide>
                <SwiperSlide className={classes.slide}>
                  <article className={classes.card}>
                    <div className={classes.header}>
                      <div className={classes.customerImage}>
                        <Image src={customer} alt="пользователь" />
                      </div>
                      <div className={classes.personalDetails}>
                        <p className={classes.fullName}>Tanya Dond</p>
                      </div>
                    </div>
                    <p className={classes.description}>
                      Большое спасибо за обучение! Очень познавательно и интересно. Получила много новых знаний и
                      хорошую базу для дальнейшего развития, а самое главное - доступ к большому комьюнити с отзывчивыми
                      ребятами, которые всегда поделятся информацией и новыми знаниями.
                    </p>
                    <p className={classes.date}>1 февраля • 13:51</p>
                  </article>
                </SwiperSlide>
                <SwiperSlide className={classes.slide}>
                  <article className={classes.card}>
                    <div className={classes.header}>
                      <div className={classes.customerImage}>
                        <Image src={customer} alt="пользователь" />
                      </div>
                      <div className={classes.personalDetails}>
                        <p className={classes.fullName}>Vadim Gniev</p>
                      </div>
                    </div>
                    <p className={classes.description}>
                      Я очень доволен, что обучался у тебя, так как получил очень много полезной информации, которую
                      использую в своей торговле. Подача материала простая и понятная, на все вопросы ты отвечаешь, так
                      что если что-то не понял - можно переспросить. Комьюнити здесь очень дружелюбное и с радостью
                      ответит на любой вопрос)
                    </p>
                    <p className={classes.date}>27 декабря • 15:28</p>
                  </article>
                </SwiperSlide>
                <SwiperSlide className={classes.slide}>
                  <article className={classes.card}>
                    <div className={classes.header}>
                      <div className={classes.customerImage}>
                        <Image src={customer} alt="пользователь" />
                      </div>
                      <div className={classes.personalDetails}>
                        <p className={classes.fullName}>Mary Merlin</p>
                      </div>
                    </div>
                    <p className={classes.description}>
                      Я начала изучать трейдинг, просмотрела множество лекций, прочитала кучу книг и статей, проходила
                      другие обучения, и с уверенность могу сказать, что твоё обучение действительно уникальное. Очень
                      много материала, который так просто не найдёшь в интернете и книгах. Ты действительно все очень
                      круто объясняешь.
                    </p>
                    <p className={classes.date}>24 января • 22:41</p>
                  </article>
                </SwiperSlide>
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
