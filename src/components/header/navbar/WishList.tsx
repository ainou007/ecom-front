import { useAppSelector } from '@/store/hooks';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Heart from '@/assets/svg/heart.svg?react';

const WishList = () => {
  const total = useAppSelector((state) => state.wishListSlice.itemsId.length);
  const ref = useRef(true);

  useEffect(() => {
    const isFirstRender = ref.current;
    if (isFirstRender) {
      ref.current = false;
    } else {
      setAnimate(true);
      let debouce = setTimeout(() => {
        setAnimate(false);
      }, 300);
      return () => {
        clearTimeout(debouce);
      };
    }
  }, [total]);
  const [animate, setAnimate] = useState(false);

  return (
    <Link to={'wishlist'} className='rounded-md relative flex items-center justify-center size-8 bg-white/15'>
      {total != 0 && (
        <div
          className={`${
            animate ? 'animate-pulse' : 'animate-none'
          } duration-300 text-[11px] flex  items-center justify-center size-5 bg-primary -right-3 -top-3 absolute rounded-full text-white`}>
          {total}
        </div>
      )}
      <Heart className='w-5' />
    </Link>
  );
};

export default WishList;
