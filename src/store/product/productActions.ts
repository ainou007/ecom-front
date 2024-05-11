import { TProduct } from '@/lib/types';
import { isAxiosErrorHandler } from '@/lib/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('products/getProducts', async (cat_prefix: string, thunkAPI) => {
  const { rejectWithValue, signal } = thunkAPI;
  try {
    const response = await axios.get<TProduct[]>(`/products?cat_prefix=${cat_prefix}`, {
      signal,
    });
    return response.data;
  } catch (err) {
    return rejectWithValue(isAxiosErrorHandler(err));
  }
});
