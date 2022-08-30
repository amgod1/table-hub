import { React, useState } from 'react'
import { Container, InputGroup, Form, Button } from 'react-bootstrap'

const InputArea = (props) => {
    return (
        <InputGroup className="mt-3">
            <InputGroup.Text>
                {props.name}
            </InputGroup.Text>
            <Form.Control 
                as={props.as}
                placeholder={props.placeholder} 
                maxLength={props.maxLength} 
                value={props.value}
                onChange={props.onChange} 
            />
        </InputGroup>
    )
}

const TableCreator = (props) => {

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

    let renderCreateTable = createTableInfo.map(el => <InputArea key={el.key} name={el.name} placeholder={el.placeholder} as={el.as} maxLength={el.maxLength} value={el.value} onChange={el.onChange} />)

    const onSetCollectionsInfo = () => {
        if(tableLink.includes(' ')) { alert('LINK CANNOT INCLUDE SPACE SYMBOLS'); return }

        let admin = localStorage.login
        let link = tableLink
        let title = tableTitle
        let description = tableDescription
        let tags = tableTags
        props.onSetCollectionsInfo(admin, link, title, description, tags)
    }

    return (
        <Container>
            <h1 className='mt-5'>
                Create your table here:
            </h1>
            { renderCreateTable }
            <Button className='mt-3' onClick={ onSetCollectionsInfo } href={'/' + tableLink}>
                Create table
            </Button>
        </Container>
    )
}

export default TableCreator