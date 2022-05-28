import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL

export const getSingleMedicalTerm = createAsyncThunk('medicalTerms/getOne', async (id) => {
  const res = await axios.get(`${BASE_URL}/medical_terms/${id}`)
  return res.data
})

export const SingleMedicalTermSlice = createSlice({
  name: 'singleMedicalTerm',
  initialState: {
    medicalTerm: null,
    id: null,
    open: false,
    pending: false,
    success: false,
    error: false,
    message: '',
  },

  reducers: {
    medicalTermOpen: (state, action) => {
      state.open = true
      state.id = action.payload
    },
    medicalTermClose: (state) => {
      state.open = false
      state.id = null
    },
  },

  extraReducers: {
    // Get One MedicalTerm
    [getSingleMedicalTerm.pending]: (state) => {
      state.pending = true
      state.error = false
    },
    [getSingleMedicalTerm.fulfilled]: (state, action) => {
      state.pending = false
      state.medicalTerm = action.payload
      state.success = true
    },
    [getSingleMedicalTerm.rejected]: (state, action) => {
      state.pending = null
      state.error = true
      state.success = false
      state.message = action.payload
    },
  },
})

export const { medicalTermOpen, medicalTermClose } = SingleMedicalTermSlice.actions
export default SingleMedicalTermSlice.reducer
