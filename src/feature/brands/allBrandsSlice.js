import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllBrands = createAsyncThunk('brands/getAll', async({page, term}) => {
  const res = await axios.get('http://localhost:5000/api/v1/brands', {params: {page, term}})
  return res.data
})

export const allBrandsSlice = createSlice({
  name: 'allBrands',
  initialState: {
    data: null,
    pending: false,
    success: false,
    error: false,
    message: '',
  },

  reducers: {},

  extraReducers: {
    // Get All Brands
    [getAllBrands.pending]: (state) => {
      state.pending = true
      state.error = false
    },
    [getAllBrands.fulfilled]: (state, action) => {
      state.pending = false
      state.data = action.payload
      state.success = true
    },
    [getAllBrands.rejected]: (state, action) => {
      state.pending = null
      state.success = false
      state.error = true
      state.message = action.payload
    },
  },
})

export default allBrandsSlice.reducer
