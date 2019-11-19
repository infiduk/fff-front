import React, { Component } from 'react'
import N from '../Navbar'

import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { NLProposeForm, ProposeForm, ProposeFormLg, ProposeSelect } from '../components/Form'
import { FillButton } from '../components/Button'

export default class ProposeQuiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    proposeSubmit = async e => {
        e.preventDefault()
        window.location.assign('/propose')
    }

    render() {
        return (
            <div>
                <N />
                <div style={{ margin: 20 }}>
                    <h4>유의사항!</h4>
                    <h6 style={{ marginLeft: 5 }}>문제는 손수 선별하여 제출됩니다. 판단 기준은 문제의 차별성, 선택의 어려운 정도 등 여러가지 요인에 따라 선정됩니다. 또한, 승패 결과 비율이 5% 미만일 경우 황금밸런스 상을 받게 되며 이에 따라 포인트를 받게 됩니다.</h6>
                    <div style={{ marginTop: 10 }}>
                        <hr style={{ backgroundColor: '#d8b1d6' }} />
                        <Form>
                            <NLProposeForm type='text' name='title' placeholder='문제명을 입력해주세요.' onChange={this.handleChange} />
                            <ProposeForm label='투표 마감 시간' type='date' name='date' onChange={this.handleChange} />
                            <ProposeFormLg label='문제 출제 이유' rows='3' name='content' onChange={this.handleChange} />
                            <ProposeSelect label='선택1' name='select1' onChange={this.handleChange} />
                            <ProposeSelect label='선택2' name='select2' onChange={this.handleChange} />
                            <FillButton type='submit' text='제출하기' onClick={this.proposeSubmit} />
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}