import React, { Component } from 'react'
import N from '../Navbar'

import { ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { ResultList } from '../components/List'

export default class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
        }
    }

    render() {
        return (
            <div>
                <N />
                <div style={{ margin: 10 }}>
                    <h3 style={{ marginLeft: 10, color: '#d8b1d6' }}>퀴즈 결과 목록</h3>
                    <ListGroup variant='flush'>
                        <br />
                        <ResultList href='/gameResult' title='깐뷔 vs 덮뷔' winner='깐뷔' users='960912' />
                        <ResultList title='이찬혁 vs 이수현' winner='이찬혁' users='9659' />
                        <ResultList title='Give Love(AKMU) vs 200%(AKMU)' winner='Give Love(AKMU)' users='18' />
                        <hr />
                    </ListGroup>
                </div>
            </div>
        )
    }
}