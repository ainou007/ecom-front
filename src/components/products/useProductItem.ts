import { addToCart } from '@/store/cart/cartSlice';
import { useAppDispatch } from '@/store/hooks';
import actLikeToggle from '@/store/wishlist/actions/likeToggleAct';
import { useCallback, useState } from 'react';

const useProductItem = ({ id, max, quantity }: { id: number; max: number; quantity: number | undefined }) => {
  // For Animation
  const [isClicked, setisClicked] = useState(false);

  // isLoading Like
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const getStilItems = useCallback(() => max - (quantity ?? 0), [max, quantity]);
  console.log('Product');
  const addTocart = () => {
    if (getStilItems() > 0) {
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
  return { isLoading, isClicked, addTocart, likeToggleHandler, getStilItems };
};

export default useProductItem;
