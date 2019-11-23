import React, { Component } from 'react'

import { ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { ResultList } from '../components/List'

export default class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.result()
        // .then(res => this.setState({ list: res.votes }))
        // .catch(err => console.log(err))
    }

    // 투표 완료 목록 조회 API
    // Main 이랑 같음
    result = async () => {
        try {
            const res = await fetch('http://ch-4ml.iptime.org:8080/vote', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cache': 'no-cache'
                },
                credentials: 'include',
            })
            console.log(res)
                // .then(res => {
                //     console.log(res)
                //     if (res.status !== 200)
                //         console.log('실패')
                //     else return res.json()
                // })
                // .catch(err => console.log(err))
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
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