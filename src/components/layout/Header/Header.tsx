import React, { useEffect, useState, useCallback, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import cx from 'classnames';
import classes from './Header.module.scss';
import { HamburgerMenu } from '../../common/HamburgerMenu';
import { Button } from '../../common/Button';

export const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const bodyRef = useRef<HTMLElement>();
  const onClickHandler = () => {
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
    <header className={cx(classes.header, { [classes.active]: isActive }, 'animate__animated', 'animate__fadeIn')}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={classes.inner}>
              <div className={classes.logo__container}>
                <h3 className={classes.label}>BondCryptoTrade</h3>
              </div>

              <nav className={classes.nav}>
                <AnchorLink offset="AnchorLink50" href="#about" className={classes.link}>
                  Основатель
                </AnchorLink>
                <AnchorLink offset="50" href="#rates-section" className={classes.link}>
                  Тарифы
                </AnchorLink>
                <AnchorLink offset="50" href="#community-section" className={classes.link}>
                  Комьюнити
                </AnchorLink>
                <AnchorLink offset="50" href="#contact" className={classes.link}>
                  Отзывы
                </AnchorLink>
                <AnchorLink offset="50" href="#faq" className={classes.link}>
                  Команда
                </AnchorLink>
                <AnchorLink offset="50" href="#demo" className={classes.link}>
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
                  <AnchorLink offset="30" href="#about" className={classes.link} onClick={onLinkClickHandler}>
                    Основатель
                  </AnchorLink>
                  <AnchorLink offset="30" href="#rates-section" className={classes.link} onClick={onLinkClickHandler}>
                    Тарифы
                  </AnchorLink>
                  <AnchorLink
                    offset="30"
                    href="#community-section"
                    className={classes.link}
                    onClick={onLinkClickHandler}
                  >
                    Комьюнити
                  </AnchorLink>
                  <AnchorLink offset="30" href="#gallery" className={classes.link} onClick={onLinkClickHandler}>
                    Отзывы
                  </AnchorLink>
                  <AnchorLink offset="30" href="#contact" className={classes.link} onClick={onLinkClickHandler}>
                    Команда
                  </AnchorLink>
                  <AnchorLink offset="30" href="#demo" className={classes.link} onClick={onLinkClickHandler}>
                    Демо
                  </AnchorLink>
                  <AnchorLink offset="30" href="tel:+18184046994">
                    <Button title="Записаться" className={classes.link} />
                  </AnchorLink>
                </div>
              </nav>

              <HamburgerMenu onClick={onClickHandler} isOpen={showMobileMenu} className={classes.hamburger} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
