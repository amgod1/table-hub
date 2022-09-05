import { createAction } from "@reduxjs/toolkit"
import Axios from 'axios'

const LOG_IN_ACCOUNT = 'LOG_IN_ACCOUNT'
const LOG_OUT_ACCOUNT = 'LOG_OUT_ACCOUNT'
const CREATE_ACCOUNT = 'CREATE_ACCOUNT'
const UPDATE_LOGIN_IN = 'UPDATE_LOGIN_IN' 
const UPDATE_PASSWORD_IN = 'UPDATE_PASSWORD_IN' 
const UPDATE_MAIL_REG = 'UPDATE_MAIL_REG'
const UPDATE_LOGIN_REG = 'UPDATE_LOGIN_REG'
const UPDATE_PASSWORD_REG = 'UPDATE_PASSWORD_REG'
const ADMIN_YOURSELF = 'ADMIN_YOURSELF'

let initialState = {
    userInfo: '',
    mailReg:'',
    loginReg:'',
    passwordReg:'',
    loginIn:'',
    passwordIn:'',
    logOutNumber: 0,
    createdAccount: 0,
    headerInfo: {
        isBlocked: 0,
        isLogged: 0,
        isAdmin: 0
    }
}

if (!!localStorage.getItem('userInfo') && JSON.parse(localStorage.userInfo).blocked === 0) {
    initialState.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    initialState.headerInfo.isBlocked = initialState.userInfo.blocked
    initialState.headerInfo.isLogged = 1
    initialState.headerInfo.isAdmin = initialState.userInfo.admin
}

const logInReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_ACCOUNT:
            if (action.payload.info.blocked === 0) {
                return { ...state, 
                    userInfo: {...action.payload.info}, 
                    loginIn: '', 
                    passwordIn: '', 
                    headerInfo: {...state.headerInfo, isBlocked: action.payload.info.blocked, isLogged: 1, isAdmin: action.payload.info.admin}
                }
            } else {
                return { ...state, 
                    userInfo: {...action.payload.info}, 
                    loginIn: '', 
                    passwordIn: '', 
                    headerInfo: {...state.headerInfo, isBlocked: action.payload.info.blocked, isLogged: 0, isAdmin: action.payload.info.admin}
                } 
            }
        case LOG_OUT_ACCOUNT:
            localStorage.removeItem('userInfo')
            localStorage.removeItem('login')
            return {...state, userInfo: '', logOutNumber: 1, headerInfo: {isBlocked: 0, isLogged: 0, isAdmin: 0} }
        case CREATE_ACCOUNT: 
            Axios.post('http://localhost:3306/api/insert', {
                mailReg: action.payload.mailReg,
                loginReg: action.payload.loginReg,
                passwordReg: action.payload.passwordReg
            })
            return {...state, mailReg: '', loginReg: '', passwordReg: '', createdAccount: 1 }
        case UPDATE_LOGIN_IN:
            return { ...state, loginIn: action.payload.newLoginIn }
        case UPDATE_PASSWORD_IN:
            return { ...state, passwordIn: action.payload.newPasswordIn }
        case UPDATE_MAIL_REG:
            return { ...state, mailReg: action.payload.newMailReg }
        case UPDATE_LOGIN_REG:
            return { ...state, loginReg: action.payload.newLoginReg }
        case UPDATE_PASSWORD_REG:
            return { ...state, passwordReg: action.payload.newPasswordReg }
        case ADMIN_YOURSELF:
            if (action.payload.newInfo.blocked === 1) { 
                localStorage.clear()
                return {...state, userInfo: '', headerInfo: {isBlocked: 1, isLogged: 0, isAdmin: 0} }
            }
            localStorage.setItem('userInfo', JSON.stringify(action.payload.newInfo))
            return {...state, userInfo: {...action.payload.newInfo}, headerInfo: {...state.headerInfo, isBlocked: action.payload.newInfo.blocked, isAdmin: action.payload.newInfo.admin}}
        default:
            return state
    }
}

export const logInAccountAC = createAction (LOG_IN_ACCOUNT, function prepare(info) { return { payload: {info} }})
export const logOutAccountAC = createAction (LOG_OUT_ACCOUNT)
export const createAccountAC = createAction (CREATE_ACCOUNT, function prepare(mailReg, loginReg, passwordReg) { return { payload: {mailReg, loginReg, passwordReg} }})
export const enterLoginInAC = createAction (UPDATE_LOGIN_IN, function prepare(newLoginIn) { return { payload: {newLoginIn} }})
export const enterPasswordInAC = createAction (UPDATE_PASSWORD_IN, function prepare(newPasswordIn) { return { payload: {newPasswordIn} }})
export const enterMailRegAC = createAction (UPDATE_MAIL_REG, function prepare(newMailReg) { return { payload: {newMailReg} }})
export const enterLoginRegAC = createAction (UPDATE_LOGIN_REG, function prepare(newLoginReg) { return { payload: {newLoginReg} }})
export const enterPasswordRegAC = createAction (UPDATE_PASSWORD_REG, function prepare(newPasswordReg) { return { payload: {newPasswordReg} }})
export const adminYourselfAC = createAction (ADMIN_YOURSELF, function prepare(newInfo) { return { payload: {newInfo} }})

export default logInReducer