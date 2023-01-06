import Head from 'next/head';
import { Nav, Workspace } from './components/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dummy App</title>
      </Head>
      <main>
        <div className='flex'>
          <Nav />
          <Workspace />
        </div>
      </main>
    </>
  );
}
