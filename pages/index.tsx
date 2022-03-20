import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../src/components/layout/Header';
import { FooterWithDemo } from '../src/components/layout/Footer';
import { Welcome } from '../src/components/section/Welcome';
import { StatsSection } from '../src/components/section/StatsSection';
import { TradingCards } from '../src/components/section/TradingCards';
import { Founder } from '../src/components/section/Founder';
import { RatesSection } from '../src/components/section/RatesSection';
import { CommunitySection } from '../src/components/section/CommunitySection';
import { FundSection } from '../src/components/section/FundSection';
import { IDOSection } from '../src/components/section/IDOSection';
import { CommentSection } from '../src/components/section/CommentSection';
import { TeamSection } from '../src/components/section/TeamSection';

import { indexNavData } from '../src/constants/navigation';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Обучение Трейдингу Криптовалют | Академия Трейдинга - Bond Crypto Trade</title>

        <meta
          name="keywords"
          content="криптовалюта, крипта, трейдинг, трейдер, инвестиции, биткоин, блокчейн, токен, биржа криптовалют, торговля на бирже, обучение трейдингу, курс по трейдингу, bitcoin, binance, blockchain, cryptocurrency, trading, investment"
        />

        <meta
          name="description"
          content="Онлайн-курс по трейдингу криптовалют от опытных трейдеров. В курс входят 12 видеоуроков с последующей практикой на реальных примерах. Более 400 довольных учеников и тренеров с общим капиталом 25+млн $. Возможность в дальнейшем стать частью команды. Выбирай подходящий тариф и начинай зарабатывать!"
        />
      </Head>
      <Header navData={indexNavData} />
      <main>
        <Welcome />
        <StatsSection />
        <TradingCards />
        <Founder />
        <RatesSection />
        <CommunitySection />
        <FundSection />
        <IDOSection />
        <CommentSection />
        <TeamSection />
      </main>
      <FooterWithDemo navData={indexNavData} />
    </>
  );
};

export default Home;
