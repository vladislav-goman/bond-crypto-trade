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
      <div className={cx(classes.top)}></div>
      <div className={cx(classes.medium)}></div>
      <div className={cx(classes.bottom)}></div>
    </button>
  );
};
