import React from 'react';
import classes from './Button.module.scss';
import cx from 'classnames';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
}

export const Button: React.FC<{
  title: string;
  type?: ButtonType;
  id?: string;
  className?: string;
  onClick?: () => void;
}> = ({ title, type = ButtonType.primary, id, className, onClick }) => {
  return (
    <button
      id={id || title}
      onClick={onClick}
      className={cx(
        classes.button,
        { [classes.secondary]: type === ButtonType.secondary },
        className
      )}
    >
      {title}
    </button>
  );
};
