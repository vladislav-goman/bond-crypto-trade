import React, { useRef, useState } from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from '../../src/components/layout/Header';
import { Footer } from '../../src/components/layout/Footer';
import { Crypto, Card } from '../../src/components/icons';
import cx from 'classnames';

import classes from './Plan.module.scss';

import { checkoutNavData } from '../../src/constants/navigation';
import { LEARNING_PLANS } from '../../src/constants/plans';

const Checkout: NextPage<{ plan: keyof typeof LEARNING_PLANS }> = ({ plan }) => {
  const { name, crypto, card } = LEARNING_PLANS[plan];

  const [paymentLink, setPaymentLink] = useState<string>('');

  const emailInput = useRef<HTMLInputElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const telInput = useRef<HTMLInputElement>(null);
  const cryptoInput = useRef<HTMLInputElement>(null);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/api/getCheckoutLink', {
      method: 'POST',
      body: JSON.stringify({
        email: emailInput?.current?.value,
        name: nameInput?.current?.value,
        telegram: telInput?.current?.value,
        isCrypto: cryptoInput?.current?.checked,
        plan,
      }),
    });

    const data = await response.json();

    setPaymentLink(data.link);

    if (emailInput.current) {
      emailInput.current.value = '';
    }
    if (nameInput.current) {
      nameInput.current.value = '';
    }
    if (telInput.current) {
      telInput.current.value = '';
    }
  };

  return (
    <>
      <Head>
        <title>Тариф {name} Записаться на курс | Академия Трейдинга - Bond Crypto Trade</title>

        <meta
          name="keywords"
          content="криптовалюта, крипта, трейдинг, трейдер, инвестиции, биткоин, блокчейн, токен, биржа криптовалют, торговля на бирже, обучение трейдингу, курс по трейдингу, bitcoin, binance, blockchain, cryptocurrency, trading, investment"
        />

        <meta
          name="description"
          content="Онлайн-курс по трейдингу криптовалют от опытных трейдеров. В курс входят 12 видеоуроков с последующей практикой на реальных примерах. Более 400 довольных учеников и тренеров с общим капиталом 25+млн $. Возможность в дальнейшем стать частью команды. Выбирай подходящий тариф и начинай зарабатывать!"
        />
      </Head>
      <Header isSticky={false} navData={checkoutNavData} />
      <main>
        <Container id="checkout" className={classes.checkout}>
          <Row>
            <Col xl={{ span: 8, offset: 2 }}>
              <h2 className={classes.header}>Записаться на курс</h2>
              <h3 className={classes.description}>Вы выбрали тариф “{name}”</h3>
              <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.input__group}>
                  <label className={classes.input__label} htmlFor="name">
                    Ваше Имя
                  </label>
                  <input
                    ref={nameInput}
                    className={classes.input}
                    id="name"
                    placeholder="Александр Сергеев"
                    required
                  ></input>
                </div>
                <div className={classes.input__group}>
                  <label className={classes.input__label} htmlFor="email">
                    Email
                  </label>
                  <input
                    ref={emailInput}
                    className={classes.input}
                    type="email"
                    id="email"
                    placeholder="example@mail.com"
                    required
                  ></input>
                </div>
                <div className={classes.input__group}>
                  <label className={classes.input__label} htmlFor="tel">
                    Ссылка на телеграм
                  </label>
                  <input
                    ref={telInput}
                    className={classes.input}
                    type="text"
                    id="tel"
                    placeholder="@nickname"
                    required
                  ></input>
                </div>
                <div className={classes.input__group}>
                  <label className={classes.input__label} htmlFor="payment">
                    Способ оплаты
                  </label>
                  <div className={classes.payment}>
                    <input
                      ref={cryptoInput}
                      defaultChecked
                      required
                      type="radio"
                      id="crypto"
                      name="payment_method"
                      value="crypto"
                    />
                    <label htmlFor="crypto">
                      <Crypto />
                      Crypto
                    </label>
                    <input required type="radio" id="card" name="payment_method" value="card" />
                    <label htmlFor="card">
                      <Card />
                      Credit card
                    </label>
                  </div>
                </div>
                <div className={classes.container}>
                  <input className={classes.submit} type="submit" value="Получить ссылку на оплату" /> -&gt;{' '}
                  <a
                    className={cx(
                      classes.paymentLink,
                      { [classes.disabled]: !paymentLink },
                      'animate__animated',
                      'animate__fadeIn'
                    )}
                    href={paymentLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Перейти к оплате
                  </a>
                </div>
              </form>
            </Col>
            <Col md={12}></Col>
          </Row>
        </Container>
      </main>
      <Footer navData={checkoutNavData} />
    </>
  );
};

export async function getStaticPaths() {
  const paths = Object.keys(LEARNING_PLANS).map((plan) => ({
    params: { plan },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return { props: { plan: params?.plan } };
};

export default Checkout;
