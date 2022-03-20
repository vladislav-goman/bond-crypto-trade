import type { NextPage } from 'next';
import { Header } from '../src/components/layout/Header';
import { Footer } from '../src/components/layout/Footer';
import { IDOWelcome } from '../src/components/section/IDOWelcome';
import { IDOProgram } from '../src/components/section/IDOProgram';
import { Audience } from '../src/components/section/Audience';

import { IDONavData } from '../src/constants/navigation';

const Home: NextPage = () => {
  return (
    <>
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
