import { TLoading, TProduct } from '@/lib/types';
import { RootState } from '@/store';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { getCarteItemsAction } from './getCarteItemsAction';

type TInitialState = {
  items: { [key: string]: number };
  products: TProduct[];
  loading: TLoading;
  error: null | string;
};

const initialState: TInitialState = {
  items: {},
  products: [],
  loading: TLoading.idle,
  error: null,
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    //
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },

    updateQuantity: (state, action) => {
      state.items[action.payload.id] = action.payload.quantity;
    },

    removeCarteItem: (state, action) => {
      delete state.items[action.payload];
      state.products = state.products.filter((prod) => {
        return prod.id != action.payload;
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCarteItemsAction.pending, (state) => {
      state.loading = TLoading.pending;
      state.error = null;
    });
    builder.addCase(getCarteItemsAction.fulfilled, (state, action) => {
      state.loading = TLoading.succeeded;
      state.error = null;
      state.products = action.payload;
    });
    builder.addCase(getCarteItemsAction.rejected, (state, action) => {
      state.loading = TLoading.failed;
      if (action.payload && typeof action.payload == 'string') {
        state.error = action.payload;
      }
    });
  },
});

const getCartTotal = createSelector(
  (state: RootState) => state.cartSlice.items,
  (items) => {
    const total = Object.values(items).reduce((acc, item) => {
      return acc + item;
    }, 0);
    return total;
  }
);

export { getCartTotal };
export const { addToCart, updateQuantity, removeCarteItem } = cartSlice.actions;

export default cartSlice.reducer;
