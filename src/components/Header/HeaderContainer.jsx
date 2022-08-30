import Header from './Header'
import { connect } from 'react-redux'
import { logOutAccountAC } from '../../redux/LogIn-Reducer'
import { changeThemeAC } from '../../redux/App-Reducer'

let mapStateToProps = (state) => {
    return {
        isBlocked: state.logInPage.headerInfo.isBlocked,
        isLogged: state.logInPage.headerInfo.isLogged,
        isAdmin: state.logInPage.headerInfo.isAdmin,
        searchData: state.appPage.searchData,
        theme: state.appPage.theme
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onLogOut: () => dispatch(logOutAccountAC()),
        onChangeTheme: (i) => dispatch(changeThemeAC(i))
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer