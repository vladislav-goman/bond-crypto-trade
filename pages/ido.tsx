import type { NextPage } from 'next';
import { Header } from '../src/components/layout/Header';
import { Footer } from '../src/components/layout/Footer';
import { IDOProgram } from '../src/components/section/IDOProgram';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <IDOProgram />
      </main>
      <Footer />
    </>
  );
};

export default Home;
