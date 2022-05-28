import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getSingleOfficine = createAsyncThunk('officines/getOne', async (id='') => {
  const res = await axios.get(`http://localhost:5000/api/v1/officines/${id}`)
  return res.data
})

export const SingleOfficineSlice = createSlice({
  name: 'singleOfficine',
  initialState: {
    officine: null,
    id: null,
    open: false,
    pending: false,
    success: false,
    error: false,
    message: '',
  },

  reducers: {
    officineOpen: (state, action) => {
      state.open = true
      state.id = action.payload
    },
    officineClose: (state) => {
      state.open = false
      state.id = null
    },
  },

  extraReducers: {
    // Get One Officine
    [getSingleOfficine.pending]: (state) => {
      state.pending = true
      state.error = false
    },
    [getSingleOfficine.fulfilled]: (state, action) => {
      state.pending = false
      state.officine = action.payload
      state.success = true
    },
    [getSingleOfficine.rejected]: (state, action) => {
      state.pending = null
      state.error = true
      state.success = false
      state.message = action.payload
    },
  },
})

export const { officineOpen, officineClose } = SingleOfficineSlice.actions
export default SingleOfficineSlice.reducer
