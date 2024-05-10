import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getProducts } from '@/store/product/productActions';
import { productsCleanup } from '@/store/product/productSlice';

import GridList from '@/components/ecommerce/GridList';
import Loading from '@/components/feedback/loading/Loading';
import Product from '@/pages/products/product';

const Products = () => {
  const params = useParams();
  const { cat_prefix } = params;

  const wishlistItems = useAppSelector((state) => state.wishListSlice.itemsId);

  const cartItems = useAppSelector((state) => {
    return state.cartSlice.items;
  });

  const dispatch = useAppDispatch();

  const {
    records: productRecords,
    loading: loadingProducts,
    error: errorProducts,
  } = useAppSelector((state) => state.productSlice);

  useEffect(() => {
    dispatch(getProducts(cat_prefix as string));
    return () => {
      dispatch(productsCleanup());
    };
  }, [dispatch, params]);

  const recordsWithQuantity = productRecords.map((product) => ({
    ...product,
    quantity: cartItems[product.id] || 0,
    isLiked: wishlistItems.includes(product.id),
  }));

  return (
    <Loading loading={loadingProducts} error={errorProducts}>
      <GridList records={recordsWithQuantity} renderItem={(record) => <Product {...record} />} />
    </Loading>
  );
};
export default Products;
