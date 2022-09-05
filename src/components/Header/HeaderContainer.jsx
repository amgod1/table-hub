import Header from './Header'
import { connect } from 'react-redux'
import { logOutAccountAC } from '../../redux/LogIn-Reducer'
import { changeThemeAC, changeLangAC } from '../../redux/App-Reducer'

let mapStateToProps = (state) => {
    return {
        isBlocked: state.logInPage.headerInfo.isBlocked,
        isLogged: state.logInPage.headerInfo.isLogged,
        isAdmin: state.logInPage.headerInfo.isAdmin,
        searchData: state.appPage.searchData,
        theme: state.appPage.theme,
        lang: state.appPage.lang
        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onLogOut: () => dispatch(logOutAccountAC()),
        onChangeTheme: (i) => dispatch(changeThemeAC(i)),
        onChangeLang: (i) => dispatch(changeLangAC(i))
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer