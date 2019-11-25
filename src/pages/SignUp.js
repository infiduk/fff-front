import React, { Component } from 'react'

import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { SignFormGroup, RadioForm } from '../components/Form'
import { FillButton } from '../components/Button'

import logo from '../assets/qnq.jpg'

export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            pw: '',
            pwCheck: '',
            birth: '',
            man: false,
            woman: false,
            gender: ''
        }
    }

    // 회원가입 API
    sign = async e => {
        e.preventDefault()

        const { name, pw, pwCheck, birth, gender } = this.state

        if (pw === pwCheck) {
            let userInfo = {
                'name': name,
                'password': pw,
                'birth': birth,
                'gender': gender
            }

            try {
                const res = await fetch('http://ch-4ml.iptime.org:8080/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userInfo),
                })
                res.status === 200
                    ? window.location.assign('/signIn')
                    : console.log('회원가입에 실패하였습니다.')
            } catch (err) {
                console.log(err)
            }
        } else {
            console.log('비밀번호가 일치하지 않습니다.')
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    manChange = e => {
        this.setState({ [e.target.value]: e.target.checked, woman: false, gender: 0 })
    }

    womanChange = e => {
        this.setState({ [e.target.value]: e.target.checked, man: false, gender: 1 })
    }

    render() {
        return (
            <div style={{ marginTop: 25, padding: 10 }}>
                <img
                    alt='QnQ'
                    src={logo}
                    className='img-fluid'
                    style={{ marginLeft: 12, marginBottom: 10 }}
                />
                <Form style={{ padding: 25, marginTop: 10 }} onSubmit={this.sign}>
                    <SignFormGroup controlId='Name' type='text' name='name' placeholder='Input your name' onChange={this.handleChange} />
                    <SignFormGroup controlId='Pw' type='password' name='pw' placeholder='******' onChange={this.handleChange} />
                    <SignFormGroup controlId='PwCheck' type='password' name='pwCheck' placeholder='******' onChange={this.handleChange} />
                    <SignFormGroup controlId='Date' type='date' name='birth' onChange={this.handleChange} />
                    <div className='row' style={{ marginLeft: '25%', position: 'relative' }}>
                        <RadioForm name='gender' value='man' change={this.manChange} checked={this.state.man} label='남자' />
                        <RadioForm name='gender' value='woman' change={this.womanChange} checked={this.state.woman} label='여자' />
                    </div>
                    <FillButton type='submit' text='Sign Up' />
                </Form>
            </div>
        )
    }
}