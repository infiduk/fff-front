import React, { Component } from 'react'
import LoadingOverlay from 'react-loading-overlay'

import { SquareButton } from '../components/Button'

export default class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: false,
            choose: '',
            name: window.sessionStorage.getItem('name'),
            birth: window.sessionStorage.getItem('birth'),
            gender: window.sessionStorage.getItem('gender'),
            token: window.sessionStorage.getItem('token'),
            votes: window.sessionStorage.getItem('votes'),
            choices: window.sessionStorage.getItem('choices'),
            hpw: window.sessionStorage.getItem('hpw'),
            // id: param에서 가져옴?
        }
    }

    componentDidMount() {
        // this.detail()
    }

    // 투표 상세 조회 API
    detail = async () => {
        const { name, hpw } = this.state

        let userInfo = {
            user: {
                'name': name,
                'hpw': hpw
            }
        }

        try {
            await fetch('http://ch-4ml.iptime.org:8080/vote/detail', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo),
            })
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

    // 투표 API
    vote = async () => {
        const { choose, name, hpw, id } = this.state

        let voteInfo = {
            user: {
                'name': name,
                'hpw': hpw
            },
            'id': id,
            'choose': choose,
            'name': name
        }

        try {
            this.setState({ isActive: true })
            await fetch('http://ch-4ml.iptime.org:8080/vote/choose', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(voteInfo)
            })
                .then(res => {
                    if (res.status !== 200) console.log('실패')
                    else window.location.assign('/')
                })
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