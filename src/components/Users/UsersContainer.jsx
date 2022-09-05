import Users from './Users'
import { connect } from 'react-redux'
import { getUsersInfoAC } from '../../redux/App-Reducer'


let mapStateToProps = (state) => {
    return {
        isAdmin: state.logInPage.headerInfo.isAdmin,
        userId: state.logInPage.userInfo.id,
        allUsersInfo: state.appPage.allUsersInfo,
        logOutNumber: state.logInPage.logOutNumber,
        theme: state.appPage.theme,
        lang: state.appPage.lang
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onGetUsersInfo: (i) => dispatch(getUsersInfoAC(i))
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer