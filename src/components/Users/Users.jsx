import React from 'react'
import { Alert } from 'react-bootstrap'
import { Container, Table } from 'react-bootstrap'
import User from './User'

const Users = (props) => {
    
    if (props.isAdmin && !!props.allUsersInfo) {
        let renderUsers = props.allUsersInfo.map(el => <User 
            key = {el.id} 
            id = {el.id} 
            email = {el.email} 
            login = {el.login} 
            admin = {el.admin} 
            blocked = {el.blocked} 
            userId = {props.userId}
            lang = {props.lang}
        />)

        return (
            <Container>
                <h1 className='mt-5'>
                    {!props.lang
                        ? 'Admin menu:'
                        : 'Панель администратора:'
                    }
                </h1>
                <Table striped bordered hover responsive="lg" className='mt-3' variant={(props.theme) ? 'dark' : ''}>
                    <thead>
                        <tr>
                        <th className='text-center'>id</th>
                        <th>
                            {!props.lang
                                ? 'Email'
                                : 'Почта'
                            }    
                        </th>
                        <th>
                            {!props.lang
                                ? 'Login'
                                : 'Логин'
                            }    
                        </th>
                        <th className='text-center'>
                            {!props.lang
                                ? 'Admin'
                                : 'Администратор'
                            }  
                        </th>
                        <th className='text-center'>
                            {!props.lang
                                ? 'Blocked'
                                : 'Блокировка'
                            } 
                        </th>
                        <th className='text-center'>
                            {!props.lang
                                ? 'DELETE'
                                : 'УДАЛИТЬ'
                            }    
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        { renderUsers }
                    </tbody>
                </Table>
            </Container>
        )
    } else return (
        <Container>
            <Alert variant={'danger'} className='mt-5 h-100 text-center'>
                YOU DON'T HAVE ACCESS TO THIS PAGE!!!
            </Alert>
        </Container>
    )
}

export default Users