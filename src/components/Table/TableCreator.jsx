import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import LogInModal from '../Login/LogInModal'
import InputArea from './InputArea'

const TableCreator = (props) => {

    const [show, setShow] = useState(false)
    const [error, setError] = useState()

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)   

    const [tableTitle, setTableTitle] = useState('')
    const [tableDescription, setTableDescription] = useState('')
    const [tableLink, setTableLink] = useState('')
    const [tableTags, setTableTags] = useState('')
 
    let createTableInfo = [
        {key: 1, name: 'Title', placeholder: "Table's title", maxLength: 50, value: tableTitle, onChange: event => setTableTitle(event.target.value)},
        {key: 2, name: 'Description', placeholder: "Describe your table", as: "textarea", value: tableDescription, onChange: event => setTableDescription(event.target.value)},
        {key: 3, name: 'https://table-hub.com/', placeholder: "Your table link", maxLength: 30, value: tableLink, onChange: event => setTableLink(event.target.value)},
        {key: 4, name: 'Tags', placeholder: "Table's tags", maxLength: 65, value: tableTags, onChange: event => setTableTags(event.target.value)},
    ]

    if (props.lang) {
        createTableInfo[0].name = 'Название'; createTableInfo[0].placeholder = 'Название таблицы'
        createTableInfo[1].name = 'Описание'; createTableInfo[1].placeholder = 'Описание таблицы'
        createTableInfo[2].placeholder = 'Ссылка на таблицу'
        createTableInfo[3].name = 'Теги'; createTableInfo[3].placeholder = 'Теги к таблице'
    }

    let renderCreateTable = createTableInfo.map(el => <InputArea key={el.key} name={el.name} placeholder={el.placeholder} as={el.as} maxLength={el.maxLength} value={el.value} onChange={el.onChange} />)
    let navigate = useNavigate()
    const onSetCollectionsInfo = () => {
        if (tableTitle.length < 5) {
            !props.lang
                ? setError('Title is too short!')
                : setError('Название слишком короткое!')
            handleShow()
            return 
        } else if (tableLink === '') { 
            !props.lang
                ? setError('LINK CAN NOT BE EMPTY!')
                : setError('Ссылка не может быть пустой!')
            handleShow()
            return 
        } else if (tableLink.includes(' ')) { 
            !props.lang
                ? setError('Link can not include space symbols!')
                : setError('Ссылка не может содержать пробелы!')
            handleShow()
            return 
        } else if (tableLink.length < 5) {
            !props.lang
                ? setError('Link too short!')
                : setError('Ссылка слишком короткая!')
            handleShow()
            return
        } else if (props.allColumnsLinks.includes(tableLink)) { 
            !props.lang
                ? setError('Table with this link has already been created!')
                : setError('Таблица с такой ссылкой уже была создана!')
            handleShow()
            return 
        } else if (tableTags.length < 10) {
            !props.lang
                ? setError('Add more tags!')
                : setError('Добавьте больше тегов!')
            handleShow()
            return 
        }

        let admin = localStorage.login
        let link = tableLink
        let title = tableTitle
        let description = tableDescription
        let tags = tableTags

        
        props.onSetCollectionsInfo(admin, link, title, description, tags)
        
        navigate('/' + tableLink, { replace: true })
        window.location.reload(false);
    }

    return (
        <Container>
            <h1 className='mt-5'>
                {!props.lang
                    ? 'Create your table here:'
                    : 'Создай свою таблицу:'
                }
            </h1>
            { renderCreateTable }
            <Button className='mt-3' onClick={ onSetCollectionsInfo }>
                {!props.lang
                    ? 'Create table'
                    : 'Создать таблицу'
                }
                
            </Button>
            <LogInModal 
                lang = {props.lang}
                theme = {props.theme}
                error = {error}
                show = {show}
                handleClose = {handleClose}
            />
        </Container>
    )
}

export default TableCreator