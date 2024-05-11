const MainLayout = lazy(() => import('@/layouts/MainLayout'));
const Error = lazy(() => import('@/pages/Error'));
const AboutUs = lazy(() => import('@/pages/about-us/AboutUs'));
const Categories = lazy(() => import('@/pages/categories/Categories'));
const Home = lazy(() => import('@/pages/home/Home'));
const Login = lazy(() => import('@/pages/Login'));
const Products = lazy(() => import('@/pages/products/Products'));
const Register = lazy(() => import('@/pages/Register'));
const ShoppingCart = lazy(() => import('@/pages/shopping-cart/ShoppingCart'));
const Wishlist = lazy(() => import('@/pages/wishlist/Wishlist'));

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const router = createBrowserRouter([
  {
    path: '',
    element: (
      <Suspense fallback={'Loading, pleas wait ...'}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={'Loading, pleas wait ...'}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'categories',
        element: (
          <Suspense fallback={'Loading, pleas wait ...'}>
            <Categories />
          </Suspense>
        ),
      },
      {
        path: 'shopping-cart',
        element: (
          <Suspense fallback={'Loading, pleas wait ...'}>
            <ShoppingCart />
          </Suspense>
        ),
      },
      {
        path: 'wishlist',
        element: (
          <Suspense fallback={'Loading, pleas wait ...'}>
            <Wishlist />
          </Suspense>
        ),
      },
      {
        path: 'products/:cat_prefix',
        element: (
          <Suspense fallback={'Loading, pleas wait ...'}>
            <Products />
          </Suspense>
        ),

        loader: ({ params }) => {
          const { cat_prefix } = params;
          if (
            // this is just a command for testing
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
      {
        path: 'about-us',
        element: (
          <Suspense fallback={'Loading, pleas wait ...'}>
            <AboutUs />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: 'login',
    element: (
      <Suspense fallback={'Loading, pleas wait ...'}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: 'register',
    element: (
      <Suspense fallback={'Loading, pleas wait ...'}>
        <Register />
      </Suspense>
    ),
  },
  //   {
  //     path: '*',
  //     element: <PageNotFound />,
  //   },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
