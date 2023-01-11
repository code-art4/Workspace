import Image from 'next/image';
import Button from '../../shared/Button';

const TopNav = ({ openNavFn }: { openNavFn: () => void }) => {
  return (
    <div className='flex items-center justify-between lg:justify-start py-4 px-5 md:px-10 border-b border-b-daygray mt-2 md:mt-0'>
      <div className='mr-4 sm:mr-6 md:mr-8 lg:hidden' onClick={openNavFn}>
        <Image src='/svgs/menu.svg' alt='menu' width='15' height='15' />
      </div>
      <div className='flex items-center mr-auto'>
        <h3 className='mr-3 font-medium md:text-lg'>My Workspace</h3>
        <Image
          src='/svgs/chevron-down.svg'
          alt='chevron-down'
          width='15'
          height='15'
        />
      </div>

      <div className='flex items-center gap-x-4 sm:gap-x-6 ml-auto lg:hidden'>
        <Image src='/svgs/search.svg' alt='search' width='18' height='18' />
        <Image src='/svgs/bell.svg' alt='notification' width='18' height='18' />
        <Image src='/svgs/help-circle.svg' alt='help' width='18' height='18' />
      </div>

      <div className='lg:flex items-center gap-x-3 hidden'>
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
          rightIcon='/svgs/chevron-down-white.svg'
          rightIconWidth='20'
          rightIconHeight='20'
        />

        <div className='flex items-center gap-x-6 ml-4'>
          <button>
            <Image src='/svgs/search.svg' alt='search' width='20' height='20' />
          </button>
          <button>
            <Image
              src='/svgs/bell.svg'
              alt='notification'
              width='20'
              height='20'
            />
          </button>
          <button>
            <Image
              src='/svgs/help-circle.svg'
              alt='help'
              width='20'
              height='20'
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
