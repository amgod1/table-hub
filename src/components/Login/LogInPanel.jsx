import { React, useState } from 'react'
import * as Axios from 'axios'
import FormControl from './FormControl'
import LogInModal from './LogInModal'
import { Alert, Row, Button } from 'react-bootstrap'

const LogInPanel = (props) => {
    const onLoginIn = () => {
        Axios.get('http://localhost:3306/api/get').then((response) => {
            let user = response.data.filter(el => el.login === props.loginIn && el.password === props.passwordIn)
            if (user.length === 1) { 
                if (user[0].blocked === 0) { 
                    localStorage.setItem('userInfo', JSON.stringify(user[0]))
                    localStorage.setItem('login', user[0].login) 
                    props.onLoginIn(user[0])
                } else { 
                    (!props.lang)
                        ? setError('Account with this login is blocked! Create new one!')
                        : setError('Аккаунт с данным логином заблокирован! Создайте новый!') 
                    handleShow() 
                    props.onLoginInChange('')
                    props.onPasswordInChange('')
                }
            } else { 
                (!props.lang)
                    ? setError('Invalid login or password') 
                    : setError('Неверный логин или пароль') 
                    
                handleShow() 
            }
        })
    }
  
    let onLoginInChange = (e) => {
        let text = e.target.value
        props.onLoginInChange(text)
    }
  
    let onPasswordInChange = (e) => {
        let text = e.target.value
        props.onPasswordInChange(text)
    }

    let loginInput = [
        {key: 1, type: 'text', placeholder: 'login', value: props.loginIn, onChange: onLoginInChange},
        {key: 2, type: 'password', placeholder: 'password', value: props.passwordIn, onChange: onPasswordInChange, id: 'inputPassword5'},
    ]

    if (props.lang) { loginInput[0].placeholder = 'логин'; loginInput[1].placeholder = 'пароль'}

    let loginMenu = loginInput.map(el => 
        <FormControl 
            placeholder={el.placeholder} 
            value={el.value} 
            onChange={el.onChange} 
            key={el.key} 
            id={el.id} 
            type={el.type} 
        />
    )

    const [show, setShow] = useState(false)
    const [error, setError] = useState()

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        (props.isLogged)
            ? <Alert variant={'success'} className='mt-5 h-100 text-center'>
                {(!props.lang)
                    ? `Congratulations!!! You logged in your account!`
                    : `Ура!!! Вы вошли в свой аккаунт!`
                }
            </Alert>
            : <>
            <div>
                <Row className='mt-5'>
                    {(!props.lang)
                        ? `Log in to your account:`
                        : `Войти в свой аккаунт:`
                    }  
                </Row>
                { loginMenu }
                <Row>
                    <Button className='mt-3' onClick={ onLoginIn }>
                        {(!props.lang)
                            ? `Log In`
                            : `Войти`
                        }
                        
                    </Button>
                </Row>
            </div>
                <LogInModal 
                    lang = {props.lang}
                    theme = {props.theme}
                    error = {error}
                    show = {show}
                    handleClose = {handleClose}
                />
            </>
    )
}

export default LogInPanel