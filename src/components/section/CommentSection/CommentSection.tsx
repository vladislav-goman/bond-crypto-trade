import React, { useRef } from 'react';
import Image from 'next/image';
import classes from './CommentSection.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper';
import customer from '../../../images/customer-favicon.png';
import leftArrow from '../../../images/left-arrow.svg';
import rightArrow from '../../../images/right-arrow.svg';

export const CommentSection: React.FC = () => {
  const swiperRef = useRef<HTMLDivElement>(null);
  return (
    <section id="comment-section">
      <Container>
        <h3 className={classes.comment__title}>Почему люди выбирают нас</h3>
        <Row>
          <Col md={12}>
            <Swiper
              modules={[A11y]}
              spaceBetween={16}
              slidesPerView={'auto'}
              className={classes.container}
              breakpoints={{ 0: { slidesPerView: 1.15 }, 768: { slidesPerView: 1.5 }, 1200: { slidesPerView: 3 } }}
              // @ts-ignore https://github.com/nolimits4web/swiper/issues/3855
              ref={swiperRef}
              grabCursor
            >
              <div
                id="previousButton"
                className={classes.previousButton}
                // @ts-ignore
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
                <Image src={leftArrow} alt="" />
              </div>

              <div
                id="nextButton"
                className={classes.nextButton}
                // @ts-ignore
                onClick={() => swiperRef.current.swiper.slideNext()}
              >
                <Image src={rightArrow} alt="" />
              </div>
              <SwiperSlide className={classes.slide}>
                <article className={classes.card}>
                  <div className={classes.header}>
                    <div className={classes.customerImage}>
                      <Image src={customer} alt="пользователь" />
                    </div>
                    <div className={classes.personalDetails}>
                      <p className={classes.fullName}>Leslie Alexander</p>
                      <p className={classes.position}>Lacus condimentum arcu.</p>
                    </div>
                  </div>
                  <p className={classes.description}>
                    Я пришел новичком в крипте. К концу второго потока собрал портфель на споте и отбил стоимость
                    обучения, сделав к депозиту +40%(на растущем рынке) Большим плюсом это сообщество, которое остаётся
                    с вами навсегда. Как итог: однозначно стоит своих денег.
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
                      <p className={classes.fullName}>Leslie Alexander</p>
                      <p className={classes.position}>Lacus condimentum arcu.</p>
                    </div>
                  </div>
                  <p className={classes.description}>
                    Большое спасибо за обучение! Очень познавательно и интересно. Получил много новых знаний и хорошую
                    базу для дальнейшего развития, а самое главное - доступ к большому комьюнити с отзывчивыми ребятами,
                    которые всегда поделятся информацией и новыми знаниями.
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
                      <p className={classes.fullName}>Leslie Alexander</p>
                      <p className={classes.position}>Lacus condimentum arcu.</p>
                    </div>
                  </div>
                  <p className={classes.description}>
                    Я очень доволен, что обучался у тебя, так как получил очень много полезной информации, которую
                    использую в своей торговле. Подача материала простая и понятная, на все вопросы ты отвечаешь, так
                    что если что-то не понял - можно переспросить. Комьюнити здесь очень дружелюбное и с радостью
                    ответит на любой вопрос)
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
                      <p className={classes.fullName}>Leslie Alexander</p>
                      <p className={classes.position}>Lacus condimentum arcu.</p>
                    </div>
                  </div>
                  <p className={classes.description}>
                    Я начала изучать трейдинг, просмотрела множество лекций, прочитала кучу книг и статей, проходила
                    другие обучения, и с уверенность могу сказать, что твоё обучение действительно уникальное. Очень
                    много материала, который так просто не найдёшь в интернете и книгах. Ты действительно все очень
                    круто объясняешь.
                  </p>
                  <p className={classes.date}>12 января • 17:00</p>
                </article>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
