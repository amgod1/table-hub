import { React, useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

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

    let min = 0, max = 1

    if (!!changeInfo) {
        return (
            <Modal {...rest} aria-labelledby="contained-modal-title-vcenter" >
                <Modal.Header closeButton className={localStorage.theme === 'true' ? 'bg-dark' : ''}>
                    <Modal.Title>
                        {(typeof changeInfo.id == 'number')
                            ? localStorage.lang !== 'true'
                                ? "Table's row editor:"
                                : 'Изменить строку:'
                            : (changeInfo.id === 'id')
                                ? localStorage.lang !== 'true'
                                    ? 'Columns titles:'
                                    : 'Названия колонок:'
                                : localStorage.lang !== 'true'
                                    ? 'Add row info:'
                                    : 'Добавить информацию к строке:'
                                
                        }
                    </Modal.Title>
                </Modal.Header>
                
                <Modal.Body className={localStorage.theme === 'true' ? 'bg-dark' : ''}>
                {(changeInfo.id === 'id')
                    ? <>
                        <Form.Control type="text" value='id' disabled placeholder="id" />
                        <Form.Control className="mt-3" type="text" value='tags' disabled placeholder="tags" />
                    </>
                    : <Form.Control type="text" value={tags} onChange={e => setTags(e.target.value)} placeholder="tags" />
                }
                    <Form.Control 
                        className='mt-3' 
                        type={changeInfo.id === 'id' ? 'text' : 'number'} 
                        value={number1} 
                        onChange={e => setNumber1(e.target.value)} 
                        placeholder='number1' />
                    <Form.Control 
                        className='mt-3' 
                        type={changeInfo.id === 'id' ? 'text' : 'number'} 
                        value={number2} 
                        onChange={e => setNumber2(e.target.value)} 
                        placeholder='number2' />
                    <Form.Control 
                        className='mt-3' 
                        type={changeInfo.id === 'id' ? 'text' : 'number'} 
                        value={number3} 
                        onChange={e => setNumber3(e.target.value)} 
                        placeholder='number3' />
    
                    <Form.Control 
                        className='mt-3' 
                        type="text" 
                        value={string1} 
                        onChange={e => setString1(e.target.value)} 
                        placeholder='string1' />
                    <Form.Control 
                        className='mt-3' 
                        type="text" 
                        value={string2} 
                        onChange={e => setString2(e.target.value)} 
                        placeholder='string2' />
                    <Form.Control 
                        className='mt-3' 
                        type="text" 
                        value={string3} 
                        onChange={e => setString3(e.target.value)} 
                        placeholder='string3' />
    

                    {(changeInfo.id === 'id')
                        ? <>
                            <Form.Control 
                                className='mt-3' 
                                type="text" 
                                value={text1} 
                                onChange={e => setText1(e.target.value)} 
                                placeholder='text1' 
                            />
                            <Form.Control 
                                className='mt-3' 
                                type="text" 
                                value={text2} 
                                onChange={e => setText2(e.target.value)} 
                                placeholder='text2' 
                            />
                            <Form.Control 
                                className='mt-3' 
                                type="text" 
                                value={text3} 
                                onChange={e => setText3(e.target.value)} 
                                placeholder='text3' 
                            />
                        </>
                        : <>
                            <Form.Control 
                                className='mt-3' 
                                type="text" 
                                value={text1} 
                                onChange={e => setText1(e.target.value)} 
                                placeholder='text1' 
                                as='textarea' 
                            />
                            <Form.Control 
                                className='mt-3' 
                                type="text" 
                                value={text2} 
                                onChange={e => setText2(e.target.value)} 
                                placeholder='text2' 
                                as='textarea' 
                            />
                            <Form.Control 
                                className='mt-3' 
                                type="text" 
                                value={text3} 
                                onChange={e => setText3(e.target.value)} 
                                placeholder='text3' 
                                as='textarea'
                            />
                        </>                        
                    }

                    <Form.Control 
                        className='mt-3' 
                        type={typeof changeInfo.id == 'number' ? 'number' : 'text'}
                        value={boolean1} 
                        placeholder='boolean1'
                        onChange= {
                            (changeInfo.id === 'id')
                                ? e => setBoolean1(e.target.value)
                                : e => {
                                    const value = Math.max(min, Math.min(max, Number(e.target.value)))
                                    setBoolean1(value)
                                }
                        }/>
                    <Form.Control 
                        className='mt-3' 
                        type={typeof changeInfo.id == 'number' ? 'number' : 'text'} 
                        value={boolean2} 
                        placeholder='boolean2'
                        onChange= {
                            (changeInfo.id === 'id')
                                ? e => setBoolean2(e.target.value)
                                : e => {
                                    const value = Math.max(min, Math.min(max, Number(e.target.value)))
                                    setBoolean2(value)
                                }
                        }/>
                    <Form.Control 
                        className='mt-3' 
                        type={typeof changeInfo.id == 'number' ? 'number' : 'text'} 
                        value={boolean3} 
                        placeholder='boolean3'
                        onChange= {
                            (changeInfo.id === 'id')
                                ? e => setBoolean3(e.target.value)
                                : e => {
                                    const value = Math.max(min, Math.min(max, Number(e.target.value)))
                                    setBoolean3(value)
                                }
                        }/>
                        
                    <Form.Control 
                        className='mt-3' 
                        type={changeInfo.id === 'id' ? 'text' : 'date'}
                        value={date1} 
                        onChange={e => setDate1(e.target.value)} 
                        placeholder='date1' />
                    <Form.Control 
                        className='mt-3' 
                        type={changeInfo.id === 'id' ? 'text' : 'date'} 
                        value={date2} 
                        onChange={e => setDate2(e.target.value)} 
                        placeholder='date2' />
                    <Form.Control 
                        className='mt-3' 
                        type={changeInfo.id === 'id' ? 'text' : 'date'} 
                        value={date3} 
                        onChange={e => setDate3(e.target.value)} 
                        placeholder='date3' />
                </Modal.Body>
        
                <Modal.Footer className={localStorage.theme === 'true' ? 'bg-dark' : ''}>
                    <Button variant="secondary" onClick={props.onHide}>
                        {localStorage.lang !== 'true'
                            ? 'Close'
                            : 'Закрыть'
                        }    
                    </Button>
                    <Button variant="primary" onClick=
                        {(typeof changeInfo.id == 'number')
                            ? onUpdateTableBody
                            : (changeInfo.id === 'id')
                                ? onUpdateTableHead
                                : onAddTableBody
                        }>
                            {localStorage.lang !== 'true'
                                    ? 'Save changes'
                                    : 'Сохранить изменения'
                            }
                        </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ModalRow