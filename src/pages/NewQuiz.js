import React, { Component } from 'react'

import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { SignFormGroup } from '../components/Form'
import { FillButton } from '../components/Button'

export default class NewQuiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            choice1: '',
            choice2: '',
            content: '',
        }
    }

    quizSubmit = async e => {
        e.preventDefault()
        window.location.assign('/')
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div style={{ marginTop: 25, padding: 10 }}>
                <Form style={{ padding: 25, marginTop: 10 }} onSubmit={this.quizSubmit}>
                    <SignFormGroup controlId='Id' type='text' name='title' placeholder='퀴즈 타이틀' onChange={this.handleChange} />
                    <SignFormGroup controlId='Pw' type='text' name='choice1' placeholder='선택1' onChange={this.handleChange} />
                    <SignFormGroup controlId='PwCheck' type='text' name='choice2' placeholder='선택2' onChange={this.handleChange} />
                    <SignFormGroup controlId='Name' type='text' name='content' placeholder='내용을 입력하세요.' onChange={this.handleChange} />
                    <FillButton type='submit' text='문제 만들기' />
                </Form>
            </div>
        )
    }
}