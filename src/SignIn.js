import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: '',
        };
    }

    handleSubmit = async e => {
        e.preventDefault();
        window.location.assign('/');
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div style={{ marginTop: 25, padding: 25, flex: 1 }}>
                <div style={{
                    display: 'initial',
                    marginTop: 20,
                    marginBotom: 20,
                    width: '60vw',
                    height: '80%',
                    backgroundColor: '#f1f1f1',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center'
                }}>
                    <h3 style={{ marginTop: 30, textAlign: 'center' }}>로그인</h3>
                    <Form style={{ padding: 25, marginTop: 10, borderRadius: '10rem' }} onSubmit={this.handleSubmit}>
                        <Form.Group controlId='id'>
                            <Form.Label>ID</Form.Label>
                            <Form.Control type='id' size='lg' name='id' placeholder='ID' onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId='password'>
                            <Form.Label>PW</Form.Label>
                            <Form.Control type='password' size='lg' name='password' placeholder='Password' onChange={this.handleChange} />
                        </Form.Group>
                        <Button type='submit' block
                            style={{ marginTop: 50, padding: 10, alignSelf: 'center', backgroundColor: '#fd8a1f' }}>
                            로그인
                            </Button>
                    </Form>
                </div>
            </div>
        )
    }
}