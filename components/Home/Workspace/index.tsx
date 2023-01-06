import Card from './Card';
import CardItems from './CardItems';
import TopNav from './TopNav';
import Button from '../../shared/Button';

const Workspace = () => {
  return (
    <div className='w-full flex flex-col min-h-screen'>
      <TopNav />
      <div className='mx-6 my-4 border border-daygray rounded-lg h-[72vh]'>
        <div className='flex items-center w-full'>
          <div className='w-full py-6 px-6'>
            <h5 className='text-2xl font-medium'>0</h5>
            <p className='text-sm'>Drafts</p>
          </div>

          <div className='w-full py-6 px-6 border border-daygray bg-lightgray'>
            <h5 className='text-2xl font-medium'>0</h5>
            <p className='text-sm'>Waiting for me</p>
          </div>

          <div className='w-full py-6 px-6 border border-daygray bg-lightgray'>
            <h5 className='text-2xl font-medium'>0</h5>
            <p className='text-sm'>Waiting for others</p>
          </div>

          <div className='w-full py-6 px-6 border border-daygray bg-lightgray'>
            <h5 className='text-2xl font-medium'>0</h5>
            <p className='text-sm'>Completed</p>
          </div>
        </div>
        <div className='flex flex-col gap-y-2 items-center justify-center h-[59vh]'>
          <p>There are currently no drafted documents.</p>
          <Button
            name='Create new document'
            leftIcon='/svgs/plus.svg'
            leftIconWidth='20'
            leftIconHeight='20'
          />
        </div>
      </div>
      <div className='mt-auto px-6 lg:flex lg:flex-col w-full xl:grid xl:grid-cols-2 2xl:grid-cols-3 xl:items-center gap-x-3 gap-y-3 w-full'>
        {CardItems.map((item) => {
          return <Card key={item.title} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Workspace;
