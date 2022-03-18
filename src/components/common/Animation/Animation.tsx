/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import cx from 'classnames';
import classes from './Animation.module.scss';

export const Animation: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
}> = ({ children, className = 'animate__fadeInUp', delay = 0 }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cx(
        classes.animation,
        'animate__animated',
        { [className]: inView },
        { [`animate__delay-${delay}s`]: delay }
      )}
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  );
};
