import React from 'react';
import classes from './RatesDescription.module.scss';

export const RatesDescription: React.FC = () => {
  return (
    <article className={classes.ratesDescription}>
      <h2 className={classes.title}>Тарифы</h2>
      <p className={classes.description}>
        Каждый разработанный нами тариф является уникальной системой получения
        знаний.
      </p>
      <p className={classes.description}>Есть 2 варианта развития событий:</p>
      <ol className={classes.list}>
        <li className={classes.item}>
          Самостоятельно образовываться, набирать опыт путём личных проб и
          ошибок
        </li>
        <li className={classes.item}>
          Обучаться с помощью ментора. Учиться на чужих ошибках. Вся стратегия и
          знания проверены временем
        </li>
      </ol>
    </article>
  );
};
