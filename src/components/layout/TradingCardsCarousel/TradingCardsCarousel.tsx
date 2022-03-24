import React from 'react';
import { Pagination, A11y, EffectCards, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import classes from './TradingCardsCarousel.module.scss';
import { Balance } from '../../common/Balance';

const Highlight: React.FC = ({ children }) => <span className={classes.highlight}>{children}</span>;

const PaginationEl: React.FC = ({ children }) => <nav className={classes.pagination}>{children}</nav>;

export const TradingCardsCarousel: React.FC = () => {
  return (
    <Swiper
      effect={'cards'}
      modules={[Pagination, A11y, EffectCards, Autoplay]}
      spaceBetween={50}
      grabCursor
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
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
            1. Полагаться на <Highlight>собственные</Highlight> навыки, знания и <Highlight>анализ</Highlight>.
          </h3>
          <Balance className={classes.balance} balance={500.25} />
        </article>
      </SwiperSlide>
      <SwiperSlide className={classes.slide}>
        <article className={classes.card}>
          <PaginationEl />
          <h3 className={classes.title}>
            2. Соблюдать <Highlight>риск</Highlight>-менеджмент.
          </h3>
          <Balance className={classes.balance} withUp balance={741.94} />
        </article>
      </SwiperSlide>
      <SwiperSlide className={classes.slide}>
        <article className={classes.card}>
          <PaginationEl />
          <h3 className={classes.title}>
            3. <Highlight>Терпеливо</Highlight> относиться к <Highlight>своим</Highlight> сделкам.
          </h3>
          <Balance className={classes.balance} withUp balance={2319.55} />
        </article>
      </SwiperSlide>
      <SwiperSlide className={classes.slide}>
        <article className={classes.card}>
          <PaginationEl />
          <h3 className={classes.title}>
            4. Контролировать <Highlight>эмоции</Highlight> и придерживаться строгих <Highlight>правил.</Highlight>
          </h3>
          <Balance className={classes.balance} withUp balance={5_771.01} />
        </article>
      </SwiperSlide>
    </Swiper>
  );
};
