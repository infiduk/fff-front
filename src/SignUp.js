import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
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

        const { id, password, name } = this.state;

        if (id === null || password === null || name === null) {
            confirmAlert({
                customUI: () => {
                    return (
                        <div className='custom-confirm-ui'>
                            <div className='text-center'>
                                <p style={{ marginBottom: 20 }}>모든 항목의 값을 입력해주세요.
                        </p>
                            </div>
                            <button className="btn btn-cn btn-secondary" autoFocus onClick={() => {
                                window.location.assign('/signUp');
                            }}> 확인 </button>
                        </div>
                    )
                },
                closeOnClickOutside: false
            })
        } else {
            window.location.assign('/signIn');
        }
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div style={{ marginTop: 25, padding: 25 }}>
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
                    <h3 style={{ marginTop: 30, textAlign: 'center' }}>회원가입</h3>
                    <Form style={{ padding: 25, marginTop: 10 }} onSubmit={this.signSubmit}>
                        <Form.Group controlId='Id'>
                            <Form.Label>ID</Form.Label>
                            <Form.Control type='id' name='id' size='lg' placeholder='아이디를 입력하세요.' onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId='Password'>
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type='password' name='password' size='lg' placeholder='비밀번호를 입력하세요.' onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId='Name'>
                            <Form.Label>이름</Form.Label>
                            <Form.Control type='text' name='name' size='lg' placeholder='이름을 입력하세요.' onChange={this.handleChange} />
                        </Form.Group>
                        <Button type='submit' block
                            style={{ marginTop: 50, padding: 10, alignSelf: 'center', backgroundColor: '#fd8a1f' }}>
                            회원가입
                            </Button>
                    </Form>
                </div>
            </div>
        )
    }
}