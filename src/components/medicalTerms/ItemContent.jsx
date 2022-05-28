import { useDispatch, useSelector } from 'react-redux'
import { medicalTermClose } from '../../feature/medicalTerms/SingleMedicalTermSlice'
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  styled,
  Typography,
} from '@mui/material'

const Section = styled(Box)({
  marginBottom: '2.5em',
})

// const Title = styled(Typography)({
//   fontSize: 25,
//   fontWeight: 'bold',
//   marginBottom: '.5em',
// })

const Content = styled(Typography)({
  fontSize: 20,
})

const ItemContent = () => {
  const dispatch = useDispatch()

  const open = useSelector((state) => state.singleMedicalTerm.open)
  const pending = useSelector((state) => state.singleMedicalTerm.pending)
  const success = useSelector((state) => state.singleMedicalTerm.success)
  const medicalTerm = useSelector((state) => state.singleMedicalTerm.medicalTerm)
  let content = null

  const handleClose = () => {
    dispatch(medicalTermClose())
  }

  if (pending) {
    content = 
        <DialogContent>
          <CircularProgress />
        </DialogContent>
  } else if (!pending && success) {
    content = 
      <>
        <DialogTitle sx={{ fontSize: 25, textTransform: 'uppercase' }}>
          {medicalTerm.term}
        </DialogTitle>
        <DialogContent>
          <DialogContentText p={5} pb={0}>
            <Section>
              <Content variant='body'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: medicalTerm.definition,
                  }}
                />
              </Content>
            </Section>
          </DialogContentText>
          <Box
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          ></Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='error'>
            Fermer
          </Button>
        </DialogActions>
      </>
  }
  
  return (
    <Dialog maxWidth='lg' open={open} onClose={handleClose}>
      {content}
    </Dialog>
  )
}

export default ItemContent
