import Head from 'next/head';
import { Nav } from './components/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dummy App</title>
      </Head>
      <main>
        <Nav />
      </main>
    </>
  );
}
