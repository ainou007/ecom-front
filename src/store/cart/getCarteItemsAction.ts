import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../index';
import axios from 'axios';
import { TProduct } from '@/lib/types';

export const getCarteItemsAction = createAsyncThunk(
  'cart/getCarteItemsAction',
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const { cartSlice } = getState() as RootState;
    const productsIds = Object.keys(cartSlice.items);

    if (!productsIds.length) {
      return fulfillWithValue([]);
    }

    const concatenatedItemsIds = productsIds.map((id) => `id=${id}`).join('&');

    try {
      const res = await axios.get<TProduct[]>(
        `/products?${concatenatedItemsIds}`
      );
      return res.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data.message || err.message);
      } else {
        return rejectWithValue('unexpected Error');
      }
    }

    console.log(concatenatedItemsIds);
  }
);
