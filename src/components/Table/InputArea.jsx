import React from 'react'
import { InputGroup, Form } from 'react-bootstrap'

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

export default InputArea