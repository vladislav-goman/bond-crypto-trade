export const LEARNING_PLANS = {
  invest: {
    name: 'Инвест',
    crypto: {
      link: 'https://www.coinpayments.net/index.php?cmd=_pay&reset=1&merchant=323eea9732086a832900def40f3296c9&item_name=BCT+INVEST&currency=USDT.TRC20&amountf=249.00000000&quantity=1&allow_quantity=0&want_shipping=0&allow_extra=0&',
      cost: '249',
    },
    card: { link: 'https://buy.stripe.com/4gw6oAdJQd436sg6oE', cost: '€249' },
  },
  trading: {
    name: 'Трейдинг',
    crypto: {
      link: 'https://www.coinpayments.net/index.php?cmd=_pay&reset=1&merchant=323eea9732086a832900def40f3296c9&item_name=BCT+TRADING&currency=USDT.TRC20&amountf=599.00000000&quantity=1&allow_quantity=0&want_shipping=0&allow_extra=0&',
      cost: '599',
    },
    card: { link: 'https://buy.stripe.com/3cs00c5dkbZZ9EsfZf', cost: '€599' },
  },
  personal: {
    name: 'Персональное',
    crypto: {
      link: 'https://www.coinpayments.net/index.php?cmd=_pay&reset=1&merchant=323eea9732086a832900def40f3296c9&item_name=BCT+INDIVIDUAL&currency=USDT.TRC20&amountf=2499.00000000&quantity=1&allow_quantity=0&want_shipping=0&allow_extra=0&',
      cost: '2449',
    },
    card: { link: 'https://buy.stripe.com/5kA5kwbBI3tt4k86oG', cost: '€2999' },
  },
};
