import React from 'react';
import { Pagination, A11y, EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import classes from './TradingCardsCarousel.module.scss';

const Highlight: React.FC = ({ children }) => (
  <span className={classes.highlight}>{children}</span>
);

const PaginationEl: React.FC = ({ children }) => (
  <nav className={classes.pagination}>{children}</nav>
);

export const TradingCardsCarousel: React.FC = () => {
  return (
    <Swiper
      effect={'cards'}
      modules={[Pagination, A11y, EffectCards]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true,
        el: `.${classes.pagination}`,
        bulletClass: classes.bullet,
        bulletActiveClass: classes.active,
      }}
      className={classes.container}
    >
      <SwiperSlide className={classes.slide}>
        <article className={classes.card}>
          <PaginationEl />
          <h3 className={classes.title}>
            1. Быть <Highlight>ответственным</Highlight> и постоянно{' '}
            <Highlight>учиться.</Highlight>
          </h3>
        </article>
      </SwiperSlide>
      <SwiperSlide className={classes.slide}>
        <article className={classes.card}>
          <PaginationEl />
          <h3 className={classes.title}>
            2. <Highlight>Делиться</Highlight> опытом,{' '}
            <Highlight>учиться</Highlight> на ошибках окружающих
          </h3>
        </article>
      </SwiperSlide>
      <SwiperSlide className={classes.slide}>
        <article className={classes.card}>
          <PaginationEl />
          <h3 className={classes.title}>
            3. Быть <Highlight>ответственным</Highlight> и постоянно{' '}
            <Highlight>учиться.</Highlight>
          </h3>
        </article>
      </SwiperSlide>
      <SwiperSlide className={classes.slide}>
        <article className={classes.card}>
          <PaginationEl />
          <h3 className={classes.title}>
            4. Быть <Highlight>ответственным</Highlight> и постоянно{' '}
            <Highlight>учиться.</Highlight>
          </h3>
        </article>
      </SwiperSlide>
      <SwiperSlide className={classes.slide}>
        <article className={classes.card}>
          <PaginationEl />
          <h3 className={classes.title}>
            5. Быть <Highlight>ответственным</Highlight> и постоянно{' '}
            <Highlight>учиться.</Highlight>
          </h3>
        </article>
      </SwiperSlide>
      <SwiperSlide className={classes.slide}>
        <article className={classes.card}>
          <PaginationEl />
          <h3 className={classes.title}>
            6. Быть <Highlight>ответственным</Highlight> и постоянно{' '}
            <Highlight>учиться.</Highlight>
          </h3>
        </article>
      </SwiperSlide>
    </Swiper>
  );
};