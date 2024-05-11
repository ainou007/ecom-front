import GridList from '@/components/ecommerce/GridList';
import Loading from '@/components/feedback/loading/Loading';
import Product from '@/components/products/ProductItem';
import Heading from '@/components/header/Heading';
import useProducts from './useProducts';

const Products = () => {
  const { productsList, loading, error, cat_prefix } = useProducts();
  return (
    <>
      <Heading title={`${cat_prefix} Products`} />
      <Loading loading={loading} error={error}>
        <GridList records={productsList} renderItem={(record) => <Product {...record} />} />
      </Loading>
    </>
  );
};
export default Products;
