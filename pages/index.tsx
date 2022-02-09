import type { NextPage } from 'next';
import { Header } from '../src/components/layout/Header';
import { Welcome } from '../src/components/section/Welcome';
import { StatsSection } from '../src/components/section/StatsSection';
import { TradingCards } from '../src/components/section/TradingCards';
import { RatesSection } from '../src/components/section/RatesSection';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <Header />
        <Welcome />
        <StatsSection />
        <TradingCards />
        <RatesSection />
      </main>
    </>
  );
};

export default Home;
