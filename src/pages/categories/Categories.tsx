import GridList from '@/components/ecommerce/GridList';
import Loading from '@/components/feedback/loading/Loading';
import Category from '../../components/categories/CategoryItem';
import Heading from '@/components/header/Heading';
import useCategories from './useCategories';

const Categories = () => {
  const { error, loading, records } = useCategories();
  return (
    <>
      <Heading title='Categories' />
      <Loading error={error} loading={loading}>
        <GridList records={records} renderItem={(record) => <Category category={record} />} />
      </Loading>
    </>
  );
};
export default Categories;
