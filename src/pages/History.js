import React, { Component } from 'react'

import { ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { HistoryList } from '../components/List'

export default class History extends Component {
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
        // this.history()
        // .then(res => this.setState({ list: res.votes }))
        // .catch(err => console.log(err))
    }

    // 투표 히스토리 조회 API
    history = async () => {
        const { name, hpw } = this.state

        let userInfo = {
            user: {
                'name': name,
                'hpw': hpw
            }
        }

        try {
            await fetch('http://ch-4ml.iptime.org:8080/vote/history', {
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
                    <h3 style={{ marginLeft: 10, color: '#d8b1d6' }}>투표 이력 목록</h3>
                    <ListGroup variant='flush'>
                        <br />
                        <HistoryList tx='0x2da53bd2ba397e2a691' title='깐뷔 vs 덮뷔' />
                        <HistoryList tx='0xd43ea3cad6b8723a2a5' title='이찬혁 vs 이수현' />
                        <HistoryList tx='0xa65cea9a85cd751ae4c' title='Give Love(AKMU) vs 200%(AKMU)' />
                        <HistoryList tx='0x2da53bd2b65cea96921' title='깐뷔 vs 덮뷔' />
                        <HistoryList tx='0xd485cd751ad6b8723a5' title='깐뷔 vs 덮뷔' />
                        <HistoryList tx='0xa65c53bd2b65d7514c1' title='깐뷔 vs 덮뷔' />
                        <hr />
                    </ListGroup>
                </div>
            </div>
        )
    }
}