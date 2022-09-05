import React from 'react'
import { Alert, Container } from 'react-bootstrap'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const RouterWait = (props) => {
    return (
    <Container>
        <Box className='d-flex justify-content-center mt-5'>
          <CircularProgress />
        </Box>
        <Alert variant={'warning'} className='mt-5 h-100 text-center'>
            {(!props.lang)
                    ? <>
                      Page is loading or not found...
                      <br />
                      Check the correctness of the link
                    </>
                    : <>
                      Страница загружается или не найдена...
                      <br />
                      Проверить правильность ссылки
                    </>
            }
        </Alert>
    </Container>
  )
}

export default RouterWait