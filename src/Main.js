import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }

    render() {
        return (
            <div style={{ margin: 25 }}>
                <h3>게임 목록</h3>
                <div style={{ marginLeft: 10, marginRight: 10 }}>
                    <ListGroup variant='flush'>
                        <hr />
                        <ListGroup.Item action href={'/game'}>
                            <div className='row'>
                                <h4>최한솔 vs. 박찬형</h4>
                            </div>
                        </ListGroup.Item>
                        <hr />
                    </ListGroup>
                </div>
            </div>
        );
    }
}