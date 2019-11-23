import React, { Component } from 'react'
import LoadingOverlay from 'react-loading-overlay'

import { SquareButton } from '../components/Button'

export default class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: false,
            choose: '',
            id: this.props.match.params.id
        }
    }

    componentDidMount() {
        this.detail()
        console.log(this.state.id)
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
                body: id,
            })
            console.log(res)

        } catch (err) {
            console.log(err)
        }
    }

    // 투표 API
    vote = async () => {
        const { choose, id } = this.state

        let voteInfo = {
            'id': id,
            'choose': choose
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
            console.log(res)
                // .then(res => {
                //     if (res.status !== 200) console.log('실패')
                //     else window.location.assign('/')
                // })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <LoadingOverlay
                    active={this.state.isActive}
                    spinner
                    text='잠시만 기다려주세요..'
                >
                    <div style={{ marginTop: 20, padding: 25 }}>
                        <h2 style={{ textAlign: 'center', color: '#d8b1d6' }}>깐뷔 vs. 덮뷔</h2>
                        <h5 style={{ marginTop: 30, textAlign: 'center' }}>깐태형과 덮태형.. 당신의 선택은?</h5>
                        <h5 style={{ textAlign: 'center' }}>우리 태태는 어떤 모습이든 예쁘지만♥</h5>
                        <div className='row' style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ marginTop: 20, marginBottom: 20, marginRight: 3 }}>
                                <SquareButton onClick={this.vote} label='깐뷔' />
                            </div>
                            <div style={{ marginTop: 20, marginBottom: 20, marginLeft: 3 }}>
                                <SquareButton label='덮뷔' />
                            </div>
                        </div>
                        <h5 style={{ textAlign: 'center' }}>선택한 답이 과반 이상의 선택을 받았을 경우 추첨을 통해 상품을 드립니다.</h5>
                    </div>
                </LoadingOverlay>
            </div>
        )
    }
}