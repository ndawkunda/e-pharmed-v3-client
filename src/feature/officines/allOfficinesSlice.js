import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export const getAllOfficines = createAsyncThunk('officines/getAll', async({page, term}) => {
  const res = await axios.get(`${API_BASE_URL}/officines`, {
    params: { page, term },
  })
  return res.data
})

export const allOfficinesSlice = createSlice({
  name: 'allOfficines',
  initialState: {
    data: null,
    pending: false,
    success: false,
    error: false,
    message: '',
  },

  reducers: {},

  extraReducers: {
    // Get All Officines
    [getAllOfficines.pending]: (state) => {
      state.pending = true
      state.error = false
    },
    [getAllOfficines.fulfilled]: (state, action) => {
      state.pending = false
      state.data = action.payload
      state.success = true
    },
    [getAllOfficines.rejected]: (state, action) => {
      state.pending = null
      state.success = false
      state.error = true
      state.message = action.payload
    },
  },
})

export default allOfficinesSlice.reducer
