import React, { Component } from 'react'

import { ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { MainList } from '../components/List'

export default class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
        }
    }

    render() {
        return (
            <div style={{ margin: 10 }}>
                <h3 style={{ marginLeft: 10, color: '#d8b1d6' }}>퀴즈 결과 목록</h3>
                <ListGroup variant='flush'>
                    <br />
                    <MainList href='/gameResult' title='악동뮤지션 vs 방탄소년단' date='19.11.08 23:59' users='960912' />
                    <MainList title='최한솔 vs 박찬형' date='19.11.15 23:59' users='9659' />
                    <MainList title='짜장 vs 짬뽕' date='19.11.23 23:59' users='18' />
                    <hr />
                </ListGroup>
            </div>
        )
    }
}