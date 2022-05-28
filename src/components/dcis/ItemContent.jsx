import { useDispatch, useSelector } from 'react-redux'
import { dciClose } from '../../feature/dcis/SingleDciSlice'
import { teal } from '@mui/material/colors'
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  styled,
  Typography,
} from '@mui/material'

const Section = styled(Box)({
  marginBottom: '2.5em',
})

const Title = styled(Typography)({
  color: teal[700],
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: '.5em',
  textTransform: 'uppercase',
})

const Content = styled(Typography)({
  fontSize: 20,
})

const ItemContent = () => {
  const dispatch = useDispatch()

  const open = useSelector((state) => state.singleDci.open)
  const pending = useSelector((state) => state.singleDci.pending)
  const success = useSelector((state) => state.singleDci.success)
  const dci = useSelector((state) => state.singleDci.dci)
  let content = null

  const handleClose = () => {
    dispatch(dciClose())
  }

  if (pending) {
    content = (
      <DialogContent>
        <CircularProgress />
      </DialogContent>
    )
  } else if (!pending && success) {
    content = (
      <>
        <DialogTitle sx={{ fontSize: 25, textTransform: 'uppercase' }}>
          {dci.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText p={5}>
            <Section>
              <Divider textAlign='left'>
                <Title variant='h3'>Mécanisme d&apos;action</Title>
              </Divider>
              <Content variant='body'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: dci.mecanisme,
                  }}
                />
              </Content>
            </Section>
            <Section>
              <Divider textAlign='left'>
                <Title variant='h3'>Usage</Title>
              </Divider>
              <Content variant='body'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: dci.usage,
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
    )
  }

  return (
    <Dialog maxWidth='lg' open={open} onClose={handleClose}>
      {content}
    </Dialog>
  )
}

export default ItemContent
