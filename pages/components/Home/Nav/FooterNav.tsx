import Image from 'next/image';
import { FooterNavProps } from './types';

const FooterNav = ({ nav, svg }: FooterNavProps) => {
  return (
    <li className='flex items-center cursor-pointer'>
      <Image src={svg} alt={svg} width='20' height='20' objectFit='contain' />
      <div className='ml-5'>
        <span className='font-medium text-gray'>{nav}</span>
      </div>
    </li>
  );
};

export default FooterNav;
