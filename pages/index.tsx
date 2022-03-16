import type { NextPage } from 'next';
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

const Home: NextPage = () => {
  return (
    <div className="app-wrapper">
      <Header />
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
      </main>
      <FooterWithDemo />
    </div>
  );
};

export default Home;
