/* eslint-disable */
import React from 'react';
import { useInView } from 'react-intersection-observer';
import cx from 'classnames';

export const Animation: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div
      ref={ref}
      className={cx('animate__animated', { [className]: inView })}
      style={{ opacity: 0, height: '100%' }}
    >
      {children}
    </div>
  );
};
