import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

type TTotalProps = {
  id: number;
  title: string;
  price: number;
  cat_prefix: string;
  img: string;
  max: number;
  quantity: number;
};

const Total = ({ products }: { products: TTotalProps[] }) => {
  const total = () => {
    return products.reduce((acc, product) => {
      return acc + product.quantity * product.price;
    }, 0);
  };

  return (
    <div className='space-y-5 rounded-md shadow-md p-5 sticky top-5'>
      <h2 className='text-3xl font-semibold text-gray-700'>
        Total : {total()}
        {' $'}
      </h2>
      <div className='mb-1'>
        <p className='text-xl font-semibold text-gray-700'>Title</p>
        <p className='text-gray-400'>info ...</p>
      </div>
      <Separator />
      <div className='mb-1'>
        <p className='text-xl font-semibold text-gray-700'>Title</p>
        <p className='text-gray-400'>info ...</p>
      </div>
      <Separator />
      <div className='mb-1'>
        <p className='text-xl font-semibold text-gray-700'>Title</p>
        <p className='text-gray-400'>info ...</p>
      </div>
      <Button variant={'outline'}>Checkout</Button>
    </div>
  );
};

export default Total;
