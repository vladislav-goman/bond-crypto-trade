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
              ref={swiperRef}
              grabCursor
            >
              <div
                id="previousButton"
                className={classes.previousButton}
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
                <Image src={leftArrow} alt="" />
              </div>
              <div id="nextButton" className={classes.nextButton} onClick={() => swiperRef.current.swiper.slideNext()}>
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
                    Cras imperdiet massa non quisque pharetra ornare augue. Velit sed facilisi elementum, mus
                    pellentesque enim sapien, eget netus. In quisque fames mattis tempus. Maecenas pellentesque cras sem
                    tortor ut volutpat. Placerat varius tincidunt dui suscipit. Sed habitasse mauris mauris ornare
                    accumsan, ac id massa non. Adipiscing diam consequat, diam amet porttitor nunc ultrices morbi
                    tristique. Semper eget sollicitudin sit eget sollicitudin non donec feugiat.
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
                    Eget tortor molestie erat porttitor sagittis in nec. Mi dictum dolor egestas habitasse ac. At sit
                    lorem sit nullam nascetur. Condimentum elementum arcu phasellus sit amet amet. Tellus turpis
                    ridiculus at pellentesque iaculis ultricies. Nunc orci nibh accumsan felis sed interdum. Mauris.
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
                    Arcu sit molestie libero suspendisse viverra elit. Lectus libero gravida purus dolor, ornare eu
                    auctor. Et ut massa pulvinar nulla leo tellus eget sed eget. Est a in mauris mi, malesuada sociis
                    ipsum etiam. Natoque enim, diam eget odio.
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
                    Cras imperdiet massa non quisque pharetra ornare augue. Velit sed facilisi elementum, mus
                    pellentesque enim sapien, eget netus. In quisque fames mattis tempus. Maecenas pellentesque cras sem
                    tortor ut volutpat. Placerat varius tincidunt dui suscipit. Sed habitasse mauris mauris ornare
                    accumsan, ac id massa non. Adipiscing diam consequat, diam amet porttitor nunc ultrices morbi
                    tristique. Semper eget sollicitudin sit eget sollicitudin non donec feugiat.
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
