import { useState } from 'react';
import Image from 'next/image';
import Items, { FooterItems } from './items';
import NavItem from './NavItem';
import FooterNav from './FooterNav';

const Nav = () => {
  const [openItemsMore, setOpenItemsMore] = useState<boolean>();

  const handleOpenNav = (item: any) => {
    if (item.more) {
      setOpenItemsMore(!openItemsMore);
    }
  };
  return (
    <div className='w-[22%] border-r border-r-daygray py-10 h-screen px-12 flex flex-col'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Image
            src='/dwight.png'
            alt='Dwight'
            width='30'
            height='30'
            className='object-cover'
          />
          <p className='ml-3 font-medium'>Dwight Shrute</p>
        </div>
        <Image
          src='/svgs/chevron-selector-vertical.svg'
          alt='Dwight'
          width='20'
          height='20'
          className='object-cover'
        />
      </div>
      <ul className='px-4 mt-12 flex flex-col gap-y-9'>
        {Items.map((item) => {
          return (
            <NavItem
              key={item.nav}
              {...item}
              more={item.more}
              openNavFn={handleOpenNav}
              openItemsMore={openItemsMore}
            />
          );
        })}
      </ul>

      <ul className='mt-auto flex flex-col gap-y-6 px-2'>
        {FooterItems.map((footerItem) => {
          return <FooterNav key={footerItem.nav} {...footerItem} />;
        })}
      </ul>
    </div>
  );
};

export default Nav;
