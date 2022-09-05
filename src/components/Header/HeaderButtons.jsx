import React from 'react'
import { Col, Button } from 'react-bootstrap'
import SwitchMade from './SwitchMade'
import ChangeLangButton from './ChangeLangButton'

const HeaderButtons = (props) => {
    return (
        (props.isBlocked || !props.isLogged) 
            ? <Col className='d-flex flex-row-reverse'>
                <Button variant="light">
                    <a className='text-decoration-none text-dark' href='/log-in'>
                        {(!props.lang)
                            ? 'LogIn'
                            : 'Войти'
                        }
                    </a>
                </Button>
                <ChangeLangButton onChangeLang = {props.onChangeLang} lang = {props.lang} />
                <SwitchMade onChangeTheme = {props.onChangeTheme} theme = {props.theme} />
            </Col>
            : <Col className='d-flex flex-row-reverse flex-wrap flex-sm-nowrap'>
                <Button variant="light" onClick={props.onLogOut}>
                    {(!props.lang)
                        ? 'LogOut'
                        : 'Выйти'
                    }
                </Button>
                <Button variant="light" className='mx-2'>
                    <a className='text-decoration-none text-dark' href={'/' + localStorage.login}>
                        {(!props.lang)
                            ? 'Profile'
                            : 'Профиль'
                        }
                    </a>
                </Button>
                <div className='d-flex'>
                    <SwitchMade onChangeTheme = {props.onChangeTheme} theme = {props.theme} />
                    <ChangeLangButton onChangeLang = {props.onChangeLang} lang = {props.lang} />
                    {(props.isAdmin)
                        ? <Button variant="light">
                        <a className='text-decoration-none text-dark' href='/users'>                            
                            {(!props.lang)
                                ? 'Users'
                                : 'Пользователи'
                            }
                        </a>
                        </Button>
                    : <></>
                    }
                </div>
            </Col>
    )
}

export default HeaderButtons