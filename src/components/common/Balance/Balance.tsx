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
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { start } = useCountUp({
    ref: countUpRef,
    end: balance,
    separator: ' ',
    duration: 2,
  });

  useEffect(() => {
    if (inView) {
      start();
    }
  }, [inView, start]);

  return (
    <div ref={ref} className={cx(classes.balance, className)}>
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
