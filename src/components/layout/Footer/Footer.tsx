import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import cx from 'classnames';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import classes from './Footer.module.scss';
import { Telegram, Youtube, Instagram } from '../../icons';

export const Footer: React.FC<{ dark?: boolean; navData: { href: string; title: string }[] }> = ({
  dark = false,
  navData = [],
}) => {
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
                  {navData.map(({ href, title }) =>
                    !href.includes('/') ? (
                      <AnchorLink key={title} offset="57.6" href={`#${href}`} className={classes.link__item}>
                        {title}
                      </AnchorLink>
                    ) : (
                      <a key={href} href={href} className={classes.link__item}>
                        {title}
                      </a>
                    )
                  )}
                </div>
                <div className={classes.social}>
                  <a
                    className={classes.social__icon}
                    href="https://t.me/bondcryptotrade"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Telegram />
                  </a>
                  <a
                    className={classes.social__icon}
                    href="https://youtube.com/c/BondCryptoTrade"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Youtube />
                  </a>
                  <a
                    className={classes.social__icon}
                    href="https://instagram.com/ignatbond?utm_medium=bondcryptotrade.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram />
                  </a>
                </div>
              </nav>
              <div className={classes.copyright__container}>
                <h4 className={classes.copyright}>?? 2022 BondCryptoTrading. All rights reserved.</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
