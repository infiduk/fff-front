import React from 'react';

import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Form.css';

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
    );
};