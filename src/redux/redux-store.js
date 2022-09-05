import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import logInReducer from '../redux/LogIn-Reducer'
import appReducer from './App-Reducer'

let allReducers = combineReducers({
    appPage: appReducer,
    logInPage: logInReducer
})

let store = configureStore({
    reducer: allReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    })
})

window.store = store
export default store