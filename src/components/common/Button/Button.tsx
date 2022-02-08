import React from 'react';
import classes from './Button.module.scss';
import cx from 'classnames';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
}

interface ButtonProps {
  title: string;
  type?: ButtonType;
  id?: string;
  className?: string;
  onClick?: () => void;
  isLink?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  type = ButtonType.primary,
  id,
  className,
  onClick,
  isLink,
}) => {
  const HtmlTag: React.FC<any> = isLink
    ? (props) => <a {...props} />
    : (props) => <button {...props} />;
  return (
    <HtmlTag
      id={id || title}
      onClick={onClick}
      className={cx(
        classes.button,
        { [classes.secondary]: type === ButtonType.secondary },
        className
      )}
    >
      {title}
    </HtmlTag>
  );
};
