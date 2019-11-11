import React from 'react'

import { Form, InputGroup } from 'react-bootstrap'
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

export const ProposeForm = props => {
    return (
        <Form.Group controlId={props.controlId}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                className='SignFormGroup'
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                size='sm'
                onChange={props.onChange} />
        </Form.Group>
    )
}

export const NLProposeForm = props => {
    return (
        <Form.Group controlId={props.controlId}>
            <Form.Control
                className='SignFormGroup'
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                size='sm'
                onChange={props.onChange} />
        </Form.Group>
    )
}

export const ProposeFormLg = props => {
    return (
        <Form.Group controlId={props.controlId}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                as="textarea"
                rows={props.rows}
                name={props.name}
                onChange={props.onChange} />
        </Form.Group>
    )
}

export const ProposeSelect = props => {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text
                    style={{ borderColor: '#d8b1d6', backgroundColor: '#d8b1d6', color: '#fff' }}>{props.label}
                </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
                name={props.name}
                onChange={props.onChange} />
        </InputGroup>
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