import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export const getSingleBrand = createAsyncThunk('brands/getOne', async (id='') => {
  const res = await axios.get(`${API_BASE_URL}/api/v1/brands/${id}`)
  return res.data
})

export const SingleBrandSlice = createSlice({
  name: 'singleBrand',
  initialState: {
    brand: null,
    id: null,
    open: false,
    pending: false,
    success: false,
    error: false,
    message: '',
  },

  reducers: {
    brandOpen: (state, action) => {
      state.open = true
      state.id = action.payload
    },
    brandClose: (state) => {
      state.open = false
      state.id = null
    },
  },

  extraReducers: {
    // Get One Brand
    [getSingleBrand.pending]: (state) => {
      state.pending = true
      state.error = false
    },
    [getSingleBrand.fulfilled]: (state, action) => {
      state.pending = false
      state.brand = action.payload
      state.success = true
    },
    [getSingleBrand.rejected]: (state, action) => {
      state.pending = null
      state.error = true
      state.success = false
      state.message = action.payload
    },
  },
})

export const { brandOpen, brandClose } = SingleBrandSlice.actions
export default SingleBrandSlice.reducer
