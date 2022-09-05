import { React, useState, useEffect } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

const LilModalRow = (props) => {
    const {lilChangeInfo, ...rest} = props

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        if (!!props.lilChangeInfo) {
            setTitle(props.lilChangeInfo.title)
            setDescription(props.lilChangeInfo.description)
        }
    }, [props.lilChangeInfo])

    const onChangeTitle  = () => {
        props.style(title, description, props.link.slice(1))
        props.onHide()
    }

    if (!!props.lilChangeInfo) {
        return (
            <Modal {...rest} aria-labelledby="contained-modal-title-vcenter" >
                <Modal.Header closeButton className={localStorage.theme === 'true' ? 'bg-dark' : ''}>
                    <Modal.Title>
                        {localStorage.lang !== 'true'
                            ? `Table's title and description editor`
                            : 'Изменить название и описание данной таблицы'
                        }   
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={localStorage.theme === 'true' ? 'bg-dark' : ''}>
                    <Form.Control className='mt-3' type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title' />
                    <Form.Control className='mt-3' type="text" as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description' />
                </Modal.Body>
                <Modal.Footer className={localStorage.theme === 'true' ? 'bg-dark' : ''}>
                    <Button variant="secondary" onClick={props.onHide}>
                        {localStorage.lang !== 'true'
                            ? 'Close'
                            : 'Закрыть'
                        }
                    </Button>
                    <Button variant="primary" onClick={onChangeTitle}>
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

export default LilModalRow