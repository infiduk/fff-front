import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MyPageList } from '../components/List';

export default class MyPage extends Component {
    render() {
        return (
            <div style={{ margin: 25, color: '#d5aad4' }}>
                <h3>바나프레소님</h3>
                <h6 style={{ marginTop: 10, marginLeft: 10, color: '#000' }}>이메일@이메일.com</h6>
                <div style={{ margin: 20 }}>
                    <h5>보유 티켓</h5>
                    <h6 style={{ marginTop: 10, marginLeft: 10, color: '#000'}}>어쩌구저쩌구</h6>
                </div>
                <div>
                    <h5 style={{ marginLeft: 20 }}>참여한 문제</h5>
                    <ListGroup style={{ marginTop: 15, marginLeft: 20, marginRight: 20 }}>
                        <MyPageList href='/gameResult' title='악동뮤지션 vs 방탄소년단' />
                        <MyPageList title='최한솔 vs 박찬형' />
                        <MyPageList title='짜장 vs 짬뽕' />
                        <MyPageList title='생각 없는데 공부 잘하는 애 vs 생각 많은데 공부 못하는 애' />
                        <MyPageList title='곰인형 vs 레고' />
                        <hr />
                    </ListGroup>
                </div>
            </div>
        );
    }
}