import React, { Component } from 'react'

import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import logo from '../assets/qnq.jpg'

import { SignFormGroup } from '../components/Form'
import { FillButton, EmptyButton } from '../components/Button'

export default class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            pw: ''
        }
    }

    // 로그인 API
    login = async e => {
        e.preventDefault()

        const { name, pw } = this.state

        let userInfo = {
            'name': name,
            'password': pw
        }

        try {
            await fetch('http://ch-4ml.iptime.org:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo),
            })
                .then(res => {
                    if (res.status !== 200)
                        console.log('실패')
                    else {
                        res.json()
                            .then(json => {
                                // 세션에 저장
                                window.sessionStorage.setItem('name', json.data.user.name)
                                window.sessionStorage.setItem('birth', json.data.user.birth)
                                window.sessionStorage.setItem('gender', json.data.user.gender)
                                window.sessionStorage.setItem('token', json.data.user.token)
                                window.sessionStorage.setItem('votes', json.data.user.votes)
                                window.sessionStorage.setItem('choices', json.data.user.choices)
                                window.sessionStorage.setItem('hpw', json.data.user.hpw)
                                
                                window.location.assign('/')
                            })
                    }
                })
        } catch (err) {
            console.log(err)
        }
    }

    linkToSignUp = async e => {
        e.preventDefault()
        window.location.assign('/signUp')
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className='text-center' style={{ marginTop: 25, padding: 10 }}>
                <img
                    alt='QnQ'
                    src={logo}
                    className='img-fluid'
                    style={{ marginBottom: 110 }}
                />
                <Form style={{ padding: 25 }} onSubmit={this.login}>
                    <SignFormGroup controlId='Id' type='text' name='name' placeholder='이름을 입력하세요.' onChange={this.handleChange} />
                    <SignFormGroup controlId='Pw' type='password' name='pw' placeholder='******' onChange={this.handleChange} />
                    <FillButton type='submit' text='Sign In' />
                    <EmptyButton type='button' text='Sign Up' onClick={this.linkToSignUp} />
                </Form>
            </div>
        )
    }
}
