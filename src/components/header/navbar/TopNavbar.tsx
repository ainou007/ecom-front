import { buttonVariants } from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import { Link } from 'react-router-dom';
import CarteList from './CarteList';
import WishList from './WishList';

const TopNavbar = () => {
  return (
    <>
      <nav className='bg-gray-800 p-4 border-b border-gray-700'>
        <div className='container text-gray-100 font-semibold flex items-center justify-between'>
          <Logo />
          <div className='flex gap-5 items-center'>
            <WishList />
            <CarteList />
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
    </>
  );
};
export default TopNavbar;
