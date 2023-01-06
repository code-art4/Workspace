import Image from 'next/image';

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className='bg-daygray flex items-start w-max px-4 pt-4 pb-7 rounded-xl'>
      <Image src='/svgs/edit.svg' alt='Edit' width='20' height='20' />
      <div className='px-4'>
        <h4 className='font-medium'>{title}</h4>
        <p className='text-[#999999] w-[18rem] text-sm'>{description}</p>
      </div>
      <Image src='/svgs/chevron-right.svg' alt='Right' width='20' height='20' />
    </div>
  );
};

export default Card;
