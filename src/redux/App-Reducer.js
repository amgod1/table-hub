import React from "react"
import { createAction } from "@reduxjs/toolkit"
import Axios from 'axios'

const GET_USERS_INFO = 'GET_USERS_INFO'
const CHANGE_THEME = 'CHANGE_THEME'
const FILTER_TABLE = 'FILTER_TABLE' 
const FILTER_KEY = 'FILTER_KEY' 
const GET_COLLECTIONS_INFO = 'GET_COLLECTIONS_INFO'
const GET_COLUMNS_INFO = 'GET_COLUMNS_INFO'
const GET_SEARCH_DATA = 'GET_SEARCH_DATA'
const CHANGE_TITLE = 'CHANGE_TITLE'
const GET_COMMENTS_INFO = 'GET_COMMENTS_INFO'
const RENDER_COMMENT = 'RENDER_COMMENT'
const SET_COLLECTIONS = 'SET_COLLECTIONS'
const UPDATE_TABLE_HEAD = 'UPDATE_TABLE_HEAD'

let initialState = {
    searchData: '',
    allUsersInfo: '',
    allCollectionsInfo: '',
    allColumnsInfo: '',
    allCommentsInfo: '',
    filterTable: 1,
    filterKey: '',
    theme: false,
}

if (localStorage.theme === undefined) { localStorage.theme = false; initialState.theme = false} 
else { initialState.theme = (localStorage.theme === 'true') ? true : false }

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_INFO:
            return {...state, allUsersInfo: action.payload.allUsers }
        case CHANGE_THEME:
            localStorage.theme = action.payload.theme
            return {...state, theme: action.payload.theme}
        case FILTER_TABLE:
            return {...state, filterTable: action.payload.filterTable}
        case FILTER_KEY:
            return {...state, filterKey: action.payload.filterKey}
        case GET_COLLECTIONS_INFO:
            return {...state, allCollectionsInfo: action.payload.allCollections }
        case GET_COLUMNS_INFO:
            return {...state, allColumnsInfo: action.payload.allColumns }
        case GET_SEARCH_DATA:
            return {...state, searchData: action.payload.searchData}
        case CHANGE_TITLE:
            Axios.put('http://localhost:3306/api/update/columns/title', { 
                title: action.payload.title, 
                description: action.payload.description, 
                link: action.payload.link
            })
            return {...state}
        case GET_COMMENTS_INFO:
            return {...state, allCommentsInfo: action.payload.allComments }
        case RENDER_COMMENT:
            console.log('SETTING COMMENT MY G', action.payload)
            Axios.post('http://localhost:3306/api/insert/comments', { 
                login: action.payload.login,
                link: action.payload.link,
                text: action.payload.comment
            })
            return {...state}
        case SET_COLLECTIONS:
            Axios.post('http://localhost:3306/api/insert/collections', {
                admin: action.payload.admin, 
                link: action.payload.link, 
                tags: action.payload.tags
            })
            Axios.post('http://localhost:3306/api/insert/columns', { 
                title: action.payload.title,
                description: action.payload.description,
                link: action.payload.link
            })
            return {...state }
        case UPDATE_TABLE_HEAD:
            if (action.payload.tags === undefined) {
                Axios.put('http://localhost:3306/api/update/columns', { 
                    number1: action.payload.number1, 
                    number2: action.payload.number2, 
                    number3: action.payload.number3, 
                    string1: action.payload.string1, 
                    string2: action.payload.string2, 
                    string3: action.payload.string3, 
                    text1: action.payload.text1, 
                    text2: action.payload.text2, 
                    text3: action.payload.text3, 
                    boolean1: action.payload.boolean1, 
                    boolean2: action.payload.boolean2, 
                    boolean3: action.payload.boolean3, 
                    date1: action.payload.date1, 
                    date2: action.payload.date2, 
                    date3: action.payload.date3,
                    link: action.payload.link
                })
            } else if (action.payload.admin === undefined) {
                Axios.put('http://localhost:3306/api/update/collections', {
                    number1: action.payload.number1, 
                    number2: action.payload.number2, 
                    number3: action.payload.number3, 
                    string1: action.payload.string1, 
                    string2: action.payload.string2, 
                    string3: action.payload.string3, 
                    text1: action.payload.text1, 
                    text2: action.payload.text2, 
                    text3: action.payload.text3, 
                    boolean1: action.payload.boolean1, 
                    boolean2: action.payload.boolean2, 
                    boolean3: action.payload.boolean3, 
                    date1: action.payload.date1, 
                    date2: action.payload.date2, 
                    date3: action.payload.date3,
                    link: action.payload.link,
                    tags: action.payload.tags,
                    id: action.payload.id
                })
            } else if (!!action.payload.admin && !!action.payload.tags) {
                console.log(action.payload)
                Axios.post('http://localhost:3306/api/insert/collections/new', {
                    number1: action.payload.number1, 
                    number2: action.payload.number2, 
                    number3: action.payload.number3, 
                    string1: action.payload.string1, 
                    string2: action.payload.string2, 
                    string3: action.payload.string3, 
                    text1: action.payload.text1, 
                    text2: action.payload.text2, 
                    text3: action.payload.text3, 
                    boolean1: action.payload.boolean1, 
                    boolean2: action.payload.boolean2, 
                    boolean3: action.payload.boolean3, 
                    date1: action.payload.date1, 
                    date2: action.payload.date2, 
                    date3: action.payload.date3,
                    admin: action.payload.admin,
                    link: action.payload.link,
                    tags: action.payload.tags,
                })
            }
            return {...state}
        default:
            return state
    }
}

export const getUsersInfoAC = createAction (GET_USERS_INFO, function prepare(allUsers) { return { payload: {allUsers} }})
export const changeThemeAC = createAction (CHANGE_THEME, function prepare(theme) { return { payload: {theme} }})
export const filterTableAC = createAction (FILTER_TABLE, function prepare(filterTable) { return { payload: {filterTable} }})
export const filterKeyAC = createAction (FILTER_KEY, function prepare(filterKey) { return { payload: {filterKey} }})
export const getCollectionsInfoAC = createAction (GET_COLLECTIONS_INFO, function prepare(allCollections) { return { payload: {allCollections} }})
export const getColumnsInfoAC = createAction (GET_COLUMNS_INFO, function prepare(allColumns) { return { payload: {allColumns} }})
export const getSearchDataAC = createAction (GET_SEARCH_DATA, function prepare(searchData) { return { payload: {searchData} }})
export const changeTitleAC = createAction (CHANGE_TITLE, function prepare(title, description, link) { return { payload: {title, description, link} }})
export const getCommentsAC = createAction (GET_COMMENTS_INFO, function prepare(allComments) { return { payload: {allComments} }})
export const renderCommentAC = createAction (RENDER_COMMENT, function prepare (login, link, comment) { return { payload: {login, link, comment} }})
export const setCollectionsAC = createAction (SET_COLLECTIONS, function prepare(admin, link, title, description, tags) { return { payload: {admin, link, title, description, tags} }})
export const updateTableHeadAC = createAction (UPDATE_TABLE_HEAD, function prepare(number1, number2, number3, string1, string2, string3, text1, text2, text3, boolean1, boolean2, boolean3, date1, date2, date3, link, admin, tags, id) {
    return { payload: {number1, number2, number3, string1, string2, string3, text1, text2, text3, boolean1, boolean2, boolean3, date1, date2, date3, link, admin, tags, id} }
})

export default appReducer