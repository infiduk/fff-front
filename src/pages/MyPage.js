import React, { Component } from 'react'

import { ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { MyPageList } from '../components/List'
import coin from '../assets/my-coin.jpg'

export default class MyPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <div style={{ margin: 25, color: '#d8b1d6', flex: 1 }}>
                    <div style={{ padding: 20, height: '200' }}>
                        <h3>바나프레소님</h3>
                    </div>
                    <div style={{ padding: 20, marginTop: 25, height: '350', backgroundColor: '#f2f2f2' }}>
                        <h6 style={{ marginLeft: 5, color: '#000' }}>보유 티켓 수</h6>
                        <div className='row' style={{ margin: 20 }}>
                            <h2 style={{ marginLeft: 20, height: '15vw', width: '30vw', textAlign: 'center' }}>100개</h2>
                            <div style={{ height: '15vw', width: '30vw' }}>
                                <img
                                    alt='my-coin'
                                    src={coin}
                                    className='img-fluid'
                                    style={{ width: '50%', height: '80%' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: 20, marginTop: 25, height: '50vw', backgroundColor: '#fff' }}>
                        <div className='row'>
                            <h6 style={{ marginLeft: 5, color: '#000' }}>참여한 문제</h6>
                            <h6 style={{ marginLeft: 5, color: '#000' }}>+</h6>
                        </div>
                        <ListGroup style={{ marginLeft: 5, marginRight: 5 }}>
                            <MyPageList href='/gameResult' title='깐뷔 vs 덮뷔' />
                            <MyPageList title='이찬혁 vs 이수현' />
                            <MyPageList title='Give Love(AKMU) vs 200%(AKMU)' />
                            <hr />
                        </ListGroup>
                    </div>
                </div>
            </div>
        )
    }
}