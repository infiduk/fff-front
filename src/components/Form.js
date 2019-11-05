import React from 'react';

import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const SignFormGroup = props => {
    return (
        <Form.Group controlId={props.controlId}>
            <Form.Control type={props.type} size='lg' name={props.name} placeholder={props.placeholder} style={{ display: 'flex', borderTop: 0, borderLeft: 0, borderRight: 0, borderColor: '#ff9500', borderRadius: 0 }} onChange={props.onChange} />
        </Form.Group>
    );
};