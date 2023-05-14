import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state of the slice
const initialState = {
  productList: [],
  status: 'idle',
  error: null
};


// Define the async thunk to fetch the product list
export const getProductsList = createAsyncThunk('products/fetchProductsList', async () => {
  const response = await axios.get('http://pm.basketofart.net:3000/getProducts');
  return response.data;
});

// Define the slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProductsList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.productList = action.payload;
      })
      .addCase(getProductsList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default productsSlice.reducer;
