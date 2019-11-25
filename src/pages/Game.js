import React, { Component } from 'react'
import LoadingOverlay from 'react-loading-overlay'

import { SquareButton } from '../components/Button'

export default class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: false,
            detail: [],
            id: this.props.match.params.id
        }
    }

    componentDidMount() {
        window.sessionStorage.getItem('name') ? this.detail() : window.location.assign('/signin')
    }

    // 투표 상세 조회 API
    detail = async () => {
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
                body: JSON.stringify({ 'id': id }),
            })

            if (res.status === 200) {
                const json = await res.json()
                this.setState({ detail: json })
            } else {
                console.log('상세 조회에 실패하였습니다.')
            }
        } catch (err) {
            console.log(err)
        }
    }

    // 투표 API
    vote = async e => {
        this.setState({ [e.target.name]: e.target.value })

        const { id } = this.state

        let voteInfo = {
            'id': id,
            'choose': e.target.value
        }

        try {
            this.setState({ isActive: true })
            const res = await fetch('http://ch-4ml.iptime.org:8080/vote/choose', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cache': 'no-cache'
                },
                credentials: 'include',
                body: JSON.stringify(voteInfo)
            })

            const json = await res.json()

            if (res.status === 200) {
                window.sessionStorage.setItem('token', json.data.user.token)
                window.sessionStorage.setItem('votes', json.data.user.votes)
                window.location.assign('/')
            } else {
                console.log(json.msg)
            }
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const { detail } = this.state
        return (
            <div>
                <LoadingOverlay
                    active={this.state.isActive}
                    spinner
                    text='잠시만 기다려주세요..'
                >
                    <div style={{ marginTop: 20, padding: 25 }}>
                        <h2 style={{ textAlign: 'center', color: '#d8b1d6' }}>{detail.title}</h2>
                        {this.state.detail.category === '0'
                            ? <h5 style={{ marginTop: 30, textAlign: 'center' }}>무료투표</h5>
                            : <h5 style={{ marginTop: 30, textAlign: 'center' }}>유료투표</h5>
                        }
                        <h5 style={{ textAlign: 'center' }}>{detail.end} 마감</h5>
                        <div className='row' style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ marginTop: 20, marginBottom: 20, marginRight: 3 }}>
                                <SquareButton onClick={this.vote} name='choose' label={`${detail.choice1}`} value={`${detail.choice1}`} />
                            </div>
                            <div style={{ marginTop: 20, marginBottom: 20, marginLeft: 3 }}>
                                <SquareButton onClick={this.vote} name='choose' label={`${detail.choice2}`} value={`${detail.choice2}`} />
                            </div>
                        </div>
                        <h5 style={{ textAlign: 'center' }}>선택한 답이 과반 이상의 선택을 받았을 경우 추첨을 통해 상품을 드립니다.</h5>
                    </div>
                </LoadingOverlay>
            </div>
        )
    }
}