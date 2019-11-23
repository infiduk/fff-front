import React, { Component } from 'react'

import { ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { MainList } from '../components/List'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.vote()
        // .then(json => this.setState({ list: json.data.votes }))
        // .catch(err => console.log(err))
    }

    // 투표 목록 조회 API
    vote = async () => {
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
                    <h3 style={{ marginLeft: 10, color: '#d8b1d6' }}>퀴즈 목록</h3>
                    <ListGroup variant='flush'>
                        <br />
                        <MainList href='/game' title='깐뷔 vs 덮뷔' date='19.11.08 23:59' users='960912' />
                        <MainList title='이찬혁 vs 이수현' date='19.11.15 23:59' users='9659' />
                        <MainList title='Give Love(AKMU) vs 200%(AKMU)' date='19.11.23 23:59' users='18' />
                        <hr />
                    </ListGroup>
                </div>
            </div>
        )
    }
}