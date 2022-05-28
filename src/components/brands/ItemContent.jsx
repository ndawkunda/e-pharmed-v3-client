import { useDispatch, useSelector } from 'react-redux'
import { brandClose } from '../../feature/brands/SingleBrandSlice'
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

  const open = useSelector((state) => state.singleBrand.open)
  const pending = useSelector((state) => state.singleBrand.pending)
  const success = useSelector((state) => state.singleBrand.success)
  const brand = useSelector((state) => state.singleBrand.brand)
  let content = null

  const handleClose = () => {
    dispatch(brandClose())
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
          {brand.name}
          <Typography>{brand.dci}</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText p={5}>
            <Section>
              <Divider textAlign='left'>
                <Title variant='h3' textColor='primary'>
                  Indications
                </Title>
              </Divider>
              <Content variant='body'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: brand.indications,
                  }}
                />
              </Content>
            </Section>
            <Section>
              <Divider textAlign='left'>
                <Title variant='h3'>Dosage</Title>
              </Divider>
              <Content variant='body'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: brand.dosage,
                  }}
                />
              </Content>
            </Section>
            <Section>
              <Divider textAlign='left'>
                <Title variant='h3'>Effets indésirables</Title>
              </Divider>
              <Content variant='body'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: brand.effets_indes,
                  }}
                />
              </Content>
            </Section>
            <Section>
              <Divider textAlign='left'>
                <Title variant='h3'>Contre-indications</Title>
              </Divider>
              <Content variant='body'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: brand.contre_indic,
                  }}
                />
              </Content>
            </Section>
            <Section>
              <Divider textAlign='left'>
                <Title variant='h3'>Précautions</Title>
              </Divider>
              <Content variant='body'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: brand.precautions,
                  }}
                />
              </Content>
            </Section>
            <Section>
              <Divider textAlign='left'>
                <Title variant='h3'>Intéractions</Title>
              </Divider>
              <Content variant='body'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: brand.interactions,
                  }}
                />
              </Content>
            </Section>
            <Section>
              <Divider textAlign='left'>
                <Title variant='h3'>Surdosage</Title>
              </Divider>
              <Content variant='body'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: brand.surdosage,
                  }}
                />
              </Content>
            </Section>
            <Section>
              <Divider textAlign='left'>
                <Title variant='h3'>Grossesse - Allaitement</Title>
              </Divider>
              <Content variant='body'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: brand.grossesse_allaitement,
                  }}
                />
              </Content>
            </Section>
            <Section>
              <Divider textAlign='left'>
                <Title variant='h3'>Aspect et forme</Title>
              </Divider>
              <Content variant='body'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: brand.aspect_forme,
                  }}
                />
              </Content>
            </Section>
            <Section>
              <Divider textAlign='left'>
                <Title variant='h3'>Composition</Title>
              </Divider>
              <Content variant='body'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: brand.composition,
                  }}
                />
              </Content>
            </Section>
            <Section>
              <Divider textAlign='left'>
                <Title variant='h3'>Mécanisme</Title>
              </Divider>
              <Content variant='body'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: brand.mecanisme,
                  }}
                />
              </Content>
            </Section>
            <Section>
              <Divider textAlign='left'>
                <Title variant='h3'>Autres informations</Title>
              </Divider>
              <Content variant='body'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: brand.autres_info,
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
