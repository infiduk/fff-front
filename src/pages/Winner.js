import React, { Component } from 'react'

import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Winner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            winner: ''
        }
    }

    componentDidMount() {
        this.win()
    }

    // 당첨자 조회 API
    win = async () => {
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
            const json = await res.json()
            this.setState({ winner: json.winner })
        } catch (err) {
            console.log(err)
        }
    }

    handleGoMain = () => {
        window.location.assign('/')
    }

    render() {
        const { winner } = this.state
        return (
            <div>
                <div style={{ margin: 25 }}>
                    <h2 style={{ marginTop: 30, marginBottom: 30, textAlign: 'center', color: '#d8b1d6' }}>당첨자 발표</h2>
                    <h5 style={{ textAlign: 'center' }}>{winner}</h5>
                    <h2 style={{ marginTop: 30, marginBottom: 30, textAlign: 'center', color: '#d8b1d6' }}>축하합니다!</h2>
                    <Button type='button' style={{ padding: 10, marginTop: 25, backgroundColor: '#d8b1d6', borderColor: '#d8b1d6' }} onClick={this.handleGoMain} block>메인으로</Button>
                </div>
            </div>
        )
    }
}