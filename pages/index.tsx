import type { NextPage } from 'next';
import { Welcome } from '../src/components/section/Welcome';
import { StatsSection } from '../src/components/section/StatsSection';
import { TradingCards } from '../src/components/section/TradingCards';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <Welcome />
        <StatsSection />
        <TradingCards />
      </main>
    </>
  );
};

export default Home;
