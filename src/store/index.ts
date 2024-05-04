import cartSlice from '@/store/cart/cartSlice';
import categorySlice from '@/store/category/categorySlice';
import productSlice from '@/store/product/productSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  REGISTER,
  PERSIST,
  REHYDRATE,
  PURGE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConf = {
  key: 'cartItems',
  storage,
  whitelist: ['items'],
};

const reducer = combineReducers({
  categorySlice,
  productSlice,
  cartSlice: persistReducer(persistConf, cartSlice),
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
