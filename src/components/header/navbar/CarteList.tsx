import { Link } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { useEffect, useRef, useState } from 'react';
import { getCartTotal } from '@/store/cart/cartSlice';

import Basket from '@/assets/svg/basket.svg?react';

const CarteList = () => {
  const totalCart = useAppSelector(getCartTotal);
  const [animate, setAnimate] = useState(false);
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
  }, [totalCart]);
  return (
    <Link to={'shopping-cart'} className='rounded-md relative flex items-center justify-center size-8 bg-white/15'>
      {totalCart != 0 && (
        <div
          className={`${
            animate ? 'animate-pulse' : 'animate-none'
          } duration-300 text-[11px] flex  items-center justify-center size-5 bg-primary -right-3 -top-3 absolute rounded-full text-white`}>
          {totalCart}
        </div>
      )}

      <Basket className='w-5' />
    </Link>
  );
};

export default CarteList;
