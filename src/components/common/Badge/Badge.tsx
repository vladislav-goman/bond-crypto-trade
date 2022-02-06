import React from 'react';
import classes from './Badge.module.scss';
import cx from 'classnames';

export const Badge: React.FC<{
  className?: string;
}> = ({ children, className }) => {
  return <span className={cx(classes.badge, className)}>{children}</span>;
};
