import { memo } from 'react';

const Heading = memo(({ title }: { title: string }) => {
  console.log('heading');
  return <div className=' text-3xl uppercase my-6 font-semibold'>{title}</div>;
});

export default Heading;
