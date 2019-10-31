import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Game extends Component {    
    render() {
        return (
            <div style={{ marginTop: 20, padding: 25 }}>
                <h2 style={{ marginTop: 25, textAlign: 'center', color: '#ff9500' }}>최한솔 vs. 박찬형</h2>
                <h5 style={{ marginTop: 30, textAlign: 'center' }}>또르와 chpark 당신의 선택은?</h5>
                <h5 style={{ textAlign: 'center' }}>엘렐렐렐렐ㄹ엘ㅇ엘ㅇ레레 95들의 자존심 싸움</h5>
                <div className='row' style={{ margin: 25, alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ marginTop: 20, marginBottom: 20, marginRight: 20 }}>
                        <Button
                            variant='outline-warning'
                            size='lg'
                            href={'/gameResult'}
                            style={{ width: '30vw', height: '30vw', fontWeight: '900', fontSize: '1.5rem', alignItems: 'center', justifyContent: 'center', textAlign: 'center', display: 'table-cell', verticalAlign: 'middle' }}>
                            최한솔
                        </Button>
                    </div>
                    <div style={{ marginTop: 20, marginBottom: 20, marginLeft: 20 }}>
                        <Button
                            variant='outline-info'
                            size='lg'
                            href={'/gameResult'}
                            style={{ width: '30vw', height: '30vw', fontWeight: '900', fontSize: '1.5rem', alignItems: 'center', justifyContent: 'center', textAlign: 'center', display: 'table-cell', verticalAlign: 'middle' }}>
                            박찬형
                        </Button>
                    </div>
                </div>
                <h5 style={{ textAlign: 'center' }}>선택한 답이 과반 이상의 선택을 받았을 경우 이득~</h5>
            </div>
        );
    }
}