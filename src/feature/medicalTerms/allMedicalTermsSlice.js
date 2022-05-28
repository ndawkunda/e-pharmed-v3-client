import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL

export const getAllMedicalTerms = createAsyncThunk('medicalTerms/getAll', async({page, term}) => {
  const res = await axios.get(`${BASE_URL}/medical_terms`, {
    params: { page, term },
  })
  return res.data
})

export const allMedicalTermsSlice = createSlice({
  name: 'allMedicalTerms',
  initialState: {
    data: null,
    pending: false,
    success: false,
    error: false,
    message: '',
  },

  reducers: {},

  extraReducers: {
    // Get All MedicalTerms
    [getAllMedicalTerms.pending]: (state) => {
      state.pending = true
      state.error = false
    },
    [getAllMedicalTerms.fulfilled]: (state, action) => {
      state.pending = false
      state.data = action.payload
      state.success = true
    },
    [getAllMedicalTerms.rejected]: (state, action) => {
      state.pending = null
      state.success = false
      state.error = true
      state.message = action.payload
    },
  },
})

export default allMedicalTermsSlice.reducer
