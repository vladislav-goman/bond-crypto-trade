import React, { useEffect, useState, useCallback, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import cx from 'classnames';
import Link from 'next/link';
import classes from './Header.module.scss';
import { HamburgerMenu } from '../../common/HamburgerMenu';
import { Button } from '../../common/Button';

export const Header: React.FC<{ navData: { href: string; title: string }[]; isSticky?: boolean }> = ({
  navData = [],
  isSticky = true,
}) => {
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
    if (isSticky) {
      bodyRef.current = document.querySelector('body')!;
      tweakHeader();
      document.addEventListener('scroll', tweakHeader);
    }

    return () => document.removeEventListener('scroll', tweakHeader);
  }, [tweakHeader, isSticky]);

  return (
    <header
      className={cx(
        classes.header,
        { [classes.active]: isActive },
        { [classes.static]: !isSticky },
        'animate__animated',
        'animate__fadeIn'
      )}
    >
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
                {navData.map(({ href, title }) =>
                  !href.includes('/') ? (
                    <AnchorLink key={title} offset="57.6" href={`#${href}`} className={classes.link}>
                      {title}
                    </AnchorLink>
                  ) : (
                    <Link key={href} href={href}>
                      <a className={classes.link}>{title}</a>
                    </Link>
                  )
                )}
                <Button title="Записаться" className={cx(classes.apply)} />
              </nav>

              <nav
                className={cx(classes.mobileMenu, {
                  [classes.visible]: showMobileMenu,
                })}
              >
                <div className={classes.mobileNav}>
                  {navData.map(({ href, title }) =>
                    !href.includes('/') ? (
                      <AnchorLink
                        key={title}
                        offset="49.6"
                        href={`#${href}`}
                        className={classes.link}
                        onClick={onLinkClickHandler}
                      >
                        {title}
                      </AnchorLink>
                    ) : (
                      <Link key={href} href={href}>
                        <a className={classes.link}>{title}</a>
                      </Link>
                    )
                  )}
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
