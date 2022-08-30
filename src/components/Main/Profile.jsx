import React from 'react'
import { Button, Container } from 'react-bootstrap'
import TableLink from './TableLink'

const Profile = (props) => {
  return (
    <Container className='mt-5'>
      <h1>
        Profile of {props.login}
      </h1>
      <h6>
        Admin status: {props.admin}
      </h6>
      <h6>
        Block status: {props.blocked}
      </h6>
      {(!!props.clusters) 
        ? <TableLink 
          login = {props.login} 
          clusters = {props.clusters} /> 
        : <></>}
      {(document.URL.includes(localStorage.login)) 
        ? <Button className='mt-3' href='/create-table'>
          Create table
        </Button>
        : <></>}
    </Container>
  )
}

export default Profile