import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import { Box, Stack } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { teal, pink } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: teal[800],
    },
    secondary: {
      main: pink[800],
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Topbar />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Sidebar />
          <Content />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default App
