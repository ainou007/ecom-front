import { createSlice } from '@reduxjs/toolkit';
import actLikeToggle from './actions/likeToggleAct';
import getWishlistItems from './actions/getWishlistItems';
import { TLoading, TProduct } from '@/lib/types';
import { isString } from '@/lib/utils';

type TInitialState = {
  itemsId: number[];
  error: null | string;
  loading: TLoading;
  products: TProduct[];
};
const initialState: TInitialState = {
  itemsId: [],
  error: '',
  loading: TLoading.idle,
  products: [],
};

const wishlist = createSlice({
  name: 'wishlistSlice',
  initialState,
  reducers: {
    productsCleanUp: (state) => {
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    // Like Toggle
    builder.addCase(actLikeToggle.pending, (state) => {
      state.error = null;
    });

    builder.addCase(actLikeToggle.fulfilled, (state, action) => {
      if (action.payload.type === 'add') {
        state.itemsId.push(action.payload.id);
      } else {
        state.itemsId = state.itemsId.filter((item) => item !== action.payload.id);
        state.products = state.products.filter((prod) => {
          return prod.id != action.payload.id;
        });
      }
    });

    builder.addCase(actLikeToggle.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = TLoading.failed;
    });

    //
    builder.addCase(getWishlistItems.pending, (state) => {
      state.error = null;
      state.loading = TLoading.pending;
    });

    builder.addCase(getWishlistItems.fulfilled, (state, action) => {
      state.error = null;
      state.loading = TLoading.succeeded;
      state.products = action.payload;
    });

    builder.addCase(getWishlistItems.rejected, (state, action) => {
      if (isString(action.payload)) {
        state.error = action.payload;
      }
      state.loading = TLoading.failed;
    });
  },
});

export const { productsCleanUp } = wishlist.actions;
export default wishlist.reducer;
