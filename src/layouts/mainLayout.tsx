import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className='container py-10 min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default MainLayout;
