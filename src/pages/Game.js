import React, { Component } from 'react'

import { SquareButton } from '../components/Button'

export default class Game extends Component {
    render() {
        return (
            <div style={{ marginTop: 20, padding: 25 }}>
                <h2 style={{ textAlign: 'center', color: '#d8b1d6' }}>깐뷔 vs. 덮뷔</h2>
                <h5 style={{ marginTop: 30, textAlign: 'center' }}>깐태형과 덮태형.. 당신의 선택은?</h5>
                <h5 style={{ textAlign: 'center' }}>우리 태태는 어떤 모습이든 예쁘지만♥</h5>
                <div className='row' style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ marginTop: 20, marginBottom: 20, marginRight: 3 }}>
                        <SquareButton href={'/gameResult'} label='깐뷔' />
                    </div>
                    <div style={{ marginTop: 20, marginBottom: 20, marginLeft: 3 }}>
                        <SquareButton label='덮뷔' />
                    </div>
                </div>
                <h5 style={{ textAlign: 'center' }}>선택한 답이 과반 이상의 선택을 받았을 경우 추첨을 통해 상품을 드립니다.</h5>
            </div>
        )
    }
}