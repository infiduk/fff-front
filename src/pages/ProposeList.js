import React, { Component } from 'react'

import { Button, ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { ProposeList } from '../components/List'

export default class Propose extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            value: 10
        }
    }

    componentDidMount() {
        this.propose()
        // setState list 넣기
    }

    // 투표 제안 목록 조회 API
    propose = async () => {
        try {
            await fetch('http://ch-4ml.iptime.org:8080/post')
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

    // 제안 추천 +1
    onSubmit = () => {
        this.setState({ value: this.state.value + 10 })
    }

    render() {
        return (
            <div>
                <div style={{ margin: 10 }}>
                    <div className='row' style={{ marginBottom: 10 }}>
                        <h3 style={{ marginLeft: 20, colosr: '#d8b1d6' }}>문제 제안 목록</h3>
                        <Button href='/proposeQuiz' style={{ marginLeft: 30, backgroundColor: '#fff', borderColor: '#d8b1d6', color: '#d8b1d6' }}>문제 제안</Button>
                    </div>
                    <ListGroup variant='flush'>
                        <ProposeList title='불타오르네 vs 상남자' date='7일' user='최또르' value={this.state.value} onClick={this.onSubmit} />
                        <ProposeList title='내가 7억 vs 최애가 7억' date='5일' user='포엠엘' />
                        <ProposeList title='으르렁 vs Love Shot' date='7일' user='쏘' />
                        <hr />
                    </ListGroup>
                </div>
            </div>
        )
    }
}