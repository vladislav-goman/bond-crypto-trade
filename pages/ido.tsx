import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../src/components/layout/Header';
import { Footer } from '../src/components/layout/Footer';
import { IDOWelcome } from '../src/components/section/IDOWelcome';
import { IDOProgram } from '../src/components/section/IDOProgram';
import { Audience } from '../src/components/section/Audience';

import { IDONavData } from '../src/constants/navigation';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Онлайн-курс об IDO и инвестициях в выгодные проекты | Bond Crypto Trade</title>

        <meta
          name="keywords"
          content="криптовалюта, крипта, трейдинг, трейдер, инвестиции, биткоин, блокчейн, токен, биржа криптовалют, торговля на бирже, обучение ido, курс об ido, онлайн курс ido, ido, bitcoin, binance, blockchain, cryptocurrency, trading, investment"
        />

        <meta
          name="description"
          content="Онлайн-курс об IDO и инвестициях в проекты на ранних стадиях развития. В курс входят 7 лекций которые научат вас правильно анализировать перспективные проекты и успешно инвестировать в них. Онлайн-поддержка 24/7 до и после курса, а также доступ в большое комьюнити, в котором вы найдете много полезной и актуальной информации."
        />
      </Head>
      <Header navData={IDONavData} />
      <main>
        <IDOWelcome />
        <Audience />
        <IDOProgram />
      </main>
      <Footer navData={IDONavData} />
    </>
  );
};

export default Home;
