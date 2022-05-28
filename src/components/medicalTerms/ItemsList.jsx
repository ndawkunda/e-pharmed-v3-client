import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMedicalTerms } from '../../feature/medicalTerms/allMedicalTermsSlice'
import { setPage } from '../../feature/globalSlice'
import { Box, CircularProgress, Pagination, Typography } from '@mui/material'
import Item from './Item'
import ItemContent from './ItemContent'

const ItemsList = () => {
  const dispatch = useDispatch()
  const pending = useSelector((state) => state.allMedicalTerms.pending)
  const success = useSelector((state) => state.allMedicalTerms.success)
  const data = useSelector((state) => state.allMedicalTerms.data)
  const searchTerm = useSelector((state) => state.global.searchTerm)
  const page = useSelector((state) => state.global.page)

  let content = null

  useEffect(() => {
    dispatch(getAllMedicalTerms({ page, term: searchTerm }))
  }, [dispatch, page, searchTerm])

  const handlePage = (event, value) => {
    dispatch(getAllMedicalTerms({page: value, term: searchTerm}))
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
            {data.total > 1
              ? 'termes trouvés'
              : 'terme trouvé'}
          </Typography>

          <Box sx={{ my: 4 }}>
            {data.medicalTerms.map((medicalTerm) => {
              return <Item key={medicalTerm._id} name={medicalTerm.term} id={medicalTerm._id} />
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
