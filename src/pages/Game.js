import React, { Component } from 'react'

import { SquareButton } from '../components/Button'

export default class Game extends Component {
    render() {
        return (
            <div style={{ marginTop: 20, padding: 25 }}>
                <h2 style={{ textAlign: 'center', color: '#d5aad4' }}>최한솔 vs. 박찬형</h2>
                <h5 style={{ marginTop: 30, textAlign: 'center' }}>또르와 chpark 당신의 선택은?</h5>
                <h5 style={{ textAlign: 'center' }}>엘렐렐렐렐ㄹ엘ㅇ엘ㅇ레레 95들의 자존심 싸움</h5>
                <div className='row' style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ marginTop: 20, marginBottom: 20, marginRight: 3 }}>
                        <SquareButton href={'/gameResult'} label='최한솔' />
                    </div>
                    <div style={{ marginTop: 20, marginBottom: 20, marginLeft: 3 }}>
                        <SquareButton label='박찬형' />
                    </div>
                </div>
                <h5 style={{ textAlign: 'center' }}>선택한 답이 과반 이상의 선택을 받았을 경우 이득~</h5>
            </div>
        )
    }
}