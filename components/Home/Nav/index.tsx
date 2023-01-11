import { useState } from 'react';
import Image from 'next/image';
import Items, { FooterItems } from './items';
import NavItem from './NavItem';
import FooterNav from './FooterNav';

const Nav = ({
  handleChangeAction,
  action,
  openNav,
  closeNavFn,
}: {
  handleChangeAction: (item: any) => void;
  action: { link: string; nav: string };
  openNav: boolean;
  closeNavFn: () => void;
}) => {
  const [openItemsMore, setOpenItemsMore] = useState<boolean>();

  const handleOpenNav = (item: any) => {
    if (item.more) {
      setOpenItemsMore(!openItemsMore);
    }
  };
  return (
    <>
      {openNav ? (
        <div
          className='bg-black/70 w-screen h-screen z-[7] fixed'
          onClick={closeNavFn}
        ></div>
      ) : null}
      <div
        className={`${
          openNav
            ? 'fixed bg-white z-[10] lg:relative'
            : 'translate-x-[-120%] fixed lg:translate-x-0'
        }
      lg:w-[28%] xl:w-[23%] 2xl:w-[20%] border-r border-r-daygray py-10 h-screen px-8 flex flex-col lg:flex lg:flex-col lg:fixed ease-in duration-300 transition-all`}
      >
        {/* <div className='ml-auto mb-3 lg:hidden' onClick={closeNavFn}>
          <Image
            src='/svgs/cancel.svg'
            alt='Dwight'
            width='11'
            height='11'
            className='object-cover'
          />
        </div> */}
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

        <ul className='px-4 mt-12 flex flex-col gap-y-7 xl:gap-y-9 mb-5'>
          {Items.map((item) => {
            return (
              <NavItem
                key={item.nav}
                {...item}
                action={action}
                more={item.more}
                openNavFn={handleOpenNav}
                openItemsMore={openItemsMore}
                handleChangeAction={handleChangeAction}
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
    </>
  );
};

export default Nav;
