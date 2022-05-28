import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBrands } from '../../feature/brands/allBrandsSlice'
import { setPage } from '../../feature/globalSlice'
import { Box, CircularProgress, Pagination, Typography } from '@mui/material'
import Item from './Item'
import ItemContent from './ItemContent'

const ItemsList = () => {
  const dispatch = useDispatch()
  const pending = useSelector((state) => state.allBrands.pending)
  const success = useSelector((state) => state.allBrands.success)
  const data = useSelector((state) => state.allBrands.data)
  const searchTerm = useSelector((state) => state.global.searchTerm)
  const page = useSelector((state) => state.global.page)

  let content = null

  useEffect(() => {
    dispatch(getAllBrands({ page, term: searchTerm }))
  }, [dispatch, page, searchTerm])

  const handlePage = (event, value) => {
    dispatch(getAllBrands({page: value, term: searchTerm}))
    dispatch(setPage(value))
  }
  
  if (pending) {
    content = <CircularProgress />
  } else if (!pending && success) {
    content = (
      <>
        <Box sx={{ mr: 3 }}>
          <Typography variant='subtitle1' sx={{ textAlign: 'right' }}>
            {data.total}{' '}
            {data.total > 1 ? 'spécialités trouvés' : 'spécialité trouvé'}
          </Typography>

          <Box sx={{ my: 4 }}>
            {data.brands.map((brand) => {
              return (
                <Item
                  key={brand._id}
                  name={brand.name}
                  dci={brand.dci}
                  id={brand._id}
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
