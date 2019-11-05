import React from 'react';

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './Button.css';

const FillButtonStyle = {
    marginTop: 50,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: '#fd8a1f',
    borderColor: '#ff9500',
    borderRadius: 30
};

const EmptyButtonStyle = {
    marginTop: 20,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderColor: '#ff9500',
    borderRadius: 30,
    color: '#ff9500'
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