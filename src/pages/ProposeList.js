import React, { Component } from 'react'

import { Button, ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { ProposeList } from '../components/List'

export default class Propose extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.propose()
    }

    // 투표 제안 목록 조회 API
    propose = async () => {
        try {
            const res = await fetch('http://ch-4ml.iptime.org:8080/post', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cache': 'no-cache'
                },
                credentials: 'include',
            })
            const json = await res.json()
            this.setState({ list: json })
        } catch (err) {
            console.log(err)
        }
    }

    // 제안 추천 +1 API
    choice = async e => {
        try {
            await fetch('http://ch-4ml.iptime.org:8080/post/recommend', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cache': 'no-cache'
                },
                credentials: 'include',
                body: JSON.stringify({'postId': e.target.name})
            })
            window.location.assign('/propose')
        } catch(err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <div style={{ margin: 10 }}>
                    <div className='row' style={{ marginBottom: 10 }}>
                        <h3 style={{ marginLeft: 20, color: '#d8b1d6' }}>문제 제안 목록</h3>
                        <Button href='/proposeQuiz' style={{ marginLeft: 30, backgroundColor: '#fff', borderColor: '#d8b1d6', color: '#d8b1d6' }}>문제 제안</Button>
                    </div>
                    <ListGroup variant='flush'>
                        {this.state.list.map(list => {
                            return (
                                <ProposeList
                                    key={`list-${list._id}`}
                                    title={`${list.choice1} vs ${list.choice2}`}
                                    period={list.period}
                                    name={list._id}
                                    user={list.writer}
                                    value={list.recommend} onClick={this.choice} />
                            )
                        })}
                        <hr />
                    </ListGroup>
                </div>
            </div>
        )
    }
}