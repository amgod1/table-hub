import React from 'react'
import ReactDOM from 'react-dom/client'
import AppContainer from './components/Table/AppContainer'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/redux-store'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
  </HashRouter>
)