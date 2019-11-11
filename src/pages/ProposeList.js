import React, { Component } from 'react'

import { Button, ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { ProposeList } from '../components/List'

export default class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            value: 10
        }
    }

    render() {
        return (
            <div style={{ margin: 10 }}>
                <div className='row' style={{ marginBottom: 10 }}>
                    <h3 style={{ marginLeft: 20, color: '#d8b1d6' }}>문제 제안 목록</h3>
                    <Button href='/proposeQuiz' style={{ marginLeft: 30, backgroundColor: '#fff', borderColor: '#d8b1d6', color: '#d8b1d6'}}>문제 제안</Button>
                </div>
                <ListGroup variant='flush'>
                    <ProposeList title='악동뮤지션 vs 방탄소년단' date='7일' user='최또르' value={this.state.value} />
                    <ProposeList title='최한솔 vs 박찬형' date='5일' user='포엠엘' />
                    <ProposeList title='짜장 vs 짬뽕' date='7일' user='쏘' />
                    <hr />
                </ListGroup>
            </div>
        )
    }
}