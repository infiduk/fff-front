import React from 'react';

import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './List.css';

export const MainList = props => {
    return (
        <ListGroup.Item action href={props.href}>
            <div className='col'>
                <h5 style={{ color: '#d5aad4', marginLeft: -20 }}>{props.title}</h5>
                <div className='row'> 
                    <h6 style={{ marginTop: 5, flex: 0.5 }}>{props.date}</h6>
                    <div style={{ marginTop: 5, textAlign: 'right', flex: 0.5 }}>
                        <h6 style={{ marginRight: 5 }}>{props.users}</h6>
                    </div>
                </div>
            </div>
        </ListGroup.Item>
    );
};

export const MyPageList = props => {
    return (
        <ListGroup.Item action href={props.href} className='MyPageList'>
            <h5>{props.title}</h5>
        </ListGroup.Item>
    );
};