import React from 'react';

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const FillButton = props => {
    return (
        <Button type={props.type} block style={{ marginTop: 50, padding: 10, alignSelf: 'center', backgroundColor: '#fd8a1f', borderColor: '#ff9500', borderRadius: 30 }} onClick={props.onClick}>{props.text}</Button>
    );
};

export const EmptyButton = props => {
    return (
        <Button type={props.type} block style={{ marginTop: 20, padding: 10, alignSelf: 'center', backgroundColor: '#fff', borderColor: '#ff9500', borderRadius: 30, color: '#ff9500' }} onClick={props.onClick}>{props.text}</Button>
    );
};