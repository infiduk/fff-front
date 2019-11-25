import React, { Component } from 'react'

import { ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { HistoryList } from '../components/List'

export default class History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            id: this.props.match.params.id
        }
    }

    componentDidMount() {
        window.sessionStorage.getItem('name') ? this.history() : window.location.assign('/signin')
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
                body: JSON.stringify({ 'id': id })
            })

            const json = await res.json()

            res.status === 200
                ? this.setState({ list: json.data })
                : console.log(json.data.msg)
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
                        {this.state.list.map(list => {
                            return (
                                <HistoryList
                                    key={`list-${list.TxId}`}
                                    tx={list.TxId}
                                    timestamp={list.Timestamp}
                                />
                            )
                        })}
                        <hr />
                    </ListGroup>
                </div>
            </div>
        )
    }
}