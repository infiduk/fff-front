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
                <h3 style={{ color: '#ff9500' }}>게임 목록</h3>
                <ListGroup variant='flush'>
                    <br />
                    <ListGroup.Item action href={'/game'}>
                        <div className='row'>
                            <div className='col'>
                                <h4 style={{ color: '#ff9500' }}>악동뮤지션 vs 방탄소년단</h4>
                                <h6 style={{ marginTop: 5, marginLeft: 5 }}>2019.10.31 23:59 마감</h6>
                            </div>
                            <div style={{ marginTop: 5, alignSelf: 'center' }}>
                            <h6 style={{ marginRight: 5 }}>현재 참여자</h6>
                            <h6 style={{ marginRight: 5, textAlign: 'right' }}>96912명</h6>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        <div className='row'>
                            <div className='col'>
                                <h4 style={{ color: '#ff9500' }}>최한솔 vs 박찬형</h4>
                                <h6 style={{ marginTop: 5, marginLeft: 5 }}>2019.11.07 23:59 마감</h6>
                            </div>
                            <div style={{ marginTop: 5, alignSelf: 'center' }}>
                            <h6 style={{ marginRight: 5 }}>현재 참여자</h6>
                            <h6 style={{ marginRight: 5, textAlign: 'right' }}>9659명</h6>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        <div className='row'>
                            <div className='col'>
                                <h4 style={{ color: '#ff9500' }}>짜장 vs 짬뽕</h4>
                                <h6 style={{ marginTop: 5, marginLeft: 5 }}>2019.11.15 23:59 마감</h6>
                            </div>
                            <div style={{ marginTop: 5, alignSelf: 'center' }}>
                            <h6 style={{ marginRight: 5 }}>현재 참여자</h6>
                            <h6 style={{ marginRight: 5, textAlign: 'right' }}>19명</h6>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <hr />
                </ListGroup>
            </div>
        );
    }
}