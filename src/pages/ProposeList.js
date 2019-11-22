import React, { Component } from 'react'

import { Button, ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { ProposeList } from '../components/List'

export default class Propose extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            postId: '',
            value: 10,
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
        this.propose()
        .then(json => console.log(json))
        // setState list 넣기
    }

    // 투표 제안 목록 조회 API
    propose = async () => {
        try {
            await fetch('http://ch-4ml.iptime.org:8080/post')
                .then(res => {
                    if (res.status !== 200)
                        console.log('실패')
                    else return res.json()
                })
                .catch(err => console.log(err))
        } catch (err) {
            console.log(err)
        }
    }

    // 제안 추천 +1 API
    recommend = async () => {
        const { name, postId } = this.state;

        let userInfo = {
            user: {
                'name': name
            },
            'postId': postId
        }

        try {
            await fetch('http://ch-4ml.iptime.org:8080/post/recommend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo),
            })
            .then(res => {
                (res.status !== 200)
                ? console.log('+1')
                : console.log('실패')
            })

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
                        <ProposeList title='불타오르네 vs 상남자' date='7일' user='최또르' value={this.state.value} onClick={this.recommend} />
                        <ProposeList title='내가 7억 vs 최애가 7억' date='5일' user='포엠엘' />
                        <ProposeList title='으르렁 vs Love Shot' date='7일' user='쏘' />
                        <hr />
                    </ListGroup>
                </div>
            </div>
        )
    }
}