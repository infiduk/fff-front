import React, { Component } from 'react'
import Cookies from 'universal-cookie'

import { ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { MainList } from '../components/List'

export default class Main extends Component {
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
        this.vote()
        const cookies = new Cookies()
        console.log(cookies.get('name'))
        console.log(document.cookie)
        // .then(json => this.setState({ list: json.data.votes }))
        // .catch(err => console.log(err))
    }

    // 투표 목록 조회 API
    vote = async () => {
        try {
            const result = await fetch('http://ch-4ml.iptime.org:8080/vote', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cache': 'no-cache'
                },
                credentials: 'include',
            });
            console.log(result);
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