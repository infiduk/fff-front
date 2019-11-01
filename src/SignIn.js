import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './assets/qnq.jpg';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: '',
        };
    }

    loginSubmit = async e => {
        e.preventDefault();
        window.location.assign('/');
    };

    signSubmit = async e => {
        e.preventDefault();
        window.location.assign('/signUp');
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className='text-center' style={{ marginTop: 25, padding: 10 }}>
                <img
                alt='QnQ'
                src={logo}
                className='img-fluid'
                style={{ marginBottom: 15 }}
                />
                <Form style={{ padding: 25, marginTop: 10 }} onSubmit={this.loginSubmit}>
                    <Form.Group controlId='Id'>
                        <Form.Control type='id' size='lg' name='id' placeholder='example@abcd.com' style={{ display: 'flex', borderTop: 0, borderLeft: 0, borderRight: 0, borderColor: '#ff9500', borderRadius: 0 }} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId='Pw'>
                        <Form.Control type='password' size='lg' name='pw' placeholder='******' style={{ borderTop: 0, borderLeft: 0, borderRight: 0, borderColor: '#ff9500', borderRadius: 0 }} onChange={this.handleChange} />
                    </Form.Group>
                    <Button type='submit' block
                        style={{ marginTop: 50, padding: 10, alignSelf: 'center', backgroundColor: '#fd8a1f', borderColor: '#ff9500', borderRadius: 30 }}>
                        LOGIN
                    </Button>
                    <Button type='button' block
                        style={{ marginTop: 20, padding: 10, alignSelf: 'center', backgroundColor: '#fff', borderColor: '#ff9500', borderRadius: 30, color: '#ff9500' }} onClick={this.signSubmit}>
                        Sign Up
                    </Button>
                </Form>
            </div>
        )
    }
}