import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MyPage extends Component {
    render() {
        return (
            <div style={{ margin: 25, color: '#ff9500' }}>
                <h3>바나프레소님</h3>
                <h6 style={{ marginTop: 10, marginLeft: 10, color: '#000' }}>이메일@이메일.com</h6>
                <div className='row' style={{ margin: 20 }}>
                    <h4>보유 티켓</h4>
                    <h6 style={{ marginTop: 10, marginLeft: 10, color: '#000'}}>어쩌구저쩌구</h6>
                </div>
                <div style={{ margin: 10, marginLeft: 20 }}>
                    <h4>참여한 문제</h4>
                    <ListGroup style={{ margin: 15 }}>
                        <ListGroup.Item action href={'/game'}>
                            <h5 style={{ color: '#ff9500', marginLeft: 5, marginRight: 5 }}>악동뮤지션 vs 방탄소년단</h5>
                        </ListGroup.Item>
                        <ListGroup.Item action href={'/game'}>
                            <h5 style={{ color: '#ff9500' }}>최한솔 vs 박찬형</h5>
                        </ListGroup.Item>
                        <ListGroup.Item action href={'/game'}>
                            <h5 style={{ color: '#ff9500' }}>짜장 vs 짬뽕</h5>
                        </ListGroup.Item>
                        <ListGroup.Item action href={'/game'}>
                            <h5 style={{ color: '#ff9500' }}>악동뮤지션 vs 방탄소년단</h5>
                        </ListGroup.Item>
                        <ListGroup.Item action href={'/game'}>
                            <h5 style={{ color: '#ff9500' }}>최한솔 vs 박찬형</h5>
                        </ListGroup.Item>
                        <ListGroup.Item action href={'/game'}>
                            <h5 style={{ color: '#ff9500' }}>짜장 vs 짬뽕</h5>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        );
    }
}