import React from 'react'
import { Container } from 'react-bootstrap'
import LogInPanel from './LogInPanel'
import CreateAccountPanel from './CreateAccountPanel'

const LogIn = (props) => {
  return (
    <Container>
      <Container className='d-flex justify-content-around flex-column flex-md-row'>
        <LogInPanel
          theme = {props.theme}
          onLoginIn = {props.onLoginIn}
          isLogged = {props.isLogged}
          isBlocked = {props.isBlocked}
          loginIn = {props.loginIn}
          passwordIn = {props.passwordIn}
          onLoginInChange = {props.onLoginInChange}
          onPasswordInChange = {props.onPasswordInChange}
        />
        <CreateAccountPanel 
          theme = {props.theme}
          onCreateAccount = {props.onCreateAccount}
          createdAccount = {props.createdAccount}
          mailReg = {props.mailReg}
          loginReg = {props.loginReg}
          passwordReg = {props.passwordReg}
          onMailRegChange = {props.onMailRegChange}
          onLoginRegChange = {props.onLoginRegChange}
          onPasswordRegChange = {props.onPasswordRegChange}
          allEmails = {props.allUsersInfo.map (el => el.email)}
          allLogins = {props.allUsersInfo.map (el => el.login)}
        />
      </Container>
    </Container>
  )
}

export default LogIn