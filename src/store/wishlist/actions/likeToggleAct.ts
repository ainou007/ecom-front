import { isAxiosErrorHandler } from '@/lib/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const actLikeToggle = createAsyncThunk('wishlist/actLikeToggle', async (id: number, thinkAPI) => {
  const { rejectWithValue } = thinkAPI;
  try {
    // Check if the product is liked or not by checking if this product is exist in the wishlist table with the userId and productId
    const isRecordExist = await axios.get(`/wishlist?userId=1&productId=${id}`);

    if (isRecordExist.data.length > 0) {
      // If the Product is exist, delete it: (dislike)
      await axios.delete(`/wishlist/${isRecordExist.data[0].id} `);
      return { type: 'remove', id };
    } else {
      // Product is not exist, add it (Like)
      await axios.post(`/wishlist`, { userId: 1, productId: id });
      return { type: 'add', id };
    }
  } catch (err) {
    return rejectWithValue(isAxiosErrorHandler(err));
  }
});

export default actLikeToggle;
