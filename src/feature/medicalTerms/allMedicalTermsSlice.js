import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export const getAllMedicalTerms = createAsyncThunk('medicalTerms/getAll', async({page, term='foi'}) => {
  const res = await axios.get(`${API_BASE_URL}/api/v1/medical_terms`, {
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
