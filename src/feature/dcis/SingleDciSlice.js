import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getSingleDci = createAsyncThunk('dcis/getOne', async (id='') => {
  const res = await axios.get(`http://localhost:5000/api/v1/dcis/${id}`)
  return res.data
})

export const SingleDciSlice = createSlice({
  name: 'singleDci',
  initialState: {
    dci: null,
    id: null,
    open: false,
    pending: false,
    success: false,
    error: false,
    message: '',
  },

  reducers: {
    dciOpen: (state, action) => {
      state.open = true
      state.id = action.payload
    },
    dciClose: (state) => {
      state.open = false
      state.id = null
    },
  },

  extraReducers: {
    // Get One Dci
    [getSingleDci.pending]: (state) => {
      state.pending = true
      state.error = false
    },
    [getSingleDci.fulfilled]: (state, action) => {
      state.pending = false
      state.dci = action.payload
      state.success = true
    },
    [getSingleDci.rejected]: (state, action) => {
      state.pending = null
      state.error = true
      state.success = false
      state.message = action.payload
    },
  },
})

export const { dciOpen, dciClose } = SingleDciSlice.actions
export default SingleDciSlice.reducer
