import Head from 'next/head';
import { useState } from 'react';
import { Nav, Workspace } from '../components/Home';

export default function Home() {
  const [action, setAction] = useState({ link: '/', nav: 'Drafts' });
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <Head>
        <title>Dummy App</title>
      </Head>
      <main className='mx-auto'>
        <div className='flex'>
          <Nav
            handleChangeAction={(each) => setAction(each)}
            action={action}
            openNav={openNav}
            closeNavFn={() => setOpenNav(false)}
          />
          <Workspace
            action={action}
            openNavFn={() => setOpenNav(true)}            
          />
        </div>
      </main>
    </>
  );
}
