/* eslint-disable */
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import CountUp from 'react-countup';
import classes from './Balance.module.scss';
import triangleUp from '../../../images/triangle-up.svg';

export const Balance: React.FC<{ balance: number; withUp?: boolean }> = ({
  balance,
  withUp = false,
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} className={classes.balance}>
      <div className={classes.label}>Ваш баланс:</div>
      <div className={classes.divider}></div>
      <div className={classes.sum}>
        &#36;{inView && <CountUp duration={2} separator=" " end={balance} />}
        {withUp && (
          <span className={classes.indicatorContainer}>
            <Image src={triangleUp} alt={'Dynamic growth indicator'} />
          </span>
        )}
      </div>
    </div>
  );
};
