import { useDispatch } from 'react-redux'
import { brandOpen, getSingleBrand } from '../../feature/brands/SingleBrandSlice'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'


const Item = ({ name, dci, id }) => {
  const dispatch = useDispatch()

  const handleOpen = () => {
    dispatch(brandOpen(id))
    dispatch(getSingleBrand(id))
  }

  return (
    <>
      <Card sx={{ my: 3 }}>
        <CardActionArea onClick={handleOpen}>
          <CardContent sx={{ textTransform: 'uppercase' }}>
            <Typography gutterBottom variant='h6' component='div'>
              {name}
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ fontStyle: 'italic'}}>
              {dci}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

export default Item
