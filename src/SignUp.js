import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

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
                    <Form.Group controlId='Id'>
                        <Form.Control type='id' name='id' size='lg' placeholder='Input your email' style={{ borderTop: 0, borderLeft: 0, borderRight: 0 }} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId='Pw'>
                        <Form.Control type='password' name='pw' size='lg' placeholder='******' style={{ borderTop: 0, borderLeft: 0, borderRight: 0 }} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId='PwCheck'>
                        <Form.Control type='password' name='pwCheck' size='lg' placeholder='******' style={{ borderTop: 0, borderLeft: 0, borderRight: 0 }} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId='Name'>
                        <Form.Control type='text' name='name' size='lg' placeholder='Input your name' style={{ borderTop: 0, borderLeft: 0, borderRight: 0 }} onChange={this.handleChange} />
                    </Form.Group>
                    <Button type='submit' block
                        style={{ marginTop: 50, padding: 10, alignSelf: 'center', backgroundColor: '#ff9500', borderColor: '#ff9500', borderRadius: 30 }}>
                        CONTINUE
                    </Button>
                    <h6 style={{ marginTop: 50, marginBottom: 20, color: '#ff9500', textAlign: 'center' }}>Already have an account?</h6>
                    <Button type='button' block
                        style={{ padding: 10, alignSelf: 'center', backgroundColor: '#ff9500', borderColor: '#ff9500', borderRadius: 30 }} onClick={this.loginSubmit}>
                        LOGIN
                    </Button>
                </Form>
            </div>
        )
    }
}