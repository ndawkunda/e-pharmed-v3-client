import { useDispatch, useSelector } from 'react-redux'
import { officineClose } from '../../feature/officines/SingleOfficineSlice'
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

  const open = useSelector((state) => state.singleOfficine.open)
  const pending = useSelector((state) => state.singleOfficine.pending)
  const success = useSelector((state) => state.singleOfficine.success)
  const officine = useSelector((state) => state.singleOfficine.officine)
  let content = null

  const handleClose = () => {
    dispatch(officineClose())
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
          {officine.pharmacie}
        </DialogTitle>
        <DialogContent>
          <DialogContentText p={5}>
            <Section>
              <Divider textAlign='left'>
                <Title variant='h3'>Région</Title>
              </Divider>
              <Content variant='body'>{officine.region}</Content>
            </Section>
            <Section>
              <Divider textAlign='left'>
                <Title variant='h3'>Ville</Title>
              </Divider>
              <Content variant='body'>{officine.ville}</Content>
            </Section>
            <Section>
              <Divider textAlign='left'>
                <Title variant='h3'>Adresse</Title>
              </Divider>
              <Content variant='body'>{officine.adresse}</Content>
            </Section>
            <Section>
              <Divider textAlign='left'>
                <Title variant='h3'>Téléphone</Title>
              </Divider>
              <Content variant='body'>{officine.tel}</Content>
            </Section>
            <Section>
              <Divider textAlign='left'>
                <Title variant='h3'>Titulaire</Title>
              </Divider>
              <Content variant='body'>
                {officine.titre} {officine.nom} {officine.prenom}
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
