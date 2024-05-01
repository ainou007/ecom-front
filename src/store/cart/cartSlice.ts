import { TProduct } from '@/lib/types';
import { RootState } from '@/store';
import { createSelector, createSlice } from '@reduxjs/toolkit';

// type item = { id: string; quantity: number };

type TInitialState = {
  items: { [key: number]: number };
  products: (TProduct & { quantity: number })[];
};

const initialState: TInitialState = {
  items: {},
  products: [],
};
const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
      //   if (state.items.find((item) => item.id === action.payload)) {
      //     state.items.map((item) => {
      //       if (item.id === action.payload) {
      //         item.quantity += 1;
      //       }
      //     });
      //   } else {
      //     state.items.push({ id: action.payload, quantity: 1 });
      //   }
    },
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
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
