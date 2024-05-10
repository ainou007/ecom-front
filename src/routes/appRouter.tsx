import MainLayout from '@/layouts/MainLayout';
import Error from '@/pages/Error';
import AboutUs from '@/pages/about-us/AboutUs';
import Categories from '@/pages/categories/Categories';
import Home from '@/pages/home/home';
import Login from '@/pages/login';
import Products from '@/pages/products/products';
import Register from '@/pages/register';
import ShoppingCart from '@/pages/shopping-cart/ShoppingCart';
import Wishlist from '@/pages/wishlist/Wishlist';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'categories', element: <Categories /> },
      { path: 'shopping-cart', element: <ShoppingCart /> },
      { path: 'wishlist', element: <Wishlist /> },
      {
        path: 'products/:cat_prefix',
        element: <Products />,
        loader: ({ params }) => {
          const { cat_prefix } = params;
          if (
            // this is just a commande for testing
            typeof cat_prefix !== 'string' ||
            !/^[a-zA-Z]+$/.test(cat_prefix)
          ) {
            throw new Response('bad request', {
              statusText: 'Bad',
              status: 400,
            });
          }

          return true;
        },
      },
      { path: 'about-us', element: <AboutUs /> },
    ],
  },
  { path: 'login', element: <Login /> },
  { path: 'register', element: <Register /> },
  //   {
  //     path: '*',
  //     element: <PageNotFound />,
  //   },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
