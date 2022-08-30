import LogIn from './LogIn'
import { connect } from 'react-redux'
import { logInAccountAC, createAccountAC, enterLoginInAC, enterPasswordInAC, enterMailRegAC, enterLoginRegAC, enterPasswordRegAC } from '../../redux/LogIn-Reducer'

let mapStateToProps = (state) => {
    return {
        isBlocked: state.logInPage.headerInfo.isBlocked,
        isLogged: state.logInPage.headerInfo.isLogged,
        createdAccount: state.logInPage.createdAccount,
        loginIn: state.logInPage.loginIn,
        passwordIn: state.logInPage.passwordIn,
        mailReg: state.logInPage.mailReg,
        loginReg: state.logInPage.loginReg,
        passwordReg: state.logInPage.passwordReg,
        allUsersInfo: state.appPage.allUsersInfo,
        theme: state.appPage.theme,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onLoginIn: (i) => dispatch(logInAccountAC(i)),
        onCreateAccount: (m, l, p) => dispatch(createAccountAC(m, l, p)),
        onLoginInChange: (e) => dispatch(enterLoginInAC(e)),
        onPasswordInChange: (e) => dispatch(enterPasswordInAC(e)),
        onMailRegChange: (e) => dispatch(enterMailRegAC(e)),
        onLoginRegChange: (e) => dispatch(enterLoginRegAC(e)),
        onPasswordRegChange: (e) => dispatch(enterPasswordRegAC(e))
    }
}

const LogInContainer = connect(mapStateToProps, mapDispatchToProps)(LogIn)

export default LogInContainer