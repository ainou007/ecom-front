import Basket from '@/assets/svg/basket.svg?react';
import { buttonVariants } from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import { getCartTotal } from '@/store/cart/cartSlice';
import { useAppSelector } from '@/store/hooks';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  const totalCart = useAppSelector(getCartTotal);
  


  return (
    <nav className='bg-gray-800 p-4 border-b border-gray-700'>
      <div className='container text-gray-100 font-semibold flex items-center justify-between'>
        <Logo />
        <div className='flex gap-5 items-center'>
          <div className='rounded-md relative flex items-center justify-center size-7 bg-white/5'>
            <div className={`duration-300 text-[11px] flex  items-center justify-center size-5 bg-primary -right-3 -top-3 absolute rounded-full text-white`}>
              {totalCart}
            </div>
            <a href='#'>
              <Basket className='w-5' />
            </a>
          </div>
          <ul className='flex gap-2'>
            <li>
              <Link to={'login'} className={buttonVariants({ size: 'sm' })}>
                Login
              </Link>
            </li>
            <li>
              <Link to={'register'} className={buttonVariants({ size: 'sm' })}>
                Register
              </Link>{' '}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default TopNavbar;
