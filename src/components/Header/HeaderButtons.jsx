import React from 'react'
import { Col, Button } from 'react-bootstrap'
import SwitchMade from './SwitchMade'

const HeaderButtons = (props) => {
    return (
        (props.isBlocked || !props.isLogged) 
            ? <Col className='d-flex flex-row-reverse'>
                <Button variant="light">
                    <a className='text-decoration-none text-dark' href='/log-in'>
                        LogIn
                    </a>
                </Button>
                <SwitchMade onChangeTheme = {props.onChangeTheme} theme = {props.theme} />
            </Col>
            : <Col className='d-flex flex-row-reverse'>
                    <Button variant="light" onClick={props.onLogOut}>
                        LogOut
                    </Button>
                    <Button variant="light" className='mx-2'>
                        <a className='text-decoration-none text-dark' href={'/' + localStorage.login}>
                            Profile
                        </a>
                    </Button>
                    {(props.isAdmin)
                        ? <Button variant="light">
                            <a className='text-decoration-none text-dark' href='/users'>
                                Users
                            </a>
                        </Button>
                        : <></>
                    }
                    <SwitchMade onChangeTheme = {props.onChangeTheme} theme = {props.theme} />
                </Col>
    )
}

export default HeaderButtons