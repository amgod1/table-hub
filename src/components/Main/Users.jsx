import React from 'react'
import * as Axios from 'axios'
import { Alert, Button } from 'react-bootstrap'
import { Container, Table } from 'react-bootstrap'

const User = (props) => {

    const deleteUser = (id) => {
        Axios.delete(`http://localhost:3306/api/delete/${id}`)
    }

    const updateAdmin = (id, admin) => {
        Axios.put('http://localhost:3306/api/update/admin', {
            admin: admin,
            id: id
        })
    }

    const updateBlocked = (id, blocked) => {
        Axios.put('http://localhost:3306/api/update/blocked', {
            blocked: blocked,
            id: id
        })
    }

    return (
        <tr>
            <th className='text-center'>{props.id}</th>
            <th>{props.email}</th>
            <th>
                <a href={'/' + props.login} className=''>
                    {props.login}
                </a>
            </th>
            <th className='text-center'>
                <Button 
                    variant="success"
                    onClick={() => {
                        updateAdmin(props.id, props.admin)
                    }}
                    >{props.admin} 
                </Button>
            </th>
            <th className='text-center'>
                <Button 
                    variant="warning"
                    onClick={() => {
                        updateBlocked(props.id, props.blocked)
                    }}
                    >{props.blocked}
                </Button>
            </th>
            <th className='text-center'>
                <Button 
                    variant="danger" 
                    onClick={() => {
                        deleteUser(props.id); 
                    }}
                    >DELETE
                </Button>
            </th>
        </tr>
    )
}

const Users = (props) => {
    
    if (props.isAdmin && !props.isBlocked && !props.allUsersInfo) {
        return (
            <Container>
                <Alert variant={'info'} className='mt-5 h-100 text-center'>
                    LOADING INFO...
                </Alert>
            </Container>
        )
    } else if (props.isAdmin && !props.isBlocked && !!props.allUsersInfo ) {
        let newUsersInfo = JSON.parse(JSON.stringify(props.allUsersInfo))
        let renderUsers = newUsersInfo.map(el => <User 
            key={el.id} 
            id={el.id} 
            email={el.email} 
            login={el.login} 
            admin={el.admin} 
            blocked={el.blocked} 
            userId={props.userId}
        />)
        return (
            <Container>
                <h1 className='mt-5'>Admin menu:</h1>
                <Table striped bordered hover responsive="lg" className='mt-3' variant={(props.theme) ? 'dark' : ''}>
                    <thead>
                        <tr>
                        <th className='text-center'>id</th>
                        <th>Email</th>
                        <th>Login</th>
                        <th className='text-center'>Admin</th>
                        <th className='text-center'>Blocked</th>
                        <th className='text-center'>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        { renderUsers }
                    </tbody>
                </Table>
            </Container>
        )
    } else if ((!props.isAdmin && props.isLogged && !props.logOutNumber) 
        || (!props.isAdmin && !props.isLogged && !props.logOutNumber)
        || (!props.isAdmin && !props.isLogged && props.logOutNumber)) {
        return (
            <Container>
                <Alert variant={'danger'} className='mt-5 h-100 text-center'>
                    YOU DON'T HAVE ACCESS TO THIS PAGE!!!
                </Alert>
            </Container>
        )
    }
}

export default Users