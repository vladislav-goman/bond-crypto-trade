import type { NextPage } from 'next';
import { StatsSection } from '../src/components/section/StatsSection';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <StatsSection />
      </main>
    </>
  );
};

export default Home;
