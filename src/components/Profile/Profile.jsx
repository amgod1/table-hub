import React from 'react'
import { Button, Container } from 'react-bootstrap'
import TableLink from './TableLink'

const Profile = (props) => {
  return (
    <Container className='mt-5'>
      <h1>
        {(!props.lang)
          ? 'Profile of '
          : 'Профиль '
        }
        {props.login}
      </h1>
      <h6>
        {(!props.lang)
          ? 'Admin status: '
          : 'Админ: '
        }
        {props.admin}
      </h6>
      <h6>
        {(!props.lang)
          ? 'Block status: '
          : 'Блокировка: '
        }
        {props.blocked}
      </h6>
      {(!!props.clusters) 
        ? <TableLink 
          lang = {props.lang}
          login = {props.login} 
          clusters = {props.clusters} /> 
        : <></>}
      {(document.URL.includes(localStorage.login)) 
        ? <Button className='mt-3' href='/create-table'>
          {(!props.lang)
            ? 'Create table'
            : 'Создать таблицу'
          }
        </Button>
        : <></>}
    </Container>
  )
}

export default Profile