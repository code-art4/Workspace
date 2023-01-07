import Image from 'next/image';
import { useRouter } from 'next/router';
import { NavItemProps } from './types';

const NavItem = ({
  svg,
  more,
  nav,
  existingNumber,
  openNavFn,
  openItemsMore,
  handleChangeAction,
  action,
}: NavItemProps) => {
  const { pathname } = useRouter();
  return (
    <>
      <li
        className='flex items-center cursor-pointer'
        onClick={() =>
          openNavFn({
            svg: svg,
            nav: nav,
            more: more,
            existingNumber: existingNumber,
          })
        }
      >
        <Image src={svg} alt={svg} width='20' height='20' objectFit='contain' />
        <div className='ml-7'>
          <span className='font-medium'>{nav}</span>
        </div>
        {more ? (
          <div className='ml-1'>
            <Image
              src='/svgs/caret-down.svg'
              alt='more'
              width='20'
              height='12'
              objectFit='cover'
            />
          </div>
        ) : null}
        <p className='ml-auto'>{existingNumber}</p>
      </li>
      {more && openItemsMore ? (
        <ul className='-mt-2 mb-3 flex flex-col gap-y-2 cursor-pointer'>
          {more?.map((each) => {
            return (
              <li
                key={each.nav}
                className={`${
                  each.nav === action.nav ? 'bg-lightgray' : 'px-5'
                } pl-12 text-gray py-1 rounded`}
                onClick={() => handleChangeAction(each)}
              >
                {each.nav}
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
};

export default NavItem;
