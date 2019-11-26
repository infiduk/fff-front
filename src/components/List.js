import React from 'react'

import { Button, ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './List.css'

export const MainList = props => {
    return (
        <ListGroup.Item action href={props.href}>
            <div className='col'>
                <h5 style={{ color: '#d8b1d6', marginLeft: -20 }}>{props.title}</h5>
                <div className='row'>
                    <h6 style={{ marginTop: 5, flex: 0.7 }}>{props.date} 마감</h6>
                    <div style={{ marginTop: 5, textAlign: 'right', flex: 0.5 }}>
                        {props.category === '0'
                            ? <h6 style={{ marginRight: 5 }}>무료투표</h6>
                            : <h6 style={{ marginRight: 5 }}>유료투표</h6>
                        }
                    </div>
                </div>
            </div>
        </ListGroup.Item>
    )
}

export const ToBeList = props => {
    return (
        <ListGroup.Item>
            <div className='col'>
                <h5 style={{ position: 'absolute', top: '30%', textAlign: 'center', marginTop: 10, marginBottom: 10 }}>해당 문제는 공개될 예정입니다.</h5>
                <h5 style={{ color: '#d8b1d6', marginLeft: -20, filter: 'blur(5px)' }}>{props.choice1}</h5>
                <h6 style={{ color: '#6e5b6c', marginLeft: -10, filter: 'blur(5px)' }}>VS</h6>
                <h5 style={{ color: '#d8b1d6', marginLeft: -20, filter: 'blur(5px)', marginTop: -2 }}>{props.choice2}</h5>
                <div className='row'>
                    <h6 style={{ marginTop: 5, flex: 0.7, filter: 'blur(5px)' }}>{props.date} 마감</h6>
                    <div style={{ marginTop: 5, textAlign: 'right', flex: 0.5 }}>
                        {props.category === '0'
                            ? <h6 style={{ marginRight: 5, filter: 'blur(5px)' }}>무료투표</h6>
                            : <h6 style={{ marginRight: 5, filter: 'blur(5px)' }}>유료투표</h6>
                        }
                    </div>
                </div>
            </div>
        </ListGroup.Item>
    )
}

export const ResultList = props => {
    return (
        <ListGroup.Item action href={props.href}>
            <div className='col'>
                <h5 style={{ color: '#d8b1d6', marginLeft: -20 }}>{props.choice1}</h5>
                <h6 style={{ color: '#6e5b6c', marginLeft: -10 }}>VS</h6>
                <h5 style={{ color: '#d8b1d6', marginLeft: -20, marginTop: -2 }}>{props.choice2}</h5>
                <div className='row'>
                    <h6 style={{ marginTop: 5, flex: 0.7 }}>{props.winner}</h6>
                    <div style={{ marginTop: 5, textAlign: 'right', flex: 0.5 }}>
                        {props.category === '0'
                            ? <h6 style={{ marginRight: 5 }}>무료투표</h6>
                            : <h6 style={{ marginRight: 5 }}>유료투표</h6>
                        }
                    </div>
                </div>
            </div>
        </ListGroup.Item>
    )
}

export const HistoryList = props => {
    return (
        <ListGroup.Item style={{ overflowWrap: 'break-word' }}>
            <div className='col'>
                <h5 style={{ color: '#d8b1d6', marginLeft: -20 }}>{props.tx}</h5>
                <div className='row'>
                    <h6 style={{ marginTop: 5 }}>시간: {props.timestamp}</h6>
                </div>
            </div>
        </ListGroup.Item>
    )
}

export const ProposeList = props => {
    return (
        <ListGroup.Item>
            <div className='col'>
                <div className='row'>
                    <h5 style={{ color: '#d8b1d6' }}>{props.title}</h5>
                    <Button
                        style={{ backgroundColor: '#fff', color: '#d8b1d6', borderColor: '#d8b1d6', marginLeft: 10, alignSelf: 'flex-start' }}
                        name={props.name}
                        onClick={props.onClick}>UP</Button>
                    <h5 style={{ marginLeft: 5, alignSelf: 'flex-end' }}>{props.value}</h5>

                </div>
                <div className='row'>
                    <h6 style={{ marginTop: 5, flex: 0.5 }}>투표기간: {props.period}</h6>
                    <div style={{ marginTop: 5, textAlign: 'right', flex: 0.5 }}>
                        <h6 style={{ marginRight: 5 }}>작성자: {props.user}</h6>
                    </div>
                </div>
            </div>
        </ListGroup.Item>
    )
}

export const MyPageList = props => {
    return (
        <ListGroup.Item action href={props.href} className='MyPageList'>
            <h5>{props.title}</h5>
        </ListGroup.Item>
    )
}