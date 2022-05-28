import { Box } from '@mui/material'
import DciContent from './DciContent'

const display = () => {
  return (
    <Box
      flex={{ lg: 3 }}
      p={2}
      sx={{ display: { xs: 'none', lg: 'block' } }}
    >
      <Box position='fixed'>
        <DciContent />
      </Box>
    </Box>
  )
}

export default display
