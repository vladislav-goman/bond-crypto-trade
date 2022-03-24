import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { VideoSection } from '../VideoSection';
import classes from './Demo.module.scss';
import StarIcon from '../../../images/white-star.svg';

export const Demo: React.FC = () => {
  const submitHandler = (e: any) => {
    e.preventDefault();
    const filename = 'BondCryptoTrade.pdf';
    const element = document.createElement('a');
    element.setAttribute('href', '/' + filename);
    element.setAttribute('target', '_blank');
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    const name = document.querySelector('#name')! as HTMLInputElement;
    const email = document.querySelector('#email')! as HTMLInputElement;
    const tel = document.querySelector('#tel')! as HTMLInputElement;

    name.value = '';
    email.value = '';
    tel.value = '';
  };

  return (
    <Container id="demo" className={classes.demo}>
      <VideoSection />
      <Row>
        <Col xl={{ span: 10, offset: 1 }}>
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
                <h3 className={classes.label}>Информация о диверсификации активов</h3>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.top}>
                <div className={classes.imageWrapper}>
                  <Image src={StarIcon} alt="Star Icon" />
                </div>
              </div>
              <div className={classes.bottom}>
                <h3 className={classes.label}>Виды и типы торговли</h3>
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
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.input__group}>
              <label className={classes.input__label} htmlFor="name">
                Ваше Имя
              </label>
              <input className={classes.input} id="name" placeholder="Александр Сергеев" required></input>
            </div>
            <div className={classes.input__group}>
              <label className={classes.input__label} htmlFor="email">
                Email
              </label>
              <input className={classes.input} type="email" id="email" placeholder="example@mail.com" required></input>
            </div>
            <div className={classes.input__group}>
              <label className={classes.input__label} htmlFor="tel">
                Телефон
              </label>
              <input className={classes.input} type="tel" id="tel" placeholder="+375 44 999 99 99"></input>
            </div>
            <input className={classes.submit} type="submit" value="Получить" />
          </form>
        </Col>
      </Row>
    </Container>
  );
};
