import React from 'react'
import { Alert, Container } from 'react-bootstrap'

const RouterWait = () => {
  return (
    <Container>
        <Alert variant={'warning'} className='mt-5 h-100 text-center'>
            Page is loading or not found...
            <br />
            Check the correctness of the link
        </Alert>
    </Container>
  )
}

export default RouterWait