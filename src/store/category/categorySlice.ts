import { TCategory, TLoading } from '@/lib/types';
import { isString } from '@/lib/utils';
import { getCategories } from '@/store/category/categoryActions';
import { createSlice } from '@reduxjs/toolkit';

interface ICategoryState {
  records: TCategory[];
  loading: TLoading;
  error: string | null;
}

const initialState: ICategoryState = {
  records: [],
  loading: TLoading.idle,
  error: null,
};
const categorySlice = createSlice({
  name: 'categorySlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = TLoading.pending;
      state.error = null;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = TLoading.succeeded;
      state.error = null;
      state.records = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = TLoading.failed;
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { getCategories };
export default categorySlice.reducer;
