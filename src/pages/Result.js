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
        window.sessionStorage.getItem('name') ? this.result() : window.location.assign('/signin')
    }

    // 투표 완료 목록 조회 API
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

            const json = await res.json()

            res.status === 200
                ? this.setState({ list: json.data.votes })
                : console.log(json.data.msg)
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
                        {this.state.list.map(list => {
                            return list.status === '2' && (
                                <ResultList
                                    key={`list-${list.id}`}
                                    href={`/gameResult/${list.id}`}
                                    title={list.title}
                                    winner={list.result} category={list.category} />
                            )
                        })}
                        <hr />
                    </ListGroup>
                </div>
            </div>
        )
    }
}