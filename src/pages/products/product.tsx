import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { TProduct } from '@/lib/types';
import { addToCart } from '@/store/cart/cartSlice';
import { useAppDispatch } from '@/store/hooks';
import { AiFillStar } from 'react-icons/ai';
import { MdAddShoppingCart } from 'react-icons/md';

const Product = ({ product }: { product: TProduct }) => {
  const { id, img, title, price, cat_prefix } = product;
  const dispatch = useAppDispatch();
  const addTocart = () => {
    dispatch(addToCart(id));
  };
  return (
    <div className='p-3 space-y-1 shadow'>
      <div className='w-[292px] h-[438px] bg-gray-100'>
        <img src={img} alt={title} />
      </div>
      <div className='flex items-center font-semibold gap-2 text-green-700'>
        <AiFillStar className='' />
        3.5
      </div>
      <h2 className='font-semibold'> {title} </h2>
      <p>{price}$</p>
      <p>{cat_prefix}</p>
      <Separator className='my-4' />
      <div className='flex justify-between items-center font-semibold'>
        <div>188 order | $15044</div>
        <Button onClick={addTocart} className='' size={'sm'}>
          <MdAddShoppingCart /> Add To cart
        </Button>
      </div>
    </div>
  );
};
export default Product;
