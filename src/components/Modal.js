import React from 'react'

import { Button, Form, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const ReMatchModal = props => {
    return (
        <Modal show={props.show} onHide={props.onHide}>
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
                <Form style={{ padding: 25, marginTop: 10 }} onSubmit={props.formOnSubmit}>
                    <Form.Group controlId='Ticket'>
                        <Form.Control type='number' size='md' name='ticket' placeholder='사용할 티켓 수를 입력해주세요.' onChange={props.formHandleChange} />
                    </Form.Group>
                    <Button type='submit' onClick={props.btnOnClick} style={{ padding: 10, backgroundColor: '#d8b1d6', borderColor: '#fff' }} block>
                        확인
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}