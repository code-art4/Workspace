import { useState } from 'react';
import Image from 'next/image';
import Items, { FooterItems } from './items';
import NavItem from './NavItem';
import FooterNav from './FooterNav';
import Button from '../../shared/Button';

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

        <ul className='px-4 mt-12 flex flex-col gap-y-7 xl:gap-y-9'>
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

        <div className='lg:hidden px-4 mt-7 flex flex-col gap-y-3 mb-5'>
          <Button
            name='Invite new user'
            textClassName='!text-balablue'
            className='bg-white shadow'
            leftIcon='/svgs/plus-white.svg'
            leftIconWidth='20'
            leftIconHeight='20'
          />

          <Button
            name='New'
            leftIcon='/svgs/plus.svg'
            leftIconWidth='20'
            leftIconHeight='20'
            className='mr-auto'
            rightIcon='/svgs/chevron-down-white.svg'
            rightIconWidth='20'
            rightIconHeight='20'
          />
        </div>

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
