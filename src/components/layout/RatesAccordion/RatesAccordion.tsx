import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import cx from 'classnames';
import Image from 'next/image';
import classes from './RatesAccordion.module.scss';
import { Badge } from '../../common/Badge';
import { Button, ButtonType } from '../../common/Button';
import { Invest, Personal, Trading } from './components';
import { Animation } from '../../common/Animation';
import card from '../../../images/card.png';
import bitcoin from '../../../images/bitcoin.png';

const PlusSign: React.FC = () => {
  return (
    <div className={classes.plus}>
      <div className={classes.vertical}></div>
      <div className={classes.horizontal}></div>
    </div>
  );
};

const StarMark: React.FC = () => {
  return (
    <div className={cx(classes.starMark, classes.big)}>
      <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.0767 1.21993C13.4183 0.398639 14.5817 0.398636 14.9233 1.21993L17.9975 8.61112C18.1415 8.95735 18.4671 9.19392 18.8409 9.22389L26.8203 9.86359C27.707 9.93468 28.0665 11.0412 27.3909 11.6199L21.3115 16.8276C21.0267 17.0715 20.9023 17.4543 20.9893 17.819L22.8467 25.6056C23.0531 26.4708 22.1118 27.1547 21.3527 26.691L14.5213 22.5184C14.2012 22.3229 13.7988 22.3229 13.4787 22.5184L6.64726 26.691C5.88816 27.1547 4.94691 26.4708 5.1533 25.6056L7.01067 17.819C7.09768 17.4543 6.97331 17.0715 6.68852 16.8276L0.609053 11.6199C-0.0664836 11.0412 0.293041 9.93468 1.17969 9.86359L9.1591 9.22389C9.53289 9.19392 9.8585 8.95735 10.0025 8.61112L13.0767 1.21993Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export const RatesAccordion: React.FC = () => {
  return (
    <article className={classes.ratesAccordion}>
      <Accordion.Root className={classes.root} type="single" defaultValue="item-1" collapsible={true}>
        <Animation className={'animate__fadeInRight'}>
          <Accordion.Item className={classes.item} value="item-1">
            <Accordion.Header>
              <Accordion.Trigger className={classes.trigger}>
                <div className={classes.group}>
                  <h2 className={classes.acc__header}>Инвест</h2>
                  <Badge className={classes.badge}>€249</Badge>
                </div>
                <div className={classes.group}>
                  <Button
                    isLink
                    target="_blank"
                    href="https://buy.stripe.com/4gw6oAdJQd436sg6oE"
                    className={cx(classes.button, classes.card)}
                    type={ButtonType.secondary}
                  >
                    <Image className={classes.cardImage} src={card} alt="Оплата картой" />
                  </Button>

                  <Button
                    isLink
                    target="_blank"
                    href="https://www.coinpayments.net/index.php?cmd=_pay&reset=1&merchant=323eea9732086a832900def40f3296c9&item_name=BCT+INVEST&currency=USDT.TRC20&amountf=249.00000000&quantity=1&allow_quantity=0&want_shipping=0&allow_extra=0&"
                    className={classes.button}
                    type={ButtonType.secondary}
                  >
                    <Image className={classes.cryptoImage} src={bitcoin} alt="Оплата криптовалютой" />
                  </Button>

                  <PlusSign />
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={classes.content}>
              <Invest />
            </Accordion.Content>
          </Accordion.Item>
        </Animation>
        <Animation className={'animate__fadeInRight'}>
          <Accordion.Item className={classes.item} value="item-2">
            <Accordion.Header>
              <Accordion.Trigger className={classes.trigger}>
                <div className={classes.group}>
                  <h2 className={classes.acc__header}>Трейдинг</h2>
                  <Badge className={classes.badge}>€599</Badge>
                </div>
                <div className={classes.group}>
                  <Button
                    isLink
                    target="_blank"
                    href="https://buy.stripe.com/3cs00c5dkbZZ9EsfZf"
                    className={cx(classes.button, classes.card)}
                    type={ButtonType.secondary}
                  >
                    <Image height="32" width="48" src={card} alt="Оплата картой" />
                  </Button>

                  <Button
                    isLink
                    target="_blank"
                    href="https://www.coinpayments.net/index.php?cmd=_pay&reset=1&merchant=323eea9732086a832900def40f3296c9&item_name=BCT+TRADING&currency=USDT.TRC20&amountf=599.00000000&quantity=1&allow_quantity=0&want_shipping=0&allow_extra=0&"
                    className={classes.button}
                    type={ButtonType.secondary}
                  >
                    <Image height="32" width="32" src={bitcoin} alt="Оплата криптовалютой" />
                  </Button>
                  <PlusSign />
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={classes.content}>
              <Trading />
            </Accordion.Content>
          </Accordion.Item>
        </Animation>
        <Animation className={'animate__fadeInRight'}>
          <Accordion.Item className={classes.item} value="item-3">
            <Accordion.Header>
              <Accordion.Trigger className={classes.trigger}>
                <div className={classes.group}>
                  <h2 className={classes.acc__header}>Индивидуальное</h2>
                  <div className={classes.notMobile}>
                    <StarMark />
                  </div>
                  <Badge className={classes.badge}>€2999</Badge>
                </div>
                <div className={classes.group}>
                  <Button
                    isLink
                    target="_blank"
                    href="https://buy.stripe.com/5kA5kwbBI3tt4k86oG"
                    className={cx(classes.button, classes.card)}
                    type={ButtonType.secondary}
                  >
                    <Image height="32" width="48" src={card} alt="Оплата картой" />
                  </Button>

                  <Button
                    isLink
                    target="_blank"
                    href="https://www.coinpayments.net/index.php?cmd=_pay&reset=1&merchant=323eea9732086a832900def40f3296c9&item_name=BCT+INDIVIDUAL&currency=USDT.TRC20&amountf=2499.00000000&quantity=1&allow_quantity=0&want_shipping=0&allow_extra=0&"
                    className={classes.button}
                    type={ButtonType.secondary}
                  >
                    <Image height="32" width="32" src={bitcoin} alt="Оплата криптовалютой" />
                  </Button>
                  <PlusSign />
                </div>
                <div className={cx(classes.group, classes.mobile)}>
                  <h2 className={cx(classes.acc__header, classes.mobile)}>Индивидуальное</h2>
                  <StarMark />
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={classes.content}>
              <Personal />
            </Accordion.Content>
          </Accordion.Item>
        </Animation>
      </Accordion.Root>
    </article>
  );
};
