import cartSlice from '@/store/cart/cartSlice';
import categorySlice from '@/store/category/categorySlice';
import productSlice from '@/store/product/productSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    categorySlice,
    productSlice,
    cartSlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
