import React from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import SearchHub from './SearchHub'

const SearchModal = (props) => {
    const handleClose = () => {
        localStorage.search = ''
        props.setShow(false)
    }
    return (
        <Modal show={props.show} onHide={handleClose} size="lg">
            <Modal.Header closeButton='white' className={(props.theme) ? 'bg-dark' : ''}>
                <Modal.Title>
                    {(!props.lang)
                        ? 'Search Panel'
                        : 'Панель поиска'
                    }
                    
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={props.theme ? 'bg-dark' : ''}>
                <Form.Control
                    type="text"
                    placeholder={(!props.lang)
                        ? 'Search by tags'
                        : 'Поиск по тегам'
                    }
                  //"Search by tags"
                  value={props.search}
                  onChange={(e) => props.setSearch(e.target.value)} 
                  autoFocus
                />
                <SearchHub searchData={props.searchData} lang = {props.lang} />
            </Modal.Body>
            <Modal.Footer className={props.theme ? 'bg-dark' : ''}>
                <Button variant="secondary" onClick={handleClose}>
                    {(!props.lang)
                        ? 'Close'
                        : 'Закрыть'
                    }
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SearchModal