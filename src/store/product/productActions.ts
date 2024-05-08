import { TProduct } from '@/lib/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (cat_prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TProduct[]>(
        `/products?cat_prefix=${cat_prefix}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.messagae || error.message);
      } else {
        return rejectWithValue('an unexpected error');
      }
    }
  }
);
