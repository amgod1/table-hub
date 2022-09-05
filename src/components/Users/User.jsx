import React from 'react'
import * as Axios from 'axios'
import { Button } from 'react-bootstrap'

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
                    >{!props.lang
                        ? 'DELETE'
                        : 'УДАЛИТЬ'
                    }
                </Button>
            </th>
        </tr>
    )
}

export default User