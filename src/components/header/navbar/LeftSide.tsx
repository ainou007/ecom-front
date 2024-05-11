import { useAppSelector } from '@/store/hooks';
import Counter from './Counter';
import { getCartTotal } from '@/store/cart/cartSlice';
import Heart from '@/assets/svg/heart.svg?react';
import Basket from '@/assets/svg/basket.svg?react';

const LeftSide = () => {
  const totalShoppingCart = useAppSelector(getCartTotal);
  const totalWishlist = useAppSelector((state) => state.wishListSlice.itemsId.length);

  return (
    <div className='flex gap-5'>
      <Counter total={totalWishlist} route={'wishlist'} icon={Heart} />
      <Counter total={totalShoppingCart} route={'shopping-cart'} icon={Basket} />
    </div>
  );
};

export default LeftSide;
