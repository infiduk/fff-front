import React, { Component } from 'react'
import N from '../Navbar'

import { ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { HistoryList } from '../components/List'

export default class History extends Component {
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