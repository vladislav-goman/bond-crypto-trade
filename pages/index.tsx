import type { NextPage } from 'next';
import { Welcome } from '../src/components/section/Welcome';
import { StatsSection } from '../src/components/section/StatsSection';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <Welcome />
        <StatsSection />
      </main>
    </>
  );
};

export default Home;
