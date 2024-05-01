import MainLayout from '@/layouts/mainLayout';
import AboutUs from '@/pages/about-us/aboutUs';
import Categories from '@/pages/categories/categories';
import Error from '@/pages/Error';
import Home from '@/pages/home/home';
import Login from '@/pages/login';
import Products from '@/pages/products/products';
import Register from '@/pages/register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'categories', element: <Categories /> },
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
