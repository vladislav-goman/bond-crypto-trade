import type { NextPage } from 'next';
import { Header } from '../src/components/layout/Header';
import { Footer } from '../src/components/layout/Footer';
import { Welcome } from '../src/components/section/Welcome';
import { StatsSection } from '../src/components/section/StatsSection';
import { TradingCards } from '../src/components/section/TradingCards';
import { RatesSection } from '../src/components/section/RatesSection';
import { CommunitySection } from '../src/components/section/CommunitySection';
import { FundSection } from '../src/components/section/FundSection';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <StatsSection />
        <TradingCards />
        <RatesSection />
        <CommunitySection />
        <FundSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
