import React, { Component } from 'react';

import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { SignFormGroup } from './components/Form';
import { FillButton } from './components/Button';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: '',
            name: '',
        };
    }

    signSubmit = async e => {
        e.preventDefault();
        window.location.assign('/');
    };

    loginSubmit = async e => {
        e.preventDefault();
        window.location.assign('/signIn');
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div style={{ marginTop: 25, padding: 10 }}>
                <Form style={{ padding: 25, marginTop: 10 }} onSubmit={this.signSubmit}>
                    <SignFormGroup controlId='Id' type='text' name='id' placeholder='example@example.com' onChange={this.handleChange} />
                    <SignFormGroup controlId='Pw' type='password' name='pw' placeholder='******' onChange={this.handleChange} />
                    <SignFormGroup controlId='PwCheck' type='password' name='pw' placeholder='******' onChange={this.handleChange} />
                    <SignFormGroup controlId='Name' type='text' name='name' placeholder='Input your name' onChange={this.handleChange} />
                    <FillButton type='submit' text='Continue' />
                    <h6 style={{ marginTop: 50, marginBottom: -30, color: '#ff9500', textAlign: 'center' }}>Already have an account?</h6>
                    <FillButton type='button' text='Sign In' onClick={this.loginSubmit} />
                </Form>
            </div>
        )
    }
}