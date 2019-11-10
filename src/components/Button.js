import React from 'react';

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './Button.css';

const FillButtonStyle = {
    marginTop: 50,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: '#d5aad4',
    borderColor: '#d5aad4',
    borderRadius: 30
};

const EmptyButtonStyle = {
    marginTop: 20,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderColor: '#d5aad4',
    borderRadius: 30,
    color: '#d5aad4'
};

export const FillButton = props => {
    return (
        <Button
            type={props.type}
            block
            style={FillButtonStyle}
            onClick={props.onClick}>{props.text}
        </Button>
    );
};

export const EmptyButton = props => {
    return (
        <Button
            type={props.type}
            block
            style={EmptyButtonStyle}
            onClick={props.onClick}>{props.text}
        </Button>
    );
};