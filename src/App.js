import { React, useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import * as Axios from 'axios'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import HeaderContainer from "./components/Header/HeaderContainer"
import LogInContainer from "./components/Login/LogInContainer"
import UsersContainer from "./components/Main/UsersContainer"
import Profile from "./components/Main/Profile"
import TableCreator from './components/Main/TableCreator'
import Collection from './components/Main/Collection'
import StartPage from './components/Main/StartPage'
import RouterWait from './components/RouterWait'

const App = (props) => {

  const theme = createTheme({
    palette: {
      mode: props.theme ? 'dark' : 'light'
    }
  })

  const onGetUsersInfo = () => {
    Axios.get('http://localhost:3306/api/get')
    .then((response) => {
        if (props.allUsersInfo === '' || (JSON.stringify(props.allUsersInfo) !== JSON.stringify(response.data))) {
            console.log('updating users data')
            if (!!localStorage.login && (JSON.stringify(response.data.filter(el => el.login === localStorage.login)[0]) !== localStorage.userInfo)) {
              const info = response.data.filter(el => el.login === localStorage.login)[0]
              props.onAdminYourself(info)
            }
            props.onGetUsersInfo(response.data)
            return 
        }
        //console.log('no need to update data!')
    })
  }

  const onGetCollectionsInfo = () => {
    Axios.get('http://localhost:3306/api/get/collections')
    .then((response) => {
        if (props.allCollectionsInfo === '' || (JSON.stringify(props.allCollectionsInfo) !== JSON.stringify(response.data))) {
            console.log('updating collections data')
            props.onGetCollectionsInfo(response.data)
            return 
        }
        //console.log('no need to update collections!')
    })
  }

  const onGetColumnsInfo = () => {
    Axios.get('http://localhost:3306/api/get/columns')
    .then((response) => {
        if (props.allColumnsInfo === '' || (JSON.stringify(props.allColumnsInfo) !== JSON.stringify(response.data))) {
            console.log('updating columns data')
            props.onGetColumnsInfo(response.data)
            return 
        }
        //console.log('no need to update columns!')
    })
  }

  const onGetCommentsInfo = () => {
    Axios.get('http://localhost:3306/api/get/comments')
    .then((response) => {
        if (props.allCommentsInfo === '' || (JSON.stringify(props.allCommentsInfo) !== JSON.stringify(response.data))) {
            console.log('updating comments data')
            props.onGetCommentsInfo(response.data)
            return 
        }
        //console.log('no need to update comments!')
    })
  }

  const onGetSearchData = () => {
    if (!!props.allCollectionsInfo) {
        if (localStorage.search === undefined) localStorage.setItem('search', '')
        let searchTags = localStorage.search.split(' ').filter(el => el !== '')  
        let info = [...props.allCollectionsInfo].filter(el => {
          for (let item of searchTags) {
            if (!el.tags.toLowerCase().includes(item.toLowerCase())) return 
          }
          return el
        })
        if (JSON.stringify(props.searchData) !== JSON.stringify(info)) { props.onGetSearchData(info) }
    }
  }

  let clusters = []
  let clustersMain = []

  if (!!props.allCollectionsInfo && !!props.allColumnsInfo) {
    let arr = JSON.parse(JSON.stringify(props.allCollectionsInfo))
    let columns = JSON.parse(JSON.stringify(props.allColumnsInfo))
    while (arr.length) {
      let sameThing = arr[0].link
      let sameArr = ['/' + sameThing]

      sameArr.push(columns.filter(el => el.link === sameThing)[0])
    
      for (let i = 0; i < arr.length; i++) {
          if (arr[i].link === sameThing) {
              sameArr.push(arr.slice(i, i + 1)[0])
          }
      }
  
      clusters.push(sameArr)
      arr = arr.filter(el => el.link !== sameThing)
    }
  }

  let renderAllCollections
  if (!!clusters.length) {
    //console.log('CLUSTERS ARE: ', clusters)
    clustersMain = [...clusters]
    renderAllCollections = clusters.map(el => <Route 
      path = {el[0]} 
      key = {el[2].id} 
      element = {<Collection 
        // filterTable = {props.filterTable}
        theme = {props.theme}
        filterKey = {props.filterKey}
        isAdmin = {props.isAdmin}
        isLogged = {props.isLogged}
        admin = {el[2].admin} 
        tags = {el[2].tags}
        link = {el[0]} 
        title = {el[1].title}
        description = {el[1].description} 
        clusterInfo = {el} 
        onFilterTable = {props.onFilterTable}
        onFilterKey = {props.onFilterKey}
        onRenderComment = {props.onRenderComment}
        allCommentsInfo = {props.allCommentsInfo}
        onChangeTitle = {props.onChangeTitle}
        onUpdateTableHead = {props.onUpdateTableHead}
        onUpdateTableBody = {props.onUpdateTableBody}
        />} 
    />)
  }

  let renderAllProfiles
  if (!!props.allUsersInfo && !!clusters.length) {
    // let newUsersInfo = JSON.parse(JSON.stringify(props.allUsersInfo))
    renderAllProfiles = props.allUsersInfo
      .map(el => <Route 
        path={'/' + el.login} 
        key={el.id} 
        element={<Profile 
          clusters={clusters} 
          login={el.login} 
          admin={el.admin} 
          blocked={el.blocked} 
        />} 
      /> )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      onGetUsersInfo()
      onGetCollectionsInfo()
      onGetColumnsInfo()
      onGetCommentsInfo()
    }, 500)
    return () => clearInterval(interval)
  })

  useEffect(() => {
    const interval = setInterval(() => {
      onGetSearchData()
    }, 100)
    return () => clearInterval(interval)
  })
  
  if (!!clusters.length) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
           <HeaderContainer />
            <Routes>
              <Route path = "/" element = {<StartPage clusters = {clustersMain} />} />
              <Route path = '/create-table' element = {<TableCreator onSetCollectionsInfo={props.onSetCollectionsInfo} />} />
              <Route path = "/log-in" element = {<LogInContainer />} />
              <Route path = "/users" element = {<UsersContainer />} />
              <Route path = "*" element = {<RouterWait />} />
              { renderAllProfiles }
              { renderAllCollections }
            </Routes>
      </ThemeProvider>
    )
  }
}

export default App