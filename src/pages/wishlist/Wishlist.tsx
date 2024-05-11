import GridList from '@/components/ecommerce/GridList';
import Loading from '@/components/feedback/loading/Loading';
import Product from '../../components/products/ProductItem';
import Heading from '@/components/header/Heading';
import useWislist from './useWishlist';

const Wishlist = () => {
  const { wishlistItems, loading, itemsId, error } = useWislist();

  return itemsId.length > 0 ? (
    <>
      <Heading title='Wishlist' />
      <Loading loading={loading} error={error}>
        <GridList records={wishlistItems} renderItem={(record) => <Product {...record} />} />
      </Loading>
    </>
  ) : (
    'Your wishlist is empty !!'
  );
};

export default Wishlist;
