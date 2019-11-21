import React, { Component } from 'react'

import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { NLProposeForm, ProposeForm, ProposeFormLg, ProposeSelect } from '../components/Form'
import { FillButton } from '../components/Button'

export default class ProposeQuiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            context: '',
            period: '',
            choice1: '',
            choice2: '',
            writer: window.sessionStorage.getItem('name')
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    propose = async e => {
        e.preventDefault()

        const { title, context, period, choice1, choice2, writer } = this.state

        // 비밀번호 체크 넣기

        let proposeInfo = {
            user: {
                'name': writer
            },
            'title': title,
            'conetxt': context,
            'period': period,
            'choice1': choice1,
            'choice2': choice2,
            'writer': writer
        }

        try {
            await fetch('http://ch-4ml.iptime.org:8080/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(proposeInfo),
            })
                .then(res => {
                    (res.status === 200)
                        ? window.location.assign('/propose')
                        : console.log('실패')
                })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <div style={{ margin: 20 }}>
                    <h4>유의사항!</h4>
                    <h6 style={{ marginLeft: 5 }}>문제는 손수 선별하여 제출됩니다. 판단 기준은 문제의 차별성, 선택의 어려운 정도 등 여러가지 요인에 따라 선정됩니다. 또한, 승패 결과 비율이 5% 미만일 경우 황금밸런스 상을 받게 되며 이에 따라 포인트를 받게 됩니다.</h6>
                    <div style={{ marginTop: 10 }}>
                        <hr style={{ backgroundColor: '#d8b1d6' }} />
                        <Form>
                            <NLProposeForm type='text' name='title' placeholder='문제명을 입력해주세요.' onChange={this.handleChange} />
                            <ProposeForm label='희망 투표 기간(일)' type='text' name='period' onChange={this.handleChange} />
                            <ProposeFormLg label='문제 출제 이유' rows='3' name='context' onChange={this.handleChange} />
                            <ProposeSelect label='선택1' name='choice1' onChange={this.handleChange} />
                            <ProposeSelect label='선택2' name='choice2' onChange={this.handleChange} />
                            <FillButton type='submit' text='제출하기' onClick={this.propose} />
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}