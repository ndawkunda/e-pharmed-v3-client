import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOfficines } from '../../feature/officines/allOfficinesSlice'
import { setPage } from '../../feature/globalSlice'
import { Box, CircularProgress, Pagination, Typography } from '@mui/material'
import Item from './Item'
import ItemContent from './ItemContent'

const ItemsList = () => {
  const dispatch = useDispatch()
  const pending = useSelector((state) => state.allOfficines.pending)
  const success = useSelector((state) => state.allOfficines.success)
  const data = useSelector((state) => state.allOfficines.data)
  const searchTerm = useSelector((state) => state.global.searchTerm)
  const page = useSelector((state) => state.global.page)

  let content = null

  useEffect(() => {
    dispatch(getAllOfficines({ page, term: searchTerm }))
  }, [dispatch, page, searchTerm])

  const handlePage = (event, value) => {
    dispatch(getAllOfficines({page: value, term: searchTerm}))
    dispatch(setPage((value)))
  }
  
  if (pending) {
    content = <CircularProgress />
  } else if (!pending && success) {
    content = (
      <>
        <Box sx={{ mr: 3 }}>
          <Typography variant='subtitle1' sx={{ textAlign: 'right' }}>
            {data.total}{' '}
            {data.total > 1 ? 'pharmacies trouvés' : 'pharmacie actif trouvé'}
          </Typography>

          <Box sx={{ my: 4 }}>
            {data.officines.map((officine) => {
              return (
                <Item
                  key={officine._id}
                  name={officine.pharmacie}
                  region={officine.region}
                  ville={officine.ville}
                  id={officine._id}
                />
              )
            })}
          </Box>

          <Pagination
            count={data.pages}
            page={page}
            onChange={handlePage}
            color='primary'
            sx={{ display: 'flex', justifyContent: 'center' }}
          />
        </Box>

        <ItemContent />
      </>
    )
  }

  return (
    <Box >{content}</Box>
  )
}

export default ItemsList
