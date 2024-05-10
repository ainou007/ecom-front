import GridList from '@/components/ecommerce/GridList';
import Loading from '@/components/feedback/loading/Loading';
import { getCategories } from '@/store/category/categoryActions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';
import Category from './Category';
import Heading from '@/components/header/Heading';

const Categories = () => {
  const dispatch = useAppDispatch();
  const {
    records: categoryRecords,
    loading: loadingCategories,
    error: categoriesError,
  } = useAppSelector((state) => {
    return state.categorySlice;
  });

  useEffect(() => {
    if (categoryRecords.length === 0) {
      dispatch(getCategories());
    }
  }, [dispatch]);
  return (
    <>
      <Heading title='Categories' />
      <Loading error={categoriesError} loading={loadingCategories}>
        <GridList records={categoryRecords} renderItem={(record) => <Category category={record} />} />
      </Loading>
    </>
  );
};
export default Categories;
