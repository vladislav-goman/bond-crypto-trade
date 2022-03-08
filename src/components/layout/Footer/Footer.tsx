import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import classes from './Footer.module.scss';
import TelegramIcon from '../../../images/telegram.svg';
import YoutubeIcon from '../../../images/youtube.svg';
import InstagramIcon from '../../../images/instagram.svg';
import StarIcon from '../../../images/white-star.svg';

export const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <Container className={classes.demo}>
        <Row>
          <Col xl={{ span: 5, offset: 1 }}>
            <h2 className={classes.header}>Получите демо материал</h2>
            <p className={classes.description}>Заполните форму и получите нашу вводную лекцию совершенно бесплатно.</p>
          </Col>
        </Row>
        <Row>
          <Col xl={{ span: 5, offset: 1 }}>
            <div className={classes.grid}>
              <div className={classes.item}>
                <div className={classes.top}>
                  <div className={classes.imageWrapper}>
                    <Image src={StarIcon} alt="Star Icon" />
                  </div>
                </div>
                <div className={classes.bottom}>
                  <h3 className={classes.label}>Краткий справочник терминов</h3>
                </div>
              </div>
              <div className={classes.item}>
                <div className={classes.top}>
                  <div className={classes.imageWrapper}>
                    <Image src={StarIcon} alt="Star Icon" />
                  </div>
                </div>
                <div className={classes.bottom}>
                  <h3 className={classes.label}>Информация о риск менеджменте и диверсификации активов</h3>
                </div>
              </div>
              <div className={classes.item}>
                <div className={classes.top}>
                  <div className={classes.imageWrapper}>
                    <Image src={StarIcon} alt="Star Icon" />
                  </div>
                </div>
                <div className={classes.bottom}>
                  <h3 className={classes.label}>Виды торговли</h3>
                </div>
              </div>
              <div className={classes.item}>
                <div className={classes.top}>
                  <div className={classes.imageWrapper}>
                    <Image src={StarIcon} alt="Star Icon" />
                  </div>
                </div>
                <div className={classes.bottom}>
                  <h3 className={classes.label}>Наш список полезной литературы</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={{ span: 4, offset: 1 }}>
            <form className={classes.form}>
              <div className={classes.input__group}>
                <label className={classes.input__label} htmlFor="name">
                  Ваше Имя
                </label>
                <input className={classes.input} id="name" placeholder="Александр Сергеев"></input>
              </div>
              <div className={classes.input__group}>
                <label className={classes.input__label} htmlFor="name">
                  Email
                </label>
                <input className={classes.input} type="email" id="name" placeholder="example@mail.com"></input>
              </div>
              <div className={classes.input__group}>
                <label className={classes.input__label} htmlFor="name">
                  Телефон
                </label>
                <input className={classes.input} type="tel" id="name" placeholder="+375 44 999 99 99"></input>
              </div>
              <input className={classes.submit} type="submit" value="Отправить" />
            </form>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={12}>
            <div className={classes.inner}>
              <nav className={classes.nav}>
                <div className={classes.group}>
                  <h2 className={classes.logo}>BondCryptoTrade</h2>
                  <div className={classes.link}>
                    <AnchorLink offset="AnchorLink50" href="#about" className={classes.link__item}>
                      Основатель
                    </AnchorLink>
                    <AnchorLink offset="50" href="#rates-section" className={classes.link__item}>
                      Тарифы
                    </AnchorLink>
                    <AnchorLink offset="50" href="#community-section" className={classes.link__item}>
                      Комьюнити
                    </AnchorLink>
                    <AnchorLink offset="50" href="#contact" className={classes.link__item}>
                      Отзывы
                    </AnchorLink>
                    <AnchorLink offset="50" href="#faq" className={classes.link__item}>
                      Команда
                    </AnchorLink>
                    <AnchorLink offset="50" href="#faq" className={classes.link__item}>
                      Демо
                    </AnchorLink>
                  </div>
                </div>
                <div className={classes.social}>
                  <a className={classes.social__icon} href="https://telegram.com" target="_blank" rel="noreferrer">
                    <Image src={TelegramIcon} alt="Telegram link" />
                  </a>
                  <a className={classes.social__icon} href="https://youtube.com" target="_blank" rel="noreferrer">
                    <Image src={YoutubeIcon} alt="Youtube link" />
                  </a>
                  <a className={classes.social__icon} href="https://instagram.com" target="_blank" rel="noreferrer">
                    <Image src={InstagramIcon} alt="Instagram link" />
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
