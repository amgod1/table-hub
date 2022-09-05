import App from '../../App'
import { connect } from 'react-redux'
import { getUsersInfoAC, filterKeyAC, getCollectionsInfoAC, getColumnsInfoAC, getSearchDataAC, changeTitleAC, getCommentsAC, renderCommentAC, setCollectionsAC, updateTableHeadAC } from '../../redux/App-Reducer'
import { adminYourselfAC } from '../../redux/LogIn-Reducer'

let mapStateToProps = (state) => {
    return {
        searchData: state.appPage.searchData,
        allUsersInfo: state.appPage.allUsersInfo,
        allCollectionsInfo: state.appPage.allCollectionsInfo,
        allColumnsInfo: state.appPage.allColumnsInfo,
        allCommentsInfo: state.appPage.allCommentsInfo,
        theme: state.appPage.theme,
        filterKey: state.appPage.filterKey,
        userInfo: state.logInPage.userInfo,
        isAdmin: state.logInPage.headerInfo.isAdmin,
        isLogged: state.logInPage.headerInfo.isLogged,
        lang: state.appPage.lang
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAdminYourself: (i) => dispatch(adminYourselfAC(i)),
        onFilterKey: (i) => dispatch(filterKeyAC(i)),
        onGetUsersInfo: (i) => dispatch(getUsersInfoAC(i)),
        onGetCollectionsInfo: (i) => dispatch(getCollectionsInfoAC(i)),
        onGetColumnsInfo: (i) => dispatch(getColumnsInfoAC(i)),
        onGetSearchData: (i) => dispatch (getSearchDataAC(i)),
        onChangeTitle: (t, d, l) => dispatch(changeTitleAC(t,d,l)),
        onGetCommentsInfo: (i) => dispatch(getCommentsAC(i)),
        onRenderComment: (login, link, comment) => dispatch(renderCommentAC(login, link, comment)),
        onSetCollectionsInfo: (ad, li, ti, de, ta) => dispatch(setCollectionsAC(ad, li, ti, de, ta)),
        onUpdateTableHead: (number1, number2, number3, string1, string2, string3, text1, text2, text3, boolean1, boolean2, boolean3, date1, date2, date3, link, admin, tags, id) => {
            dispatch(updateTableHeadAC(number1, number2, number3, string1, string2, string3, text1, text2, text3, boolean1, boolean2, boolean3, date1, date2, date3, link, admin, tags, id))
        }
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer