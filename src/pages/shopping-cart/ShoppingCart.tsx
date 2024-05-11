import CartItem from '@/components/shopping-cart/CartItem';
import Total from '@/components/shopping-cart/Total';
import Loading from '@/components/feedback/loading/Loading';
import Heading from '@/components/header/Heading';
import useShoppingCart from './useShoppingCart';

const ShoppingCart = () => {
  const { loading, error, productsList, changeQuantityHandler, removeItemHandler } = useShoppingCart();

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
