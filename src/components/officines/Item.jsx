import { useDispatch } from 'react-redux'
import { officineOpen, getSingleOfficine } from '../../feature/officines/SingleOfficineSlice'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'


const Item = ({ name, region, ville, id }) => {
  const dispatch = useDispatch()

  const handleOpen = () => {
    dispatch(officineOpen(id))
    dispatch(getSingleOfficine(id))
  }

  return (
    <>
      <Card sx={{ my: 3 }}>
        <CardActionArea onClick={handleOpen}>
          <CardContent>
            <Typography
              gutterBottom
              variant='body1'
              component='div'
              sx={{ textTransform: 'uppercase' }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: name,
                }}
              />
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{ fontStyle: 'italic' }}
            >
              {region}
              {' - '}
              {ville}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

export default Item
