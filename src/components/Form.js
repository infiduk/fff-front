import React from 'react'

import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './Form.css'

export const SignFormGroup = props => {
    return (
        <Form.Group controlId={props.controlId}>
            <Form.Control
                className='SignFormGroup'
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                size='lg'
                onChange={props.onChange} />
        </Form.Group>
    )
}

export const RadioForm = props => {
    return (
        <>
            <Form.Control
                className='RadioForm'
                type='radio'
                name={props.name}
                value={props.value}
                onChange={props.change}
                checked={props.check} />
            <h5 style={{ alignSelf: 'flex-end', marginRight: 50 }}>{props.label}</h5>
        </>
    )
}