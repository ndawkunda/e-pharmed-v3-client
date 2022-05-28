import { useDispatch } from 'react-redux'
import { setMobileMenu, setPage, setSearchTerm } from '../feature/globalSlice'
import { AppBar, Box, InputBase, styled, Toolbar, Typography } from '@mui/material'
import { HealingSharp, Menu } from '@mui/icons-material'

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
})

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '60%',
}))

const Topbar = () => {
  const dispatch = useDispatch()
  
  const handleChange = (e) => {
    setTimeout(() => {
      dispatch(setSearchTerm(e.target.value))
      dispatch(setPage(1))
    }, 1500)
  }

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          e-Pharmed
        </Typography>
        <HealingSharp sx={{ display: { xs: 'block', sm: 'none' } }} />

        <Search>
          <InputBase placeholder='Recherche...' onChange={handleChange} />
        </Search>

        <Box sx={{ display: { sm: 'block', lg: 'none' } }}>
          <Menu
            fontSize='large'
            onClick={() => dispatch(setMobileMenu(true))}
            sx={{ cursor: 'pointer' }}
          />
        </Box>
      </StyledToolbar>
    </AppBar>
  )
}

export default Topbar
