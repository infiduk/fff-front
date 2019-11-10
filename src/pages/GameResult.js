import React, { Component } from 'react';

import { Button, Form, Modal, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class GameResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setShow: false,
        }
    }

    handleGoBack = () => {
        window.location.assign('/');
    }

    handleClose = () => {
        this.setState({ setShow : false });
    }

    handleShow = () => {
        this.setState({ setShow: true });
    };

    render() {
        const { setShow } = this.state;
        return (
            <div style={{ margin: 25 }}>
                <Modal show={setShow} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>리매치 신청</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>아래 유의사항을 숙지하신 후 신청해주세요.</b>
                    <br />
                    <br />
                    - 리매치는 이전에 진행된 게임의 총 투표 수 절반 이상의 티켓이 기여되어야 진행됩니다.
                    <br />
                    - 리매치가 진행되면 이전 게임의 기록은 계속 남아있고 새로운 게임으로 다시 시작됩니다.
                    <br />
                    사용할 티켓 수량을 입력해주세요.
                    <Form style={{ padding: 25, marginTop: 10 }} onSubmit={this.loginSubmit}>
                        <Form.Group controlId='Ticket'>
                            <Form.Control type='number' size='md' name='ticket' placeholder='사용할 티켓 수를 입력해주세요.' onChange={this.handleChange} />
                        </Form.Group>
                        <Button type='submit' onClick={this.handleClose} style={{ padding: 10, backgroundColor: '#d5aad4', borderColor: '#fff' }} block>
                            확인
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
                <h2 style={{ marginTop: 30, marginBottom: 30, textAlign: 'center', color: '#d5aad4' }}>최한솔 vs. 박찬형</h2>
                <div style={{ padding: 10, backgroundColor: '#fafafa' }}>
                    <div style={{ padding: 20 }}>
                        <h5>누구누구</h5>
                        <ProgressBar striped variant='info' now={100} label='12030표' style={{ height: '40px', marginTop: 10, marginLeft: 10, marginRight: 10, marginBottom: 5 }} />
                        <br />
                        <h5>어쩌구저쩌구</h5>
                        <ProgressBar striped variant='warning' now={50} label='6000표' style={{ height: '40px', marginTop: 5, marginLeft: 10, marginRight: 10, marginBottom: 10 }} />
                    </div>
                </div>
                <Button type='button' style={{ padding: 10, marginTop: 25, backgroundColor: '#d5aad4', borderColor: '#d5aad4'}} onClick={this.handleGoBack} block>메인화면</Button>
                <hr />
                <h6 style={{ textAlign: 'center' }}>리매치를 위해 기여된 티켓 수 : 10033개</h6>
                <Button type='button' style={{ padding: 10, marginTop: 25, backgroundColor: '#fff', borderColor: '#d5aad4', color: '#d5aad4' }} onClick={this.handleShow} block>리벤지 신청</Button>
            </div>
        );
    }
}