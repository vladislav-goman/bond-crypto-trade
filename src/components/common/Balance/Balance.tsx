import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useCountUp } from 'react-countup';
import cx from 'classnames';
import classes from './Balance.module.scss';
import triangleUp from '../../../images/triangle-up.svg';

export const Balance: React.FC<{ balance: number; withUp?: boolean; className?: string }> = ({
  balance,
  withUp = false,
  className,
}) => {
  const countUpRef = React.useRef(null);
  useCountUp({
    ref: countUpRef,
    start: balance,
    end: balance,
    separator: ' ',
    duration: 2,
  });

  return (
    <div className={cx(classes.balance, className)}>
      <div className={classes.label}>Ваш баланс:</div>
      <div className={classes.divider} />
      <div className={classes.sum}>
        &#36;
        <div ref={countUpRef} />
        {withUp && (
          <span className={classes.indicatorContainer}>
            <Image src={triangleUp} alt={'Dynamic growth indicator'} />
          </span>
        )}
      </div>
    </div>
  );
};
