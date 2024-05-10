import GridList from '@/components/ecommerce/GridList';
import Loading from '@/components/feedback/loading/Loading';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import getWishlistItems from '@/store/wishlist/actions/getWishlistItems';
import { useEffect } from 'react';
import Product from '../products/product';
import { productsCleanUp } from '@/store/wishlist/wishListSlice';

const Wishlist = () => {
  const dispatch = useAppDispatch();

  const { loading, products, error, itemsId } = useAppSelector((state) => state.wishListSlice);
  const cartItems = useAppSelector((state) => state.cartSlice.items);
  const wishlist = products.map((item) => {
    return { ...item, quantity: cartItems[item.id] || 0, isLiked: itemsId.includes(item.id) };
  });
  useEffect(() => {
    dispatch(getWishlistItems(1));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch]);

  return itemsId.length > 0 ? (
    <Loading loading={loading} error={error}>
      <GridList records={wishlist} renderItem={(record) => <Product {...record} />} />
    </Loading>
  ) : (
    'Your wishlist is empty !!'
  );
};

export default Wishlist;
