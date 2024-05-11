import { useAppDispatch, useAppSelector } from '@/store/hooks';
import getWishlistItems from '@/store/wishlist/actions/getWishlistItems';
import { productsCleanUp } from '@/store/wishlist/wishListSlice';
import { useEffect } from 'react';

const useWislist = () => {
  const dispatch = useAppDispatch();

  const { loading, products, error, itemsId } = useAppSelector((state) => state.wishListSlice);

  const cartItems = useAppSelector((state) => state.cartSlice.items);

  const wishlistItems = products.map((item) => {
    return { ...item, quantity: cartItems[item.id] || 0, isLiked: itemsId.includes(item.id) };
  });

  useEffect(() => {
    dispatch(getWishlistItems(1)); // 1 is the userId

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch]);

  return { loading, error, wishlistItems, itemsId };
};
export default useWislist;
