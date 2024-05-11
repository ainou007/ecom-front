import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getProducts } from '@/store/product/productActions';
import { productsCleanup } from '@/store/product/productSlice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useProducts = () => {
  const params = useParams();
  const { cat_prefix } = params;

  const wishlistItems = useAppSelector((state) => state.wishListSlice.itemsId);

  const cartItems = useAppSelector((state) => {
    return state.cartSlice.items;
  });

  const dispatch = useAppDispatch();

  const { records, loading, error } = useAppSelector((state) => state.productSlice);

  useEffect(() => {
    const promise = dispatch(getProducts(cat_prefix as string));
    return () => {
      dispatch(productsCleanup());
      promise.abort();
    };
  }, [dispatch, params]);

  const productsList = records.map((product) => ({
    ...product,
    quantity: cartItems[product.id] || 0,
    isLiked: wishlistItems.includes(product.id),
  }));
  return { productsList, loading, error, cat_prefix };
};

export default useProducts;
