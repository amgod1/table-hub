import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const LogInModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose} centered>
            <Modal.Header closeButton className={props.theme ? 'bg-dark' : ''}>
                <Modal.Title>Something went wrong...</Modal.Title>
            </Modal.Header>
            <Modal.Body className={props.theme ? 'bg-dark' : ''}>
                Error: {props.error}
            </Modal.Body>
            <Modal.Footer className={props.theme ? 'bg-dark' : ''}>
                <Button variant="secondary" onClick={props.handleClose}>
                    Ok
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LogInModal