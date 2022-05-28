import { createSlice } from '@reduxjs/toolkit'

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    searchTerm: '',
    page: 1,
    mobileMenu: false,
  },

  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    setMobileMenu: (state, action) => {
      state.mobileMenu = action.payload
    },
  },

  extraReducers: {},
})

export const { setPage, setSearchTerm, setMobileMenu } = globalSlice.actions
export default globalSlice.reducer
