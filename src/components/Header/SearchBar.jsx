import React from 'react'
import { Col, Form } from 'react-bootstrap'
import HomeIcon from '@mui/icons-material/Home'

const SearchBar = (props) => {
    return (
        <Col className='d-flex'>
            <a href='/' className='badge mx-2'>
                <HomeIcon fontSize='large' />
            </a>
            <Form.Control
                type='text' 
                value=''
                onClick={props.handleShow} 
                onChange={props.handleShow} 
                placeholder='Search by tags' />
        </Col>
    )
}

export default SearchBar