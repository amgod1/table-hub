import { React, useState } from 'react'
import FormControl from './FormControl'
import LogInModal from './LogInModal'
import { Alert, Row, Button } from 'react-bootstrap'

const CreateAccountPanel = (props) => {
    const onCreateAccount = () => {
  
        if (props.mailReg.length < 5) { 
            (!props.lang) ? setError('Mail is too short!') : setError('Слишком короткая почта!')
            handleShow(); return 
        } else if (props.mailReg.length > 50) { 
            (!props.lang) ? setError('Mail is too long!') : setError('Слишком длинная почта!')
            handleShow(); return 
        } else if (props.mailReg.includes(' ')) { 
            (!props.lang) ? setError('Mail can not contain space symbols!') : setError('Почта не может содержать пробелы!')
            handleShow(); return 
        } else if (!props.mailReg.includes('@')) { 
            (!props.lang) 
                ? setError('Check the correctness of the mail! (@ symbol is missing)')
                : setError('Проверьте правильность почты! (не найден символ @)')
            handleShow(); return 
        } else if (props.allEmails.includes(props.mailReg)) { 
            (!props.lang) ? setError('Current email is already in use!') : setError('Эта почта уже используется!') 
            handleShow(); return 
        }
  
        else if (props.loginReg.length < 6) { 
            (!props.lang) ? setError('Login is too short!') : setError('Логин слишком короткий!')
            handleShow(); return 
        } else if (props.loginReg.length > 30) { 
            (!props.lang) ? setError('Login is too long!') : setError('Логин слишком длинный!')
            handleShow(); return 
        } else if (props.loginReg.includes(' ')) { 
            (!props.lang) ? setError('Login cannot contain space symbols!') : setError('Логин не может содержать пробелы!')
            handleShow(); return }
        else if (props.allLogins.includes(props.loginReg)) { 
            (!props.lang) ? setError('Current login is already in use!') : setError('Этот логин уже используется!') 
            handleShow(); return 
        }

        else if (props.passwordReg.length < 6) { 
            (!props.lang) ? setError('Password is too short!') : setError('Пароль слишком короткий!')
            handleShow(); return 
        } else if (props.passwordReg.length > 30) { 
            (!props.lang) ? setError('Password is too long!') : setError('Пароль слишком длинный!')
            handleShow(); return 
        } else if (props.passwordReg.includes(' ')) { 
            (!props.lang) ? setError('Password can not contain space symbols!') : setError('Пароль не может содержать пробелы!')
            handleShow(); return 
        }
  
        let mail = props.mailReg
        let login = props.loginReg
        let password = props.passwordReg
        props.onCreateAccount(mail, login, password)
    }
  
    let onMailRegChange = (e) => {
        let text = e.target.value
        props.onMailRegChange(text)
    }
  
    let onLoginRegChange = (e) => {
        let text = e.target.value
        props.onLoginRegChange(text)
    }
  
    let onPasswordRegChange = (e) => {
        let text = e.target.value
        props.onPasswordRegChange(text)
    }
  
    let registerInput = (!props.lang)
        ? [
            {key: 1, type: 'email', placeholder: 'mail', value: props.mailReg, onChange: onMailRegChange},
            {key: 2, type: 'text', placeholder: 'login', value: props.loginReg, onChange: onLoginRegChange},
            {key: 3, type: 'text', placeholder: 'password', value: props.passwordReg, onChange: onPasswordRegChange}
        ]
        : [
            {key: 1, type: 'email', placeholder: 'почта', value: props.mailReg, onChange: onMailRegChange},
            {key: 2, type: 'text', placeholder: 'логин', value: props.loginReg, onChange: onLoginRegChange},
            {key: 3, type: 'text', placeholder: 'пароль', value: props.passwordReg, onChange: onPasswordRegChange}
        ]

    let registerMenu = registerInput.map(el => 
        <FormControl 
            placeholder={el.placeholder} 
            value={el.value} 
            onChange={el.onChange} 
            key={el.key} 
            type={el.type} 
        />
    )

    const [show, setShow] = useState(false)
    const [error, setError] = useState()

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
  
    return (
        <>
            {(props.createdAccount)
                ? <Alert variant={'success'} className='mt-5 h-100 text-center'>
                    {(!props.lang)
                        ? 'Congratulations!!! You just created new account!'
                        : 'Поздравляем!!! Вы только что создали новый аккаунт!'
                    }
                </Alert>
                : 
                <div>
                    <Row className='mt-5'>
                        {(!props.lang)
                            ? 'Or create new one:'
                            : 'Или создайте новый:'
                        }
                    </Row>
                    { registerMenu }
                    <Row>
                        <Button className='mt-3' onClick={ onCreateAccount }>
                            {(!props.lang)
                                ? 'Create Account'
                                : 'Создать аккаунт'
                            }
                        </Button>
                    </Row>
                </div>}
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

export default CreateAccountPanel