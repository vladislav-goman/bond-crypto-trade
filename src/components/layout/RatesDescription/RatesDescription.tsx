import React from 'react';
import classes from './RatesDescription.module.scss';
import Image from 'next/image';
import handWithCoin from '../../../images/hand-with-coin.png';
import { Button, ButtonType } from '../../common/Button';

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
      <div className={classes.imageContainer}>
        <Image
          quality={100}
          layout="responsive"
          className={classes.image}
          alt="Decorative image of a hand holding a coin"
          src={handWithCoin}
        />
      </div>
      <div className={classes.mask}>
        <h4 className={classes.label}>Нужна помощь с выбором тарифа?</h4>
        <Button
          className={classes.button}
          title="Напишите нам!"
          type={ButtonType.secondary}
        />
      </div>
    </article>
  );
};
