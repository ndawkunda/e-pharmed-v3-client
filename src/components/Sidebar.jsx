import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
} from '@mui/material'
import {
  Close,
  LibraryBooks,
  Medication,
  Spa,
  Store,
} from '@mui/icons-material'
import { setMobileMenu } from '../feature/globalSlice'

const LinkStyle = {
  textDecoration: 'none',
  color: 'inherit',
}

const Sidebar = () => {
  const dispatch = useDispatch()
  const mobileMenu = useSelector((state) => state.global.mobileMenu)

  const menuList = (
    <List>
      <Link to='/principes-actifs' style={LinkStyle}>
        <ListItem disablePadding>
          <ListItemButton component='span'>
            <ListItemIcon>
              <Spa />
            </ListItemIcon>
            <ListItemText primary='Principes actifs' />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link to='/specialites' style={LinkStyle}>
        <ListItem disablePadding>
          <ListItemButton component='span'>
            <ListItemIcon>
              <Medication />
            </ListItemIcon>
            <ListItemText primary='Spécialités' />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link to='/termes-medicaux' style={LinkStyle}>
        <ListItem disablePadding>
          <ListItemButton component='span'>
            <ListItemIcon>
              <LibraryBooks />
            </ListItemIcon>
            <ListItemText primary='Termes médicaux' />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link to='/pharmacies' style={LinkStyle}>
        <ListItem disablePadding>
          <ListItemButton component='span'>
            <ListItemIcon>
              <Store />
            </ListItemIcon>
            <ListItemText primary='Pharmacies' />
          </ListItemButton>
        </ListItem>
      </Link>
    </List>
  )

  return (
    <>
      <Drawer
        anchor='right'
        open={mobileMenu}
        onClose={() => dispatch(setMobileMenu(false))}
        sx={{ display: { sm: 'block', lg: 'none' } }}
      >
        <Box pl={2} pt={2}>
          <Close
            onClick={() => dispatch(setMobileMenu(false))}
            sx={{ cursor: 'pointer' }}
          />
        </Box>
        <Box p={2} pr={8}>
          {menuList}
        </Box>
      </Drawer>
      <Box
        flex={{ sm: 2, lg: 1 }}
        p={2}
        sx={{ display: { xs: 'none', lg: 'block' } }}
      >
        <Box position='fixed'>{menuList}</Box>
      </Box>
    </>
  )
}

export default Sidebar
