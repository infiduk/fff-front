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
            name : '',
            pw: '',
            pwCheck: '',
            birth: '',
            man: false,
            woman: false,
            gender: ''
        }
    }

    loginSubmit = e => {
        e.preventDefault()

        const { id, pw, pwCheck, name, birth, man, woman, gender } = this.state;

        let userInfo = {
            
        }

        window.location.assign('/signIn')
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    manChange = e => {
        this.setState({ [e.target.value]: e.target.checked, woman: false })
    }

    womanChange = e => {
        this.setState({ [e.target.value]: e.target.checked, man: false })
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
                <Form style={{ padding: 25, marginTop: 10 }} onSubmit={this.loginSubmit}>
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