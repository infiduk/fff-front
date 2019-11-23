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
            const json = await res.json()
            this.setState({ list: json.data.votes })
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
                        {this.state.list.map(list => {
                            return list.status === '1' && (
                                <MainList
                                    key={`list-${list.id}`}
                                    href={`/game/${list.id}`}
                                    title={list.title}
                                    date={list.end}
                                    category={list.category}
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