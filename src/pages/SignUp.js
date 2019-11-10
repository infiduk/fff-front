import React, { Component } from 'react';

import { Form, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { SignFormGroup } from '../components/Form';
import { FillButton } from '../components/Button';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: '',
            name: '',
            man: false,
            woman: false
        };
    }

    loginSubmit = async e => {
        e.preventDefault();
        window.location.assign('/signIn');
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    manChange = e => {
        this.setState({ man: e.target.checked, woman: false })
        console.log(e.target.value)
    }

    womanChange = e => {
        this.setState({ woman: e.target.checked, man: false })
        console.log(e.target.value)
    }

    render() {
        return (
            <div style={{ marginTop: 25, padding: 10 }}>
                <Form style={{ padding: 25, marginTop: 10 }} onSubmit={this.loginSubmit}>
                    <SignFormGroup controlId='Id' type='text' name='id' placeholder='example@example.com' onChange={this.handleChange} />
                    <SignFormGroup controlId='Pw' type='password' name='pw' placeholder='******' onChange={this.handleChange} />
                    <SignFormGroup controlId='PwCheck' type='password' name='pw' placeholder='******' onChange={this.handleChange} />
                    <SignFormGroup controlId='Name' type='text' name='name' placeholder='Input your name' onChange={this.handleChange} />
                    <SignFormGroup controlId='Date' type='date' name='date' onChange={this.handleChange} />
                    <div className='row'>
                    <FormControl type='radio' name='sex' value='man' onChange={this.manChange} checked={this.state.man} style={{ width: '5%' }} />
                    <h5 style={{ alignSelf: 'flex-end', marginRight: 50 }}>남자</h5>
                    <FormControl type='radio' name='sex' value='woman'  onChange={this.womanChange} checked={this.state.woman} style={{ width: '5%' }} />
                    <h5 style={{ alignSelf: 'flex-end' }}>여자</h5>
                    </div>
                    <FillButton type='submit' text='Sign Up' />
                </Form>
            </div>
        )
    }
}