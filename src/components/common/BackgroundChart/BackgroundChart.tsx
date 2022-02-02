import React, { useRef, useEffect, useState } from 'react';
import classes from './BackgroundChart.module.scss';

const initialHeight = 50;

const renderItems = (n: number) => {
  const result = [];
  let height = initialHeight;
  let hadHat = false;
  let hasHat = false;
  const hatChance = n > 35 ? 0.7 : 0.4;
  for (let i = 0; i < n; i++) {
    result.push(
      <BackgroundChartItem
        height={height}
        hasHat={hasHat}
        key={Math.random()}
      />
    );
    height += Math.floor(Math.random() * 61) - 30;
    hasHat = Math.random() >= hatChance;
    if (hadHat && hasHat) {
      hasHat = false;
      hadHat = false;
    }
    if (hasHat) hadHat = true;
    if (height < 40) height = Math.floor(Math.random() * 31) + 40;
    if (height > 100) height = Math.floor(Math.random() * 31) + 70;
  }
  return result;
};

const BackgroundChartItem: React.FC<{ height: number; hasHat: boolean }> = ({
  height,
  hasHat,
}) => {
  return (
    <div
      className={classes.item}
      style={{
        height: `${height}%`,
      }}
    >
      {hasHat && (
        <div
          className={classes.hat}
          style={{
            animationDuration: `${Math.random() * 5 + 3}s`,
          }}
        ></div>
      )}
    </div>
  );
};

export const BackgroundChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [container, setContainer] = useState(containerRef?.current);
  const itemsAmount = Math.floor((container?.clientWidth || 0) / (8 + 12));

  useEffect(() => {
    setContainer(containerRef?.current);
  }, [containerRef]);

  return (
    <div ref={containerRef} className={classes.backgroundChart}>
      {renderItems(itemsAmount)}
    </div>
  );
};
