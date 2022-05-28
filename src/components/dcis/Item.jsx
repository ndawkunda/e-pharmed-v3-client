import { useDispatch } from 'react-redux'
import { dciOpen, getSingleDci } from '../../feature/dcis/SingleDciSlice'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'


const Item = ({ name, id }) => {
  const dispatch = useDispatch()

  const handleOpen = () => {
    dispatch(dciOpen(id))
    dispatch(getSingleDci(id))
  }

  return (
    <>
      <Card sx={{ my: 3 }}>
        <CardActionArea onClick={handleOpen}>
          <CardContent>
            <Typography gutterBottom variant='body1' component='div' sx={{ textTransform: 'uppercase'}}>
              {name}
            </Typography>
            {/* <Typography variant='body2' color='text.secondary'>
              Antalgique
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

export default Item
