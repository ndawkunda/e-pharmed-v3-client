import { configureStore } from "@reduxjs/toolkit"
import globalReducer from '../feature/globalSlice'
import allDcisReducer from '../feature/dcis/allDcisSlice'
import SingleDciReducer from '../feature/dcis/SingleDciSlice'
import allBrandsReducer from '../feature/brands/allBrandsSlice'
import SingleBrandReducer from '../feature/brands/SingleBrandSlice'
import allMedicalTermsReducer from '../feature/medicalTerms/allMedicalTermsSlice'
import SingleMedicalTermReducer from '../feature/medicalTerms/SingleMedicalTermSlice'
import allOfficinesReducer from '../feature/officines/allOfficinesSlice'
import SingleOfficineReducer from '../feature/officines/SingleOfficineSlice'

export default configureStore({
  reducer: {
    allDcis: allDcisReducer,
    singleDci: SingleDciReducer,
    allBrands: allBrandsReducer,
    singleBrand: SingleBrandReducer,
    allMedicalTerms: allMedicalTermsReducer,
    singleMedicalTerm: SingleMedicalTermReducer,
    allOfficines: allOfficinesReducer,
    singleOfficine: SingleOfficineReducer,
    global: globalReducer,
  },
})