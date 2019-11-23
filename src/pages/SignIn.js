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
            const res = await fetch('http://ch-4ml.iptime.org:8080/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cache': 'no-cache'
                },
                credentials: 'include',
                body: JSON.stringify(userInfo),
            })
            const json = await res.json()
            window.sessionStorage.setItem('name', json.data.user.name)
            await window.location.assign('/')
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
