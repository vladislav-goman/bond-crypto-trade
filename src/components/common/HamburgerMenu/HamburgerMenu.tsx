import React, { useState } from 'react';
import cx from 'classnames';
import classes from './HamburgerMenu.module.scss';

export const HamburgerMenu: React.FC<{
  onClick: () => void;
  className?: string;
  isOpen?: boolean;
}> = ({ onClick, className, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className={cx(classes.hamburgerMenu, className, {
        [classes.open]: isOpen,
      })}
    >
      <div className={classes.leftTop}></div>
      <div className={classes.rightTop}></div>
      <div className={classes.leftMedium}></div>
      <div className={classes.rightMedium}></div>
      <div className={classes.leftBottom}></div>
      <div className={classes.rightBottom}></div>
    </button>
  );
};
