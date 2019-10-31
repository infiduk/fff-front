import React, { Component, useState } from 'react';
import { Alert, Button, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class GameResult extends Component {
    handleGoBack = () => {
        window.location.assign('/');
    }

    alertRematch = () => {
        return (
            <>
                <Alert show={true}>
                    <Alert.Heading>리매치 신청</Alert.Heading>
                    <hr />
                    <b>아래 유의사항을 숙지하신 후 진행해주세요.</b>
                    <br />
                    <br />
                    - 리매치는 이전에 진행된 게임의 총 투표 수 절반 이상의 티켓이 기여되어야 진행됩니다.
                     <br />
                    - 리매치가 진행되면 이전 게임의 기록은 계속 남아있고 새로운 게임으로 다시 시작됩니다.
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onclick={this.handleGoBack} style={{ backgroundColor: '#ff9500', borderColor: '#ff9500' }} block>신청하기</Button>
                    </div>
                </Alert>
            </>
        );
    }

    render() {
        return (
            <div style={{ margin: 25 }}>
                <h2 style={{ marginTop: 30, marginBottom: 30, textAlign: 'center', color: '#ff9500' }}>최한솔 vs. 박찬형</h2>
                <div style={{ padding: 10, backgroundColor: '#fafafa' }}>
                    <div style={{ padding: 20 }}>
                        <h5>누구누구</h5>
                        <ProgressBar striped variant='info' now={50} label={`50%`} style={{ height: '40px', marginTop: 10, marginLeft: 10, marginRight: 10, marginBottom: 5 }} />
                        <br />
                        <h5>어쩌구저쩌구</h5>
                        <ProgressBar striped variant='warning' now={50} label={`50%`} style={{ height: '40px', marginTop: 5, marginLeft: 10, marginRight: 10, marginBottom: 10 }} />
                    </div>
                </div>
                <Button type='button' style={{ padding: 10, marginTop: 25, backgroundColor: '#ff9500', borderColor: '#ff9500', borderRadius: 30 }} onClick={this.handleGoBack} block>메인화면</Button>
                <hr />
                <h6 style={{ textAlign: 'center' }}>리매치를 위해 기여된 티켓 수 : 10033개</h6>
                <Button type='button' style={{ padding: 10, marginTop: 25, backgroundColor: '#fff', borderColor: '#ff9500', borderRadius: 30, color: '#ff9500' }} onClick={this.alertRematch} block>리벤지 신청</Button>
            </div>
        );
    }
}