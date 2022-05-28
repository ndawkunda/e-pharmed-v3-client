import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDcis } from '../../feature/dcis/allDcisSlice'
import { setPage } from '../../feature/globalSlice'
import { Box, CircularProgress, Pagination, Typography } from '@mui/material'
import Item from './Item'
import ItemContent from './ItemContent'

const ItemsList = () => {
  const dispatch = useDispatch()
  const pending = useSelector((state) => state.allDcis.pending)
  const success = useSelector((state) => state.allDcis.success)
  const data = useSelector((state) => state.allDcis.data)
  const searchTerm = useSelector((state) => state.global.searchTerm)
  const page = useSelector((state) => state.global.page)

  let content = null

  useEffect(() => {
    dispatch(getAllDcis({ page, term: searchTerm }))
  }, [dispatch, page, searchTerm])

  const handlePage = (event, value) => {
    dispatch(getAllDcis({page: value, term: searchTerm}))
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
            {data.total > 1
              ? 'principes actifs trouvés'
              : 'principe actif trouvé'}
          </Typography>

          <Box sx={{ my: 4 }}>
            {data.dcis.map((dci) => {
              return <Item key={dci._id} name={dci.name} id={dci._id} />
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
