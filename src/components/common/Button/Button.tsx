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
  href?: string;
}

export class Button extends React.PureComponent<ButtonProps> {
  render() {
    const { title, type = ButtonType.primary, id, className, onClick, isLink, href } = this.props;
    const HtmlTag: React.FC<any> = isLink ? (props) => <a {...props} /> : (props) => <button {...props} />;
    return (
      <HtmlTag
        id={id || title}
        onClick={onClick}
        href={href}
        className={cx(classes.button, { [classes.secondary]: type === ButtonType.secondary }, className)}
      >
        {title}
      </HtmlTag>
    );
  }
}
