import React, { Component } from 'react'

import { Button, ProgressBar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { ReMatchModal } from '../components/Modal'

export default class GameResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            setShow: false,
            id: '' // param에서 가져옴?
        }
    }

    componentDidMount() {
        // this.result()
    }

    // 투표 결과 조회 API
    // game이랑 같음
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
                body: id
            })
            console.log(res)
                // .then(res => {
                //     console.log(res)
                //     if (res.status !== 200)
                //         console.log('실패')
                //     else return res.json()
                // })
                // .catch(err => console.log(err))
        } catch (err) {
            console.log(err)
        }
    }

    handleGoHistory = () => {
        window.location.assign('/history')
    }

    handleClose = () => {
        this.setState({ setShow: false })
    }

    handleShow = () => {
        this.setState({ setShow: true })
    }

    render() {
        const { setShow } = this.state
        return (
            <div>
                <div style={{ margin: 25 }}>
                    <ReMatchModal
                        show={setShow} onHide={this.handleClose} formOnSubmit={this.loginSubmit} formHandleChange={this.handleChange} btnOnClick={this.handleClose} />
                    <h2 style={{ marginTop: 30, marginBottom: 30, textAlign: 'center', color: '#d8b1d6' }}>깐뷔 vs. 덮뷔</h2>
                    <div style={{ padding: 10, backgroundColor: '#fafafa' }}>
                        <div style={{ padding: 20 }}>
                            <h5>깐뷔</h5>
                            <ProgressBar striped variant='info' now={100} label='12030표' style={{ height: '40px', marginTop: 10, marginLeft: 10, marginRight: 10, marginBottom: 5 }} />
                            <br />
                            <h5>덮뷔</h5>
                            <ProgressBar striped variant='warning' now={50} label='6000표' style={{ height: '40px', marginTop: 5, marginLeft: 10, marginRight: 10, marginBottom: 10 }} />
                        </div>
                    </div>
                    <Button type='button' style={{ padding: 10, marginTop: 25, backgroundColor: '#d8b1d6', borderColor: '#d8b1d6' }} onClick={this.handleGoHistory} block>히스토리 조회</Button>
                    {/* <hr />
                <h6 style={{ textAlign: 'center' }}>리매치를 위해 기여된 티켓 수 : 10033개</h6>
                <Button type='button' style={{ padding: 10, marginTop: 25, backgroundColor: '#fff', borderColor: '#d8b1d6', color: '#d8b1d6' }} onClick={this.handleShow} block>리벤지 신청</Button> */}
                </div>
            </div>
        )
    }
}