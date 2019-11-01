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
            <div style={{ margin: 10 }}>
                <h3 style={{ marginLeft: 10, color: '#ff9500' }}>게임 목록</h3>
                <ListGroup variant='flush'>
                    <br />
                    <ListGroup.Item action href={'/game'}>
                        <div className='col'>
                            <h5 style={{ color: '#ff9500', marginLeft: -20 }}>악동뮤지션 vs 방탄소년단</h5>
                            <div className='row'> 
                                <h6 style={{ marginTop: 5, flex: 0.5 }}>19.10.31 23:59 마감</h6>
                                <div style={{ marginTop: 5, textAlign: 'right', flex: 0.5 }}>
                                    <h6 style={{ marginRight: 5 }}>96912</h6>
                                </div>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        <div className='col'>
                            <h5 style={{ color: '#ff9500', marginLeft: -20 }}>최한솔 vs 박찬형</h5>
                            <div className='row'> 
                                <h6 style={{ marginTop: 5, flex: 0.5 }}>19.11.08 23:59 마감</h6>
                                <div style={{ marginTop: 5, textAlign: 'right', flex: 0.5 }}>
                                    <h6 style={{ marginRight: 5 }}>9659</h6>
                                </div>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        <div className='col'>
                            <h5 style={{ color: '#ff9500', marginLeft: -20 }}>짜장 vs 짱뽕</h5>
                            <div className='row'> 
                                <h6 style={{ marginTop: 5, flex: 0.5 }}>19.11.30 23:59 마감</h6>
                                <div style={{ marginTop: 5, textAlign: 'right', flex: 0.5 }}>
                                    <h6 style={{ marginRight: 5 }}>18</h6>
                                </div>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <hr />
                </ListGroup>
            </div>
        );
    }
}