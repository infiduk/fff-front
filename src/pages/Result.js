import React, { Component } from 'react'

import { ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { ResultList } from '../components/List'

export default class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            name: window.sessionStorage.getItem('name'),
            birth: window.sessionStorage.getItem('birth'),
            gender: window.sessionStorage.getItem('gender'),
            token: window.sessionStorage.getItem('token'),
            votes: window.sessionStorage.getItem('votes'),
            choices: window.sessionStorage.getItem('choices'),
            hpw: window.sessionStorage.getItem('hpw'),
        }
    }

    componentDidMount() {
        // this.result()
        // .then(res => this.setState({ list: res.votes }))
        // .catch(err => console.log(err))
    }

    // 투표 완료 목록 조회 API
    // 현재 Main 이랑 같음
    result = async () => {
        const { name, hpw } = this.state

        let userInfo = {
            user: {
                'name': name,
                'hpw': hpw
            }
        }

        try {
            await fetch('http://ch-4ml.iptime.org:8080/vote', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo),
            })
                .then(res => {
                    console.log(res)
                    if (res.status !== 200)
                        console.log('실패')
                    else return res.json()
                })
                .catch(err => console.log(err))
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