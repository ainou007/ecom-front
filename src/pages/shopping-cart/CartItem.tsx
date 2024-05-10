import { Button } from '@/components/ui/button';
import React, { useCallback } from 'react';
import { IoBagRemoveOutline } from 'react-icons/io5';

type TCartItemProps = {
  id: number;
  title: string;
  img: string;
  max: number;
  price: number;
  quantity: number;
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};

const CartItem = React.memo(
  ({ id, title, img, max, price, quantity, changeQuantityHandler, removeItemHandler }: TCartItemProps) => {
    //

    console.log('render');

    const total = useCallback((price: number) => quantity * price, [quantity, max]);

    const incrementQuqntity = useCallback(() => {
      if (quantity < max) {
        changeQuantityHandler(id, quantity + 1);
      }
    }, [quantity, max]);

    const decrementQuqntity = useCallback(() => {
      if (quantity > 1) {
        changeQuantityHandler(id, quantity - 1);
      }
    }, [quantity, max]);

    return (
      <div className='relative flex gap-3 shadow-custom  p-3 rounded-lg'>
        <Button
          onClick={() => {
            removeItemHandler(id);
          }}
          className='absolute right-3 top-3 hover:bg-red-500 hover:text-white '
          size={'icon'}
          variant={'outline'}>
          <IoBagRemoveOutline />
        </Button>
        <div className='size-44 rounded-md shadow-md overflow-hidden'>
          <img className='object-cover size-44' src={img} alt='' />
        </div>
        <div className='flex flex-col justify-between'>
          <div>
            <p className='text-gray-800 font-semibold text-lg'>{`${title} / ${price}$`}</p>
            <p className='text-gray-700 font-semibold'>
              Total <span> {total(price || 0)} $</span>
            </p>
          </div>
          <div>
            <div className='mb-2 font-semibold'>Quantity</div>
            <Button disabled={quantity === max} onClick={incrementQuqntity} variant={'outline'} size={'icon'}>
              +
            </Button>
            <span className='p-2 select-none'> {quantity} </span>
            <Button disabled={quantity <= 0} onClick={decrementQuqntity} variant={'outline'} size={'icon'}>
              -
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

export default CartItem;
