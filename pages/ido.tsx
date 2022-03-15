import type { NextPage } from 'next';
import { Header } from '../src/components/layout/Header';
import { Footer } from '../src/components/layout/Footer';
import { IDOWelcome } from '../src/components/section/IDOWelcome';
import { IDOProgram } from '../src/components/section/IDOProgram';
import { Audience } from '../src/components/section/Audience';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <IDOWelcome />
        <Audience />
        <IDOProgram />
      </main>
      <Footer />
    </>
  );
};

export default Home;
