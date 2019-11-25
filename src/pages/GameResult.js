import React, { Component } from 'react'

import { Button, ProgressBar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class GameResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            detail: []
        }
    }

    componentDidMount() {
        window.sessionStorage.getItem('name') ? this.result() : window.location.assign('/signin')
    }

    // 투표 결과 조회 API
    result = async () => {
        const { id } = this.state

        try {
            const res = await fetch('http://ch-4ml.iptime.org:8080/vote/detail', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cache': 'no-cache'
                },
                credentials: 'include',
                body: JSON.stringify({'id': id})
            })
            
            if(res.status === 200) {
                const json = await res.json()
                this.setState({ detail: json })
            } else {
                console.log('상세 조회에 실패하였습니다.')
            }
        } catch (err) {
            console.log(err)
        }
    }

    handleGoHistory = () => {
        window.location.assign(`/history/${this.state.id}`)
    }

    handleGoWinner = () => {
        window.location.assign(`/winner/${this.state.id}`)
    }

    render() {
        const { detail } = this.state

        let totalVotes = detail.count1 + detail.count2
        let votes1 = ((detail.count1 / totalVotes) * 100).toFixed(1)
        let votes2 = ((detail.count2 / totalVotes) * 100).toFixed(1)
        return (
            <div>
                <div style={{ margin: 25 }}>
                    <h2 style={{ marginTop: 30, marginBottom: 30, textAlign: 'center', color: '#d8b1d6' }}>{detail.title}</h2>
                    <div style={{ padding: 10, backgroundColor: '#fafafa' }}>
                        <div style={{ padding: 20 }}>
                            <h5>{detail.choice1}</h5>
                            <ProgressBar striped variant='info' now={votes1} label={`${detail.count1}표`} style={{ height: '40px', marginTop: 10, marginLeft: 10, marginRight: 10, marginBottom: 5 }} />
                            <br />
                            <h5>{detail.choice2}</h5>
                            <ProgressBar striped variant='warning' now={votes2} label={`${detail.count2}표`} style={{ height: '40px', marginTop: 5, marginLeft: 10, marginRight: 10, marginBottom: 10 }} />
                        </div>
                    </div>
                    <Button type='button' style={{ padding: 10, marginTop: 25, backgroundColor: '#d8b1d6', borderColor: '#d8b1d6' }} onClick={this.handleGoHistory} block>히스토리 조회</Button>
                    <Button type='button' style={{ padding: 10, marginTop: 25, backgroundColor: '#d8b1d6', borderColor: '#d8b1d6' }} onClick={this.handleGoWinner} block>당첨자 조회</Button>
                </div>
            </div>
        )
    }
}