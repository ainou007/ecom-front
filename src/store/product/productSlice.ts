import { TLoading, TProduct } from '@/lib/types';
import { getProducts } from '@/store/product/productActions';
import { createSlice } from '@reduxjs/toolkit';

interface IProductState {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}
const initialState: IProductState = {
  records: [],
  loading: TLoading.idle,
  error: null,
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    productsCleanup: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = TLoading.pending;
      state.error = null;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.records = action.payload;
      state.loading = TLoading.succeeded;
      state.error = null;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = TLoading.failed;
      state.error = action.payload as string;
    });
  },
});

export const { productsCleanup } = productSlice.actions;
export default productSlice.reducer;
