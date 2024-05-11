import type { TCategory } from '@/lib/types';
import { isAxiosErrorHandler } from '@/lib/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategories = createAsyncThunk('categories/getCategory', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.get<TCategory[]>('/categories');
    return response.data;
  } catch (err) {
    return rejectWithValue(isAxiosErrorHandler(err));
  }
});
