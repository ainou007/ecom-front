import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback, useEffect } from 'react';
import { getCarteItemsAction } from '@/store/cart/getCarteItemsAction';
import CartItem from './CartItem';
import Total from './Total';
import Loading from '@/components/feedback/loading/Loading';
import { removeCarteItem, updateQuantity } from '@/store/cart/cartSlice';
import Heading from '@/components/header/Heading';

const ShoppingCart = () => {
  const dispatch = useAppDispatch();

  const { items, products, loading, error } = useAppSelector((state) => state.cartSlice);
  useEffect(() => {
    dispatch(getCarteItemsAction());
  }, [dispatch]);

  const productsList = products.map((product) => {
    return { ...product, quantity: items[product.id] };
  });

  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(updateQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(removeCarteItem(id));
    },
    [dispatch]
  );

  return (
    <>
      <Heading title='Shopping Cart' />
      <Loading loading={loading} error={error}>
        {productsList.length > 0 ? (
          <div className='flex gap-10'>
            <div className='w-2/3  space-y-3 rounded-lg'>
              {productsList.map((product) => {
                return (
                  <CartItem
                    key={product.id}
                    {...product}
                    changeQuantityHandler={changeQuantityHandler}
                    removeItemHandler={removeItemHandler}
                  />
                );
              })}
            </div>
            <div className='w-1/3'>
              <Total products={productsList} />
            </div>
          </div>
        ) : (
          <div>Your Cart is empty</div>
        )}
      </Loading>
    </>
  );
};

export default ShoppingCart;
