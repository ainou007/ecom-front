import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getWishlistItems = createAsyncThunk('wishlist/getWishlistItems', async (id: number, thinkAPI) => {
  const { rejectWithValue, fulfillWithValue } = thinkAPI;
  try {
    // Get the wishlist ID's
    const userWishlist = await axios.get<{ productId: number }[]>(`/wishlist?userId=${id}`);
    if (!userWishlist.data.length) {
      return fulfillWithValue([]);
    }
    const concatenatedIds = userWishlist.data.map((item) => `id=${item.productId}`).join('&');
    const response = await axios.get(`/products?${concatenatedIds}`);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return rejectWithValue(err.response?.data.message || err.message);
    } else {
      return rejectWithValue('An Unexpected error!');
    }
  }
});

export default getWishlistItems;
