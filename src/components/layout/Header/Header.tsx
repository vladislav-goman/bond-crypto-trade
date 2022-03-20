import React, { useEffect, useState, useCallback, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import cx from 'classnames';
import Link from 'next/link';
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
              <Link href="/" passHref>
                <a className={classes.logo__container}>
                  <h3 className={classes.label}>BondCryptoTrade</h3>
                </a>
              </Link>

              <nav className={classes.nav}>
                <AnchorLink offset="50" href="#founder-section-id" className={classes.link}>
                  Основатель
                </AnchorLink>
                <AnchorLink offset="50" href="#rates-section" className={classes.link}>
                  Тарифы
                </AnchorLink>
                <AnchorLink offset="50" href="#community-section" className={classes.link}>
                  Комьюнити
                </AnchorLink>
                <AnchorLink offset="50" href="#comment-section" className={classes.link}>
                  Отзывы
                </AnchorLink>
                <AnchorLink offset="50" href="#team-section" className={classes.link}>
                  Команда
                </AnchorLink>
                <AnchorLink offset="50" href="#demo" className={classes.link}>
                  Демо
                </AnchorLink>
                <Button title="Записаться" className={cx(classes.apply)} />
              </nav>

              <nav
                className={cx(classes.mobileMenu, {
                  [classes.visible]: showMobileMenu,
                })}
              >
                <div className={classes.mobileNav}>
                  <AnchorLink
                    offset="30"
                    href="#founder-section-id"
                    className={classes.link}
                    onClick={onLinkClickHandler}
                  >
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
                  <AnchorLink offset="30" href="#comment-section" className={classes.link} onClick={onLinkClickHandler}>
                    Отзывы
                  </AnchorLink>
                  <AnchorLink offset="30" href="#team-section" className={classes.link} onClick={onLinkClickHandler}>
                    Команда
                  </AnchorLink>
                  <AnchorLink offset="30" href="#demo" className={classes.link} onClick={onLinkClickHandler}>
                    Демо
                  </AnchorLink>
                  <Button title="Записаться" className={cx(classes.apply, 'mobile-only')} />
                </div>
              </nav>

              <div className={classes.group}>
                <HamburgerMenu onClick={onClickHandler} isOpen={showMobileMenu} className={classes.hamburger} />

                <Button title="Записаться" className={cx(classes.apply, 'tablet-only')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
