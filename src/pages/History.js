import React, { Component } from 'react'

import { ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { HistoryList } from '../components/List'

export default class History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            id :'' // param에서 가져옴?
        }
    }

    componentDidMount() {
        this.history()
        // .then(res => this.setState({ list: res.votes }))
        // .catch(err => console.log(err))
    }

    // 투표 히스토리 조회 API
    history = async () => {
        const { id } = this.state

        try {
            const res = await fetch('http://ch-4ml.iptime.org:8080/vote/history', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cache': 'no-cache'
                },
                credentials: 'include',
                body: id
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
                    <h3 style={{ marginLeft: 10, color: '#d8b1d6' }}>투표 이력 목록</h3>
                    <ListGroup variant='flush'>
                        <br />
                        <HistoryList tx='0x2da53bd2ba397e2a691' user='깐뷔 vs 덮뷔' />
                        <HistoryList tx='0xd43ea3cad6b8723a2a5' user='이찬혁 vs 이수현' />
                        <HistoryList tx='0xa65cea9a85cd751ae4c' user='Give Love(AKMU) vs 200%(AKMU)' />
                        <HistoryList tx='0x2da53bd2b65cea96921' user='깐뷔 vs 덮뷔' />
                        <HistoryList tx='0xd485cd751ad6b8723a5' user='깐뷔 vs 덮뷔' />
                        <HistoryList tx='0xa65c53bd2b65d7514c1' user='깐뷔 vs 덮뷔' />
                        <hr />
                    </ListGroup>
                </div>
            </div>
        )
    }
}