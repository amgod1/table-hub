import { React, useState } from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import * as Axios from 'axios'
import CommentsWrapper from './CommentsWrapper'
import LilModalRow from './LilModalRow'
import ModalRow from './ModalRow'

const Collection = (props) => {

    const deleteTable = (link) => {
        Axios.delete(`http://localhost:3306/api/delete/columns/${link.slice(1)}`)
        Axios.delete(`http://localhost:3306/api/delete/collections/${link.slice(1)}`)
        Axios.delete(`http://localhost:3306/api/delete/comments-link/${link.slice(1)}`)
    }

    let newRow = {}
    newRow.new = 1
    newRow.id = null
    newRow.tags = props.tags
    newRow.number1 = null
    newRow.number2 = null
    newRow.number3 = null
    newRow.string1 = null
    newRow.string2 = null
    newRow.string3 = null
    newRow.text1 = null
    newRow.text2 = null
    newRow.text3 = null
    newRow.boolean1 = null
    newRow.boolean2 = null
    newRow.boolean3 = null
    newRow.date1 = null
    newRow.date2 = null
    newRow.date3 = null

    let list

    const [filter, setFilter] = useState(1)

    if (!!props.filterKey) {
        (filter === 0) 
            ? list = props.clusterInfo.filter(el => el.admin === props.admin).sort((x, y) => y[props.filterKey] - x[props.filterKey])
            : list = props.clusterInfo.filter(el => el.admin === props.admin).sort((x, y) => x[props.filterKey] - y[props.filterKey])
    } else {
        list = props.clusterInfo.filter(el => el.admin === props.admin)
    }

    const updateFilterKey = (key) => {  
        props.onFilterKey(key)
        setNewFilter()
    }

    const setNewFilter = () => {
        (filter === 0) 
            ? setFilter(1)
            : setFilter(0)
    }

    for (let el of list) {
        if (!!el.date1 && el.date1.length > 10) { el.date1 = el.date1.slice(0,10).split('-'); el.date1[2] = Number(el.date1[2]) + 1; el.date1 = el.date1.join('-') }
        if (!!el.date2 && el.date2.length > 10) { el.date2 = el.date2.slice(0,10).split('-'); el.date2[2] = Number(el.date2[2]) + 1; el.date2 = el.date2.join('-') }
        if (!!el.date3 && el.date3.length > 10) { el.date3 = el.date3.slice(0,10).split('-'); el.date3[2] = Number(el.date3[2]) + 1; el.date3 = el.date3.join('-') }
    }

    let head = {...props.clusterInfo[1]}
    for (let key in head) { if (head[key] === null) { delete head[key] } }
    delete head.link
    delete head.description
    delete head.title
    let headInfo = {...head}
    head = Object.values(head)

    const [changeInfo, setChangeInfo] = useState()
    const [lilChangeInfo, setLilChangeInfo] = useState()
    
    const [modalShow, setModalShow] = useState(false)
    const renderModal = (i) => {
        setChangeInfo({...i})
        setModalShow(true)
    }

    const [lilModalShow, setLilModalShow] = useState(false)
    const renderLilModal = (i) => {
        setLilChangeInfo({...i})
        setLilModalShow(true)
    }

    const getKey = (i) => {
        for (let key in headInfo) { if (headInfo[key] === i) return key }
    }

    let getHead = head.map(el => {
        if (list.filter(e => typeof e[el] !== "object").length >= 1) {
            let k = getKey(el)
            return (
                <td key={el} className='text-center' >
                    <Button onClick={() => updateFilterKey(k)} className='h-100'>
                        {el}
                    </Button>
                </td>
            )
        } else return
    })

    let getList = list.map(el => 
        <tr key={el.id}>
            {(list.filter(e => e.id).length >= 1 ) ? <td className='text-center'>{el.id}</td> : <></>}
            {(list.filter(e => e.tags).length >= 1 ) ? <td className='text-center'>{el.tags}</td> : <></>}

            {(list.filter(e => e.number1).length >= 1 ) ? <td className='text-center'>{el.number1}</td> : <></>}
            {(list.filter(e => e.number2).length >= 1 ) ? <td className='text-center'>{el.number2}</td> : <></>}
            {(list.filter(e => e.number3).length >= 1 ) ? <td className='text-center'>{el.number3}</td> : <></>}

            {(list.filter(e => e.string1).length >= 1 ) ? <td className='text-center'>{el.string1}</td> : <></>}
            {(list.filter(e => e.string2).length >= 1 ) ? <td className='text-center'>{el.string2}</td> : <></>}
            {(list.filter(e => e.string3).length >= 1 ) ? <td className='text-center'>{el.string3}</td> : <></>}

            {(list.filter(e => e.text1).length >= 1 ) ? <td className='text-center'>{el.text1}</td> : <></>}
            {(list.filter(e => e.text2).length >= 1 ) ? <td className='text-center'>{el.text2}</td> : <></>}
            {(list.filter(e => e.text3).length >= 1 ) ? <td className='text-center'>{el.text3}</td> : <></>}

            {(list.filter(e => e.boolean1).length >= 1 ) ? <td className='text-center'>{el.boolean1}</td> : <></>}
            {(list.filter(e => e.boolean2).length >= 1 ) ? <td className='text-center'>{el.boolean2}</td> : <></>}
            {(list.filter(e => e.boolean3).length >= 1 ) ? <td className='text-center'>{el.boolean3}</td> : <></>}

            {(list.filter(e => e.date1).length >= 1 ) ? <td className='text-center'>{el.date1}</td> : <></>}
            {(list.filter(e => e.date2).length >= 1 ) ? <td className='text-center'>{el.date2}</td> : <></>}
            {(list.filter(e => e.date3).length >= 1 ) ? <td className='text-center'>{el.date3}</td> : <></>}

            {(props.isAdmin || props.admin === localStorage.login) 
                ? <td className='text-center'>
                    <Button onClick={() => renderModal(el)}>
                        {!props.lang
                            ? 'EDIT'
                            : 'Изменить'
                        }
                    </Button>
                </td> 
                : <></>}
        </tr>
    )

    return (
        <Container>
            <h1 className='mt-5'>
                {props.title}
            </h1>
            <a href={'/' + props.admin}>
                <h6>
                    {!props.lang
                        ? 'Created by '
                        : 'Создатель: '
                    }
                    {props.admin}
                </h6>
            </a>
            <p className='mt-3'>
                {props.description}
            </p>
            {(props.isAdmin || localStorage.login === props.admin) 
                ? <Button 
                    size="sm" 
                    className='h-100' 
                    onClick={() => renderLilModal({title: props.title, description: props.description})}>
                        {!props.lang
                            ? 'Edit info'
                            : 'Изменить информацию'
                        }
                    </Button>
                : <></>
            }
            <Table striped bordered hover responsive="lg" className='mt-3' variant={(props.theme) ? 'dark' : ''}>
                <thead>
                    <tr>
                        { getHead }
                        {(props.isAdmin || props.admin === localStorage.login) 
                            ? <td className='text-center'>
                                <Button onClick={() => renderModal(headInfo)}>
                                    {!props.lang
                                        ? 'Edit'
                                        : 'Изменить'
                                    }
                                </Button>
                            </td> 
                            : <></>}
                    </tr>
                </thead>
                <tbody>
                    { getList }
                </tbody>
            </Table>
            <div className='d-flex justify-content-between'>
                {(props.isAdmin || props.admin === localStorage.login) 
                    ? <Button className="mb-5 mt-3" onClick={() => renderModal(newRow)}>
                        {!props.lang
                            ? 'ADD NEW ROW'
                            : 'Добавить новую строку'
                        }
                    </Button> 
                    : <></>}
                {(props.isAdmin || props.admin === localStorage.login) 
                    ? <Button className="mb-5 mt-3" variant="danger" onClick={() => deleteTable(props.link)} href={'/' + localStorage.login}>
                        {!props.lang
                            ? 'DELETE TABLE'
                            : 'Удалить таблицу'
                        } 
                    </Button> 
                    : <></>} 
            </div>
            {(!!props.allCommentsInfo) 
                ? <CommentsWrapper 
                    allCommentsInfo = {props.allCommentsInfo}
                    onRenderComment = {props.onRenderComment}
                    isLogged = {props.isLogged}
                    isAdmin = {props.isAdmin}
                    admin = {props.admin}
                    link = {props.link}
                    lang = {props.lang}
                />
                : <></>
            }
            <LilModalRow 
                show = {lilModalShow}
                onHide = {() => setLilModalShow(false)}
                lilChangeInfo = {lilChangeInfo} 
                link = {props.link}
                style = {props.onChangeTitle}
            />
            <ModalRow 
                show = {modalShow} 
                onHide = {() => setModalShow(false)} 
                changeInfo = {changeInfo} 
                tags = {props.tags}
                admin = {props.admin}
                link = {props.link}
                style = {props.onUpdateTableHead}
            />
        </Container>
    )
}

export default Collection