import { ShoppingCartCleanUp, removeCarteItem, updateQuantity } from '@/store/cart/cartSlice';
import { getCarteItemsAction } from '@/store/cart/getCarteItemsAction';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback, useEffect } from 'react';

const useShoppingCart = () => {
  const dispatch = useAppDispatch();

  const { items, products, loading, error } = useAppSelector((state) => state.cartSlice);
  useEffect(() => {
    dispatch(getCarteItemsAction());

    return () => {
      dispatch(ShoppingCartCleanUp());
    };
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
  return { loading, error, productsList, changeQuantityHandler, removeItemHandler };
};

export default useShoppingCart;
