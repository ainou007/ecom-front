import cartSlice from '@/store/cart/cartSlice';
import categorySlice from '@/store/category/categorySlice';
import productSlice from '@/store/product/productSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, PAUSE, REGISTER, PERSIST, REHYDRATE, PURGE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import wishListSlice from './wishlist/wishListSlice';

const cartItemsPersistConf = {
  key: 'cartItems',
  storage,
  whitelist: ['items'],
};

const wishlistPersistConf = {
  key: 'wishlist',
  storage,
  whitelist: ['itemsId'],
};

const reducer = combineReducers({
  categorySlice,
  productSlice,
  cartSlice: persistReducer(cartItemsPersistConf, cartSlice),
  wishListSlice: persistReducer(wishlistPersistConf, wishListSlice),
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, REGISTER, PERSIST, REHYDRATE, PURGE],
      },
    }),
});

const persistor = persistStore(store);
export { store, persistor };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
