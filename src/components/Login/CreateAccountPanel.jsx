import { React, useState } from 'react'
import FormControl from './FormControl'
import LogInModal from './LogInModal'
import { Alert, Row, Button } from 'react-bootstrap'

const CreateAccountPanel = (props) => {
    const onCreateAccount = () => {
  
        if (props.mailReg.length < 5) { setError('Mail is too short!'); handleShow(); return }
        else if (props.mailReg.length > 50) { setError('Mail is too long!'); handleShow(); return }
        else if (props.mailReg.includes(' ')) { setError('Mail can not contain space symbols!'); handleShow(); return }
        else if (!props.mailReg.includes('@')) { setError('Check the correctness of the mail! (@ symbol is missing)'); handleShow(); return }
        else if (props.allEmails.includes(props.mailReg)) { setError('Current email is already in use!'); handleShow(); return }
  
        else if (props.loginReg.length < 6) { setError('Login is too short!'); handleShow(); return }
        else if (props.loginReg.length > 30) { setError('Login is too long!'); handleShow(); return }
        else if (props.loginReg.includes(' ')) { setError('Login cannot contain space symbols!'); handleShow(); return }
        else if (props.allLogins.includes(props.loginReg)) { setError('Current login is already in use!'); handleShow(); return }
  
        else if (props.passwordReg.length < 6) { setError('Password is too short!'); handleShow(); return }
        else if (props.passwordReg.length > 30) { setError('Password is too long!'); handleShow(); return }
        else if (props.passwordReg.includes(' ')) { setError('Password can not contain space symbols!'); handleShow(); return }
  
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
  
    let registerInput = [
        {key: 1, type: 'email', placeholder: 'mail', value: props.mailReg, onChange: onMailRegChange},
        {key: 2, type: 'text', placeholder: 'login', value: props.loginReg, onChange: onLoginRegChange},
        {key: 3, type: 'text', placeholder: 'password', value: props.passwordReg, onChange: onPasswordRegChange},
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
                    Congratulations!!! You just created new account!
                </Alert>
                : 
                <div>
                    <Row className='mt-5'>
                        Or create new account:
                    </Row>
                    { registerMenu }
                    <Row>
                        <Button className='mt-3' onClick={ onCreateAccount }>
                            Create Account
                        </Button>
                    </Row>
                </div>}
            <LogInModal 
                theme = {props.theme}
                error = {error}
                show = {show}
                handleClose = {handleClose}
            />
        </>
    )
}

export default CreateAccountPanel