import { navLinks } from '@/constants/navLinks';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Navbar = () => {
  return (
    <nav className='bg-gray-800 p-4 '>
      <div className='container text-gray-100 font-semibold flex items-center justify-between'>
        <ul className='hidden md:flex gap-5'>
          {navLinks.map((link, index) => {
            const { label, route } = link;
            return (
              <li key={index}>
                <NavLink
                  className={({ isActive }) => (isActive ? 'text-primary' : '')}
                  to={route}
                >
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <Sheet>
          <SheetTrigger asChild>
            <Button className='block md:hidden ml-auto'>
              {' '}
              <AiOutlineMenu />
            </Button>
          </SheetTrigger>
          <SheetContent side={'left'}>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>

            <SheetFooter>
              <SheetClose asChild>
                <Button type='submit'>Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
export default Navbar;
