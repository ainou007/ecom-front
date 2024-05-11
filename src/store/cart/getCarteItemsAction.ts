import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../index';
import axios from 'axios';
import { TProduct } from '@/lib/types';
import { isAxiosErrorHandler } from '@/lib/utils';

export const getCarteItemsAction = createAsyncThunk('cart/getCarteItemsAction', async (_, thunkAPI) => {
  const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
  const { cartSlice } = getState() as RootState;
  const productsIds = Object.keys(cartSlice.items);

  if (!productsIds.length) {
    return fulfillWithValue([]);
  }

  const concatenatedItemsIds = productsIds.map((id) => `id=${id}`).join('&');

  try {
    const res = await axios.get<TProduct[]>(`/products?${concatenatedItemsIds}`);
    return res.data;
  } catch (err) {
    return rejectWithValue(isAxiosErrorHandler(err));
  }

  console.log(concatenatedItemsIds);
});
