import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class ProposeQuiz extends Component {
    render() {
        return (
            <div style={{ margin: 20 }}>
                <h4>유의사항!</h4>
                <h6 style={{ marginLeft: 5 }}>문제는 손수 선별하여 제출됩니다. 판단 기준은 문제의 차별성, 선택의 어려운 정도 등 여러가지 요인에 따라 선정됩니다. 또한, 승패 결과 비율이 5% 미만일 경우 황금밸런스 상을 받게 되며 이에 따라 포인트를 받게 됩니다.</h6>
                <div style={{ marginTop: 20 }}>
                    <h5>제안할 문제 명</h5>
                    <hr style={{ marginTop: 0, backgroundColor: '#ff9500' }} />
                    
                </div>
            </div>
        );
    }
}