import React, { Component } from 'react';
import { Button, Form, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class GameResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleGoBack = () => {
        window.location.assign('/');
    }

    render() {        
        return (
            <div style={{ margin: 25 }}>
                <h2 style={{ marginTop: 30, marginBottom: 30, textAlign: 'center' }}>최한솔 vs. 박찬형</h2>
                <div style={{ padding: '5px', backgroundColor: '#fafafa' }}>
                    <div style={{ padding: '10px' }}>
                    <ProgressBar striped variant='info' now={50} label={'최한솔: ' + `${50}%`} />
                    <br />
                    <ProgressBar striped variant='warning' now={50} label={'박찬형: ' + `${50}%`} />
                    </div>
                </div>
                <Form>
                    <Button variant='primary' size='lg' style={{ marginTop: 25, backgroundColor: '#ff9500' }} onClick={this.handleGoBack} block>메인화면</Button>
                </Form>
            </div>
        );
    }
}