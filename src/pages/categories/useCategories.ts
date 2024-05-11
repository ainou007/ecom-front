import { getCategories } from '@/store/category/categoryActions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';

const useCategories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => {
    return state.categorySlice;
  });

  useEffect(() => {
    if (records.length === 0) {
      dispatch(getCategories());
    }
  }, [dispatch]);

  return { loading, error, records };
};

export default useCategories;
