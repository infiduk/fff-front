import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: '',
        };
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
                    <h2 style={{ marginTop: 30, textAlign: 'center' }}>최한솔 vs. 박찬형</h2>
                    <h5 style={{ marginTop: 30, textAlign: 'center' }}>또르와 chpark 당신의 선택은?</h5>
                    <h5 style={{ textAlign: 'center' }}>엘렐렐렐렐ㄹ엘ㅇ엘ㅇ레레 95들의 자존심 싸움</h5>
                </div>
                <div className='row' style={{ margin: 25, alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ marginTop: 20, marginBottom: 20, marginRight: 20 }}>
                        <Button
                            variant='outline-primary'
                            size='lg'
                            href={'/gameResult'}
                            style={{ width: '30vw', height: '30vw', fontWeight: '900', fontSize: '1.5rem', alignItems: 'center', justifyContent: 'center', textAlign: 'center', display: 'table-cell', verticalAlign: 'middle' }}>
                            최한솔
                        </Button>
                    </div>
                    <div style={{ marginTop: 20, marginBottom: 20, marginLeft: 20 }}>
                        <Button
                            variant='outline-secondary'
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