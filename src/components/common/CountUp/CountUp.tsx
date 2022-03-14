import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useCountUp } from 'react-countup';

export const CountUp: React.FC<{
  end: number;
  className?: string;
  duration: number;
  separator: string;
  prefix?: string;
  suffix?: string;
}> = ({ end, duration, separator = '', prefix = '', suffix = '', className = '' }) => {
  const countUpRef = React.useRef(null);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { start } = useCountUp({
    ref: countUpRef,
    end,
    separator,
    duration,
    prefix,
    suffix,
  });

  useEffect(() => {
    if (inView) {
      start();
    }
  }, [inView, start]);

  return (
    <span ref={ref} className={className}>
      <span ref={countUpRef} />
    </span>
  );
};
