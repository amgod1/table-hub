import { React, useState, useEffect} from 'react'
import { Container, Table, Button, Modal, Form } from 'react-bootstrap'
import * as Axios from 'axios'

const CommentsWrapper = (props) => {
    let comments = []
    const [comment, setComment] = useState('')

    const onRenderComment = () => {
        if (comment === '' && comment === ' ') return
        props.onRenderComment(localStorage.login, props.link.slice(1), comment)
        setComment('')
    }

    const deleteComment = (id) => {
        Axios.delete(`http://localhost:3306/api/delete/comments/${id}`)
    }

    if (!!props.allCommentsInfo) {
        comments = JSON.parse(JSON.stringify(props.allCommentsInfo))
        comments = comments.filter(el => el.link === props.link.slice(1)).map(el => 
            <div key={el.id} className='mb-5'>
                <div className='mt-4' >
                    <h6>{el.login}:</h6>
                    <p>{el.text}</p>
                </div>
                {(props.isAdmin || localStorage.login === el.login) 
                    ? <Button 
                        className='h-100' 
                        variant="danger" 
                        size="sm" 
                        onClick={() => deleteComment(el.id)}>
                            Delete
                    </Button> 
                    : <></>
                }
            </div>
        )
    }
    return (
        <>
            {(comments.length === 0 && !!props.isLogged)
                ? <h3 className='mb-3'>Comments:</h3>
                : <></>
            }
            {(props.isLogged) 
                ? <div className='mb-5'>
                    <Form.Control className='' type="text" as="textarea" value={comment} onChange={e => setComment(e.target.value)} placeholder='Type your comment here' />
                    <Button className='mt-3' onClick={onRenderComment}>Add comment</Button>
                </div>
                : <></>
            }
            { comments }
        </>
    )
}

const LilModalRow = (props) => {
    const {changeInfo, ...rest} = props

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        if (!!props.changeInfo) {
            setTitle(props.changeInfo.title)
            setDescription(props.changeInfo.description)
        }
    }, [props.changeInfo])

    const onChangeTitle  = () => {
        props.style(title, description, props.link.slice(1))
        props.onHide()
    }

    if (!!props.changeInfo) {

        return (
            <Modal {...rest} aria-labelledby="contained-modal-title-vcenter" >
                <Modal.Header closeButton>
                    <Modal.Title>Table's title and description editor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control className='mt-3' type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title' />
                    <Form.Control className='mt-3' type="text" as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>Close</Button>
                    <Button variant="primary" onClick={onChangeTitle}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        )
    }

}

