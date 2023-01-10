import Card from './Card';
import CardItems from './CardItems';
import TopNav from './TopNav';
import Button from '../../shared/Button';

const Workspace = ({
  action,
  openNavFn,
}: {
  action: { nav: string; link: string };
  openNavFn: () => void;
}) => {
  const workspaces = [
    {
      number: 0,
      name: 'Drafts',
    },
    {
      number: 0,
      name: 'Waiting for me',
    },
    {
      number: 0,
      name: 'Waiting for others',
    },
    {
      number: 0,
      name: 'Completed',
    },
  ];
  return (
    <div className='flex flex-col min-h-screen w-full lg:w-[72%] xl:w-[77%] 2xl:w-[80%] ml-auto'>
      <TopNav openNavFn={openNavFn} />
      <div className='mx-6 mt-4 mb-6 border border-daygray rounded-lg lg:h-[71vh] flex flex-col'>
        <div className='flex flex-col lg:flex-row items-center w-full'>
          {workspaces.map((workspace) => {
            return (
              <div
                className={`w-full py-6 px-6 ${
                  workspace.name !== action.nav
                    ? 'border border-daygray bg-lightgray'
                    : 'border-t-2 border-t-daygray'
                }`}
                key={workspace.name}
              >
                <h5 className='text-2xl font-medium'>{workspace.number}</h5>
                <p className='text-sm'>{workspace.name}</p>
              </div>
            );
          })}
        </div>
        <div className='flex flex-col gap-y-2 items-center justify-center w-max lg:m-auto my-8 mx-auto'>
          <p className='w-[15rem] md:w-max text-center lg:text-start mb-2 lg:mb-0'>
            There are currently no drafted documents.
          </p>
          <Button
            name='Create new document'
            leftIcon='/svgs/plus.svg'
            leftIconWidth='20'
            leftIconHeight='20'
          />
        </div>
      </div>
      <div className='mt-0 px-6 grid md:grid-cols-2 xl:grid-cols-3 xl:items-center gap-x-3 gap-y-3 w-full mb-3'>
        {CardItems.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Workspace;
