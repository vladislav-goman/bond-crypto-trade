import React, { useEffect, useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import cx from 'classnames';
import classes from './Header.module.scss';
import PhoneIcon from '../../../images/monaco.svg';
import { HamburgerMenu } from '../../common/HamburgerMenu';
import { Button } from '../../common/Button';

export const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const bodyRef = useRef<HTMLElement>();
  const onClickHandler = () => {
    console.log(bodyRef.current);
    if (bodyRef.current) {
      bodyRef.current.classList.toggle('menu-visible');
    }
    setShowMobileMenu((showMenu) => !showMenu);
  };
  const onLinkClickHandler = () => {
    if (bodyRef.current) {
      bodyRef.current.classList.remove('menu-visible');
    }
    setShowMobileMenu(false);
  };

  const tweakHeader = useCallback(() => {
    if (window.scrollY >= 20 && !isActive) {
      setIsActive(true);
    } else if (window.scrollY < 20 && isActive) {
      setIsActive(false);
    }
  }, [isActive]);

  useEffect(() => {
    bodyRef.current = document.querySelector('body')!;
    tweakHeader();
    document.addEventListener('scroll', tweakHeader);

    return () => document.removeEventListener('scroll', tweakHeader);
  }, [tweakHeader]);

  return (
    <header
      className={cx(
        classes.header,
        { [classes.active]: isActive },
        'animate__animated',
        'animate__fadeIn'
      )}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={classes.inner}>
              <div className={classes.logo__container}>
                <h3 className={classes.label}>BondCryptoTrade</h3>
              </div>

              <nav className={classes.nav}>
                <AnchorLink offset="50" href="#about" className={classes.link}>
                  Основатель
                </AnchorLink>
                <AnchorLink
                  offset="50"
                  href="#rates-section"
                  className={classes.link}
                >
                  Тарифы
                </AnchorLink>
                <AnchorLink
                  offset="50"
                  href="#community-section"
                  className={classes.link}
                >
                  Комьюнити
                </AnchorLink>
                <AnchorLink
                  offset="50"
                  href="#contact"
                  className={classes.link}
                >
                  Отзывы
                </AnchorLink>
                <AnchorLink offset="50" href="#faq" className={classes.link}>
                  Команда
                </AnchorLink>
                <AnchorLink offset="50" href="#faq" className={classes.link}>
                  Демо
                </AnchorLink>
                <AnchorLink offset="50" href="#faq">
                  <Button title="Записаться" className={classes.apply} />
                </AnchorLink>
              </nav>

              <nav
                className={cx(classes.mobileMenu, {
                  [classes.visible]: showMobileMenu,
                })}
              >
                <div className={classes.mobileNav}>
                  <AnchorLink
                    offset="30"
                    href="#about"
                    className={classes.link}
                    onClick={onLinkClickHandler}
                  >
                    About us
                  </AnchorLink>
                  <AnchorLink
                    offset="30"
                    href="#packages"
                    className={classes.link}
                    onClick={onLinkClickHandler}
                  >
                    Picnic packages
                  </AnchorLink>
                  <AnchorLink
                    offset="30"
                    href="#gallery"
                    className={classes.link}
                    onClick={onLinkClickHandler}
                  >
                    Gallery
                  </AnchorLink>
                  <AnchorLink
                    offset="30"
                    href="#contact"
                    className={classes.link}
                    onClick={onLinkClickHandler}
                  >
                    Contact us
                  </AnchorLink>
                  <AnchorLink
                    offset="30"
                    href="#faq"
                    className={classes.link}
                    onClick={onLinkClickHandler}
                  >
                    FAQ
                  </AnchorLink>
                  <AnchorLink offset="30" href="tel:+18184046994">
                    <Button title="Записаться" className={classes.link} />
                  </AnchorLink>
                </div>
              </nav>

              <HamburgerMenu
                onClick={onClickHandler}
                isOpen={showMobileMenu}
                className={classes.hamburger}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
