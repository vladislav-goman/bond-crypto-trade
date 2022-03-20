import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import cx from 'classnames';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import classes from './Footer.module.scss';
import { Telegram, Youtube, Instagram } from '../../icons';

export const Footer: React.FC<{ dark?: boolean }> = ({ dark = false }) => {
  return (
    <footer className={cx(classes.footer, { [classes.dark]: dark })} id="footer">
      <Container>
        <Row>
          <Col md={12}>
            <div className={classes.inner}>
              <nav className={classes.nav}>
                <Link href="/" passHref>
                  <a className={classes.logo}>BondCryptoTrade</a>
                </Link>
                <div className={classes.link}>
                  <AnchorLink offset="AnchorLink50" href="#founder-section-id" className={classes.link__item}>
                    Основатель
                  </AnchorLink>
                  <AnchorLink offset="50" href="#rates-section" className={classes.link__item}>
                    Тарифы
                  </AnchorLink>
                  <AnchorLink offset="50" href="#community-section" className={classes.link__item}>
                    Комьюнити
                  </AnchorLink>
                  <AnchorLink offset="50" href="#comment-section" className={classes.link__item}>
                    Отзывы
                  </AnchorLink>
                  <AnchorLink offset="50" href="#team-section" className={classes.link__item}>
                    Команда
                  </AnchorLink>
                  <AnchorLink offset="50" href="#demo" className={classes.link__item}>
                    Демо
                  </AnchorLink>
                </div>
                <div className={classes.social}>
                  <a className={classes.social__icon} href="https://telegram.com" target="_blank" rel="noreferrer">
                    <Telegram />
                  </a>
                  <a className={classes.social__icon} href="https://youtube.com" target="_blank" rel="noreferrer">
                    <Youtube />
                  </a>
                  <a className={classes.social__icon} href="https://instagram.com" target="_blank" rel="noreferrer">
                    <Instagram />
                  </a>
                </div>
              </nav>
              <div className={classes.copyright__container}>
                <h4 className={classes.copyright}>© 2022 BondCryptoTrading. All rights reserved.</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
