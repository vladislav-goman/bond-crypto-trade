/* eslint-disable */
import React from 'react';
import Lottie from 'react-lottie';
import { useInView } from 'react-intersection-observer';
import cx from 'classnames';

export const Animation: React.FC<{
  animationData: any;
  className?: string;
}> = ({ animationData, className }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className={cx(className)} ref={ref}>
      <Lottie
        options={defaultOptions}
        isStopped={!inView}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};
