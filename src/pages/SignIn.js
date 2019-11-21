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
            id: '',
            password: '',
            passwordCheck: ''
        }
    }

    loginSubmit = async e => {
        e.preventDefault()

        const { id } = this.state

        window.sessionStorage.setItem('id', id)

        window.location.assign('/')
    }

    signSubmit = async e => {
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
                <Form style={{ padding: 25 }} onSubmit={this.loginSubmit}>
                    <SignFormGroup controlId='Id' type='text' name='id' placeholder='이름을 입력하세요.' onChange={this.handleChange} />
                    <SignFormGroup controlId='Pw' type='password' name='pw' placeholder='******' onChange={this.handleChange} />
                    <FillButton type='submit' text='Sign In' />
                    <EmptyButton type='button' text='Sign Up' onClick={this.signSubmit} />
                </Form>
            </div>
        )
    }
}

