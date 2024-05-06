import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { TProduct } from '@/lib/types';
import { addToCart } from '@/store/cart/cartSlice';
import { useAppDispatch } from '@/store/hooks';
import { memo, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { LuLoader2 } from 'react-icons/lu';
import { MdAddShoppingCart } from 'react-icons/md';
import { Badge } from '@/components/ui/badge';

const Product = memo(({ product }: { product: TProduct }) => {
  const { id, img, title, price, cat_prefix, max, quantity } = product;
  const [isClicked, setisClicked] = useState(false);

  console.log('fire');
  const dispatch = useAppDispatch();

  const addTocart = () => {
    setisClicked(true);
    setTimeout(() => {
      setisClicked(false);
    }, 2000);

    dispatch(addToCart(id));
  };

  const getStilItems = max - (quantity ?? 0);

  return (
    <div className='p-3 shadow'>
      <div className='w-[292px] h-[438px] bg-gray-100'>
        <img src={img} alt={title} className='shadow-md' />
      </div>

      <div className='mt-3 mb-2 flex justify-between items-center'>
        <h2 className='font-semibold'> {title} </h2>
        <div className='flex items-center font-semibold gap-2 text-green-700'>
          <AiFillStar className='' />
          3.5
        </div>
      </div>

      <div className='flex justify-between'>
        <p className='font-semibold'>
          {price.toFixed(2)}$ /{' '}
          {getStilItems ? (
            <span>Stile {getStilItems} </span>
          ) : (
            <span className='text-red-500'>Out of Stock</span>
          )}
        </p>

        <Badge className='text-xs leading-3' variant='outline'>
          {cat_prefix}
        </Badge>
      </div>
      <Separator className='my-4' />
      <div className='flex justify-between items-center font-semibold'>
        <div>188 order | $15044</div>
        <Button
          disabled={isClicked || !getStilItems}
          onClick={addTocart}
          className=''
          size={'sm'}>
          {isClicked ? (
            <>
              <LuLoader2 className='animate-spin' /> Loading
            </>
          ) : (
            <>
              <MdAddShoppingCart /> Add To cart
            </>
          )}{' '}
        </Button>
      </div>
    </div>
  );
});
export default Product;
