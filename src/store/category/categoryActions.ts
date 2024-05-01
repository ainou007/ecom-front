import { Category } from '@/lib/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategories = createAsyncThunk(
  'categories/getCategory',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<Category[]>(
        'http://localhost:5005/categories'
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue('an unexpected error');
      }
    }
  }
);