const ModalRow = (props) => {

    const {changeInfo, ...rest} = props

    const [tags, setTags] = useState('')
    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
    const [number3, setNumber3] = useState('')
    const [string1, setString1] = useState('')
    const [string2, setString2] = useState('')
    const [string3, setString3] = useState('')
    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')
    const [text3, setText3] = useState('')
    const [boolean1, setBoolean1] = useState('')
    const [boolean2, setBoolean2] = useState('')
    const [boolean3, setBoolean3] = useState('')
    const [date1, setDate1] = useState('')
    const [date2, setDate2] = useState('')
    const [date3, setDate3] = useState('')

    useEffect(() => {
        if (!!changeInfo) {
            setTags(''); if (changeInfo.tags !== null) setTags(changeInfo.tags)
            setNumber1(''); if (changeInfo.number1 !== null) setNumber1(changeInfo.number1)
            setNumber2(''); if (changeInfo.number2 !== null) setNumber2(changeInfo.number2)
            setNumber3(''); if (changeInfo.number3 !== null) setNumber3(changeInfo.number3)
            setString1(''); if (changeInfo.string1 !== null) setString1(changeInfo.string1)
            setString2(''); if (changeInfo.string2 !== null) setString2(changeInfo.string2)
            setString3(''); if (changeInfo.string3 !== null) setString3(changeInfo.string3)
            setText1(''); if (changeInfo.text1 !== null) setText1(changeInfo.text1)
            setText2(''); if (changeInfo.text2 !== null) setText2(changeInfo.text2)
            setText3(''); if (changeInfo.text3 !== null) setText3(changeInfo.text3)
            setBoolean1(''); if (changeInfo.boolean1 !== null) setBoolean1(changeInfo.boolean1)
            setBoolean2(''); if (changeInfo.boolean2 !== null) setBoolean2(changeInfo.boolean2)
            setBoolean3(''); if (changeInfo.boolean3 !== null) setBoolean3(changeInfo.boolean3)
            setDate1(''); if (changeInfo.date1 !== null) setDate1(changeInfo.date1)
            setDate2(''); if (changeInfo.date2 !== null) setDate2(changeInfo.date2)
            setDate3(''); if (changeInfo.date3 !== null) setDate3(changeInfo.date3)
        }
    }, [props.changeInfo])

    const onUpdateTableHead = () => {
        let finalNumber1 = number1
        let finalNumber2 = number2
        let finalNumber3 = number3
        let finalString1 = string1
        let finalString2 = string2
        let finalString3 = string3
        let finalText1 = text1
        let finalText2 = text2
        let finalText3 = text3
        let finalBoolean1 = boolean1 
        let finalBoolean2 = boolean2 
        let finalBoolean3 = boolean3 
        let finalDate1 = date1
        let finalDate2 = date2
        let finalDate3 = date3

        props.style(finalNumber1, finalNumber2, finalNumber3, finalString1, finalString2, finalString3, finalText1, finalText2, finalText3, finalBoolean1, finalBoolean2, finalBoolean3, finalDate1, finalDate2, finalDate3, props.link.slice(1))
        props.onHide()
    }

    const onUpdateTableBody = () => {
        let finalNumber1 = number1
        let finalNumber2 = number2
        let finalNumber3 = number3
        let finalString1 = string1
        let finalString2 = string2
        let finalString3 = string3
        let finalText1 = text1
        let finalText2 = text2
        let finalText3 = text3
        let finalBoolean1 = boolean1 
        let finalBoolean2 = boolean2 
        let finalBoolean3 = boolean3 
        let finalDate1 = date1
        let finalDate2 = date2
        let finalDate3 = date3
        let finalTags = tags
        let finalId = changeInfo.id

        props.style(finalNumber1, finalNumber2, finalNumber3, finalString1, finalString2, finalString3, finalText1, finalText2, finalText3, finalBoolean1, finalBoolean2, finalBoolean3, finalDate1, finalDate2, finalDate3, props.link.slice(1), undefined, finalTags, finalId)
        props.onHide()
    }

    const onAddTableBody = () => {
        let finalNumber1 = number1
        let finalNumber2 = number2
        let finalNumber3 = number3
        let finalString1 = string1
        let finalString2 = string2
        let finalString3 = string3
        let finalText1 = text1
        let finalText2 = text2
        let finalText3 = text3
        let finalBoolean1 = boolean1 
        let finalBoolean2 = boolean2 
        let finalBoolean3 = boolean3 
        let finalDate1 = date1
        let finalDate2 = date2
        let finalDate3 = date3
        let finalTags = tags

        props.style(finalNumber1, finalNumber2, finalNumber3, finalString1, finalString2, finalString3, finalText1, finalText2, finalText3, finalBoolean1, finalBoolean2, finalBoolean3, finalDate1, finalDate2, finalDate3, props.link.slice(1), props.admin, finalTags)
        props.onHide()
    }

    if (!!changeInfo && typeof changeInfo.id == 'number') {
        return (
            <Modal {...rest} aria-labelledby="contained-modal-title-vcenter" >
                <Modal.Header closeButton>
                    <Modal.Title>Table's row editor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type="text" value={tags} onChange={e => setTags(e.target.value)} placeholder="tags" />

                    <Form.Control className='mt-3' type="number" value={number1} onChange={e => setNumber1(e.target.value)} placeholder='number1' />
                    <Form.Control className='mt-3' type="number" value={number2} onChange={e => setNumber2(e.target.value)} placeholder='number2' />
                    <Form.Control className='mt-3' type="number" value={number3} onChange={e => setNumber3(e.target.value)} placeholder='number3' />
    
                    <Form.Control className='mt-3' type="text" value={string1} onChange={e => setString1(e.target.value)} placeholder='string1' />
                    <Form.Control className='mt-3' type="text" value={string2} onChange={e => setString2(e.target.value)} placeholder='string2' />
                    <Form.Control className='mt-3' type="text" value={string3} onChange={e => setString3(e.target.value)} placeholder='string3' />
    
                    <Form.Control className='mt-3' type="text" as="textarea" value={text1} onChange={e => setText1(e.target.value)} placeholder='text1' />
                    <Form.Control className='mt-3' type="text" as="textarea" value={text2} onChange={e => setText2(e.target.value)} placeholder='text2' />
                    <Form.Control className='mt-3' type="text" as="textarea" value={text3} onChange={e => setText3(e.target.value)} placeholder='text3' />
    
                    <Form.Control className='mt-3' type="number" value={boolean1} onChange={e => setBoolean1(e.target.checked)} placeholder='boolean1' />
                    <Form.Control className='mt-3' type="number" value={boolean2} onChange={e => setBoolean2(e.target.checked)} placeholder='boolean2' />
                    <Form.Control className='mt-3' type="number" value={boolean3} onChange={e => setBoolean3(e.target.checked)} placeholder='boolean3' />
    
                    <Form.Control className='mt-3' type="date" value={date1} onChange={e => setDate1(e.target.value)} placeholder='date1' />
                    <Form.Control className='mt-3' type="date" value={date2} onChange={e => setDate2(e.target.value)} placeholder='date2' />
                    <Form.Control className='mt-3' type="date" value={date3} onChange={e => setDate3(e.target.value)} placeholder='date3' />
                </Modal.Body>
    
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>Close</Button>
                    <Button variant="primary" onClick={onUpdateTableBody}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        )
    } else if (!!changeInfo && changeInfo.id === 'id') {
        return (
            <Modal {...rest} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title>Columns titles</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type="text" value='id' disabled placeholder="id" />
                    <Form.Control className="mt-3" type="text" value='tags' disabled placeholder="tags" />
    
                    <Form.Control className="mt-3" type="text" value={number1} onChange={e => setNumber1(e.target.value)} placeholder='number1' />
                    <Form.Control className="mt-3" type="text" value={number2} onChange={e => setNumber2(e.target.value)} placeholder='number2' />
                    <Form.Control className="mt-3" type="text" value={number3} onChange={e => setNumber3(e.target.value)} placeholder='number3' />
    
                    <Form.Control className="mt-3" type="text" value={string1} onChange={e => setString1(e.target.value)} placeholder='string1' />
                    <Form.Control className="mt-3" type="text" value={string2} onChange={e => setString2(e.target.value)} placeholder='string2' />
                    <Form.Control className="mt-3" type="text" value={string3} onChange={e => setString3(e.target.value)} placeholder='string3' />
    
                    <Form.Control className="mt-3" type="text" value={text1} onChange={e => setText1(e.target.value)} placeholder='text1' />
                    <Form.Control className="mt-3" type="text" value={text2} onChange={e => setText2(e.target.value)} placeholder='text2' />
                    <Form.Control className="mt-3" type="text" value={text3} onChange={e => setText3(e.target.value)} placeholder='text3' />
    
                    <Form.Control className="mt-3" type="text" value={boolean1} onChange={e => setBoolean1(e.target.value)} placeholder='boolean1' />
                    <Form.Control className="mt-3" type="text" value={boolean2} onChange={e => setBoolean2(e.target.value)} placeholder='boolean2' />
                    <Form.Control className="mt-3" type="text" value={boolean3} onChange={e => setBoolean3(e.target.value)} placeholder='boolean3' />
    
                    <Form.Control className="mt-3" type="text" value={date1} onChange={e => setDate1(e.target.value)} placeholder='date1' />
                    <Form.Control className="mt-3" type="text" value={date2} onChange={e => setDate2(e.target.value)} placeholder='date2' />
                    <Form.Control className="mt-3" type="text" value={date3} onChange={e => setDate3(e.target.value)} placeholder='date3' />
                </Modal.Body>
    
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>Close</Button>
                    <Button variant="primary" onClick={onUpdateTableHead}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        )
    } else if (!!changeInfo && changeInfo.new === 1) {
        return (
            <Modal {...rest} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title>Add row info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type="text" value={tags} onChange={e => setTags(e.target.value)} placeholder="tags" />
    
                    <Form.Control className="mt-3" type="text" value={number1} onChange={e => setNumber1(e.target.value)} placeholder='number1' />
                    <Form.Control className="mt-3" type="text" value={number2} onChange={e => setNumber2(e.target.value)} placeholder='number2' />
                    <Form.Control className="mt-3" type="text" value={number3} onChange={e => setNumber3(e.target.value)} placeholder='number3' />
    
                    <Form.Control className="mt-3" type="text" value={string1} onChange={e => setString1(e.target.value)} placeholder='string1' />
                    <Form.Control className="mt-3" type="text" value={string2} onChange={e => setString2(e.target.value)} placeholder='string2' />
                    <Form.Control className="mt-3" type="text" value={string3} onChange={e => setString3(e.target.value)} placeholder='string3' />
    
                    <Form.Control className="mt-3" type="text" as="textarea" value={text1} onChange={e => setText1(e.target.value)} placeholder='text1' />
                    <Form.Control className="mt-3" type="text" as="textarea" value={text2} onChange={e => setText2(e.target.value)} placeholder='text2' />
                    <Form.Control className="mt-3" type="text" as="textarea" value={text3} onChange={e => setText3(e.target.value)} placeholder='text3' />
    
                    <Form.Control className="mt-3" type="text" value={boolean1} onChange={e => setBoolean1(e.target.value)} placeholder='boolean1' />
                    <Form.Control className="mt-3" type="text" value={boolean2} onChange={e => setBoolean2(e.target.value)} placeholder='boolean2' />
                    <Form.Control className="mt-3" type="text" value={boolean3} onChange={e => setBoolean3(e.target.value)} placeholder='boolean3' />
    
                    <Form.Control className="mt-3" type="text" value={date1} onChange={e => setDate1(e.target.value)} placeholder='date1' />
                    <Form.Control className="mt-3" type="text" value={date2} onChange={e => setDate2(e.target.value)} placeholder='date2' />
                    <Form.Control className="mt-3" type="text" value={date3} onChange={e => setDate3(e.target.value)} placeholder='date3' />
                </Modal.Body>
    
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>Close</Button>
                    <Button variant="primary" onClick={onAddTableBody}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        )
    } else return <></>
}

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
        if (!!el.date1) el.date1 = el.date1.slice(0, 10)
        if (!!el.date2) el.date2 = el.date2.slice(0, 10)
        if (!!el.date3) el.date3 = el.date3.slice(0, 10)
    }

    let head = {...props.clusterInfo[1]}
    for (let key in head) { if (head[key] === null) { delete head[key] } }
    delete head.link
    delete head.description
    delete head.title
    let headInfo = {...head}
    head = Object.values(head)

    const [changeInfo, setChangeInfo] = useState()
    
    const [modalShow, setModalShow] = useState(false)
    const renderModal = (i) => {
        setChangeInfo({...i})
        setModalShow(true)
    }

    const [lilModalShow, setLilModalShow] = useState(false)
    const renderLilModal = (i) => {
        setChangeInfo({...i})
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

    console.log('list before render', list, 'filter before render', filter)

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
                        EDIT
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
                    Created by {props.admin}
                </h6>
            </a>
            <p className='mt-3'>
                {props.description}
            </p>
            {(props.isAdmin || localStorage.login === props.admin) 
                ? <Button size="sm" className='h-100' onClick={() => renderLilModal({title: props.title, description: props.description})}>Edit info</Button>
                : <></>
            }
            <Table striped bordered hover responsive="lg" className='mt-3' variant={(props.theme) ? 'dark' : ''}>
                <thead>
                    <tr>
                        { getHead }
                        {(props.isAdmin || props.admin === localStorage.login) 
                            ? <td className='text-center'>
                                <Button onClick={() => renderModal(headInfo)}>
                                    EDIT
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
                        ADD NEW ROW
                    </Button> 
                    : <></>}
                {(props.isAdmin || props.admin === localStorage.login) 
                    ? <Button className="mb-5 mt-3" variant="danger" onClick={() => deleteTable(props.link)} href={'/' + localStorage.login}>
                        DELETE TABLE
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
                />
                : <></>
            }
            <LilModalRow 
                show = {lilModalShow}
                onHide = {() => setLilModalShow(false)}
                changeInfo = {changeInfo} 
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