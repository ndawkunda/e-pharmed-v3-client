import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL

export const getAllDcis = createAsyncThunk('dcis/getAll', async({page, term}) => {
  const res = await axios.get(`${BASE_URL}/dcis`, {params: {page, term}})
  return res.data
})

export const allDcisSlice = createSlice({
  name: 'allDcis',
  initialState: {
    data: null,
    pending: false,
    success: false,
    error: false,
    message: '',
  },

  reducers: {},

  extraReducers: {
    // Get All Dcis
    [getAllDcis.pending]: (state) => {
      state.pending = true
      state.error = false
    },
    [getAllDcis.fulfilled]: (state, action) => {
      state.pending = false
      state.data = action.payload
      state.success = true
    },
    [getAllDcis.rejected]: (state, action) => {
      state.pending = null
      state.success = false
      state.error = true
      state.message = action.payload
    },
  },
})

export default allDcisSlice.reducer
