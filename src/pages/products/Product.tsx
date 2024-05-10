import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { TProduct } from '@/lib/types';
import { addToCart } from '@/store/cart/cartSlice';
import { useAppDispatch } from '@/store/hooks';
import { memo, useCallback, useState } from 'react';
import { AiFillStar, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { LuLoader2 } from 'react-icons/lu';
import { MdAddShoppingCart } from 'react-icons/md';
import { Badge } from '@/components/ui/badge';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import actLikeToggle from '@/store/wishlist/actions/likeToggleAct';

const Product = memo(({ id, img, title, price, cat_prefix, max, quantity, isLiked }: TProduct) => {
  // For Animation
  const [isClicked, setisClicked] = useState(false);

  // isLoading Like
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const getStilItems = useCallback(() => max - (quantity ?? 0), [max, quantity]);

  const addTocart = () => {
    if (!getStilItems() < 1) {
      setisClicked(true);
      setTimeout(() => {
        setisClicked(false);
        dispatch(addToCart(id));
      }, 2000);
    }
  };

  const likeToggleHandler = () => {
    setIsLoading(true);
    dispatch(actLikeToggle(id))
      .unwrap()
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className='p-3 shadow'>
      <div className='w-[292px] h-[438px] bg-gray-100 relative'>
        <img src={img} alt={title} className='shadow-md' />

        <Button
          disabled={isLoading}
          variant={'ghost'}
          onClick={likeToggleHandler}
          className='absolute top-2 right-2 cursor-pointer hover:text-red-700'>
          {isLoading ? (
            <AiOutlineLoading3Quarters className='animate-spin' />
          ) : isLiked ? (
            <IoMdHeart className='hover:scale-125 duration-200 fill-red-700' size={32} />
          ) : (
            <IoMdHeartEmpty className='hover:scale-125 duration-200 ' size={32} />
          )}
        </Button>
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
          {getStilItems() < 1 ? <span className='text-red-500'>Out of Stock</span> : <span>Stile {getStilItems()} </span>}
        </p>

        <Badge className='text-xs leading-3 pb-1' variant='outline'>
          <span> {cat_prefix}</span>
        </Badge>
      </div>
      <Separator className='my-4' />
      <div className='flex justify-between items-center font-semibold'>
        <div>188 order | $15044</div>
        <Button disabled={isClicked || getStilItems() < 1} onClick={addTocart} className='' size={'sm'}>
          {isClicked ? (
            <>
              <LuLoader2 className='animate-spin' /> Loading
            </>
          ) : (
            <>
              <MdAddShoppingCart /> Add To cart
            </>
          )}
        </Button>
      </div>
    </div>
  );
});
export default Product;
