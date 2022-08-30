import { React, useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import SearchBar from './SearchBar'
import HeaderButtons from './HeaderButtons'
import SearchModal from './SearchModal'

const Header = (props) => {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setSearch('')
        setShow(true)
    }

    const [search, setSearch] = useState('')
    useEffect(() => {
        localStorage.setItem('search', search)
    }, [search])

    return (
        <Container className='border border-primary rounded-bottom bg-primary'>
            <Row className='my-3 d-flex justify-content-center flex-column flex-sm-row' >
                <SearchBar 
                    allCollectionsInfo = {props.allCollectionsInfo} 
                    handleShow={handleShow} 
                />
                <br />
                <HeaderButtons
                    theme = {props.theme}
                    onChangeTheme = {props.onChangeTheme}
                    isBlocked = {props.isBlocked} 
                    isLogged = {props.isLogged} 
                    isAdmin = {props.isAdmin} 
                    onLogOut = {props.onLogOut}
                />
            </Row>
            <SearchModal 
                theme = {props.theme}
                show = {show}
                search = {search}
                setShow = {setShow}
                setSearch = {setSearch}
                searchData = {props.searchData}
            />
        </Container>
    )
}

export default Header