import { LibraryBooks, Medication, Spa, Store } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { setMobileMenu, setPage, setSearchTerm } from '../feature/globalSlice'
import Dcis from './dcis/ItemsList'
import MedicalTerms from './medicalTerms/ItemsList'
import Brands from './brands/ItemsList'
import Officines from './officines/ItemsList'

const Content = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const [pageTitle, setPageTitle] = useState('')
  const [pageIcon, setPageIcon] = useState(null)
  const [path, setPath] = useState('')

  
  useEffect(() => {
    setPath(location.pathname)
    
    switch (path) {
      case '/principes-actifs':
        setPageTitle('Principes Actifs')
        setPageIcon(<Spa fontSize='large'/>)
        break
      case '/specialites':
        setPageTitle('Spécialités')
        setPageIcon(<Medication fontSize='large' />)
        break
      case '/termes-medicaux':
        setPageTitle('Termes médicaux')
        setPageIcon(<LibraryBooks fontSize='large' />)
        break
      case '/pharmacies':
        setPageTitle('Pharmacies')
        setPageIcon(<Store fontSize='large' />)
        break

      default:
        break
    }

    dispatch(setMobileMenu(false))
    dispatch(setPage(1))
    dispatch(setSearchTerm(''))
  }, [location, path, dispatch])


  return (
    <Box flex={4} p={2} pl={{ lg: 10 }}>
      <Typography
        variant='h4'
        my={4}
        sx={{ display: 'flex', gap: 2, opacity: 0.7 }}
      >
        {pageIcon} {pageTitle}
      </Typography>
      <Routes>
        <Route path='/' element={<Navigate to='/principes-actifs' />} />
        <Route path='principes-actifs' element={<Dcis />} />
        <Route path='specialites' element={<Brands />} />
        <Route path='termes-medicaux' element={<MedicalTerms />} />
        <Route path='pharmacies' element={<Officines />} />
      </Routes>
    </Box>
  )
}

export default Content
