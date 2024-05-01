import GridList from '@/components/ecommerce/gridList';
import Loading from '@/components/feedback/loading/Loading';
import Category from '@/pages/categories/category';
import { getCategories } from '@/store/category/categoryActions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';

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
    <Loading error={categoriesError} loading={loadingCategories}>
      <GridList
        records={categoryRecords}
        renderItem={(record) => <Category category={record} />}
      />
    </Loading>
  );
};
export default Categories;
