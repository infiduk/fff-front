import React, { Component } from 'react'
import N from '../Navbar'

import { Button, ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { ProposeList } from '../components/List'

export default class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            value: 10
        }
    }

    onSubmit = () => {
        this.setState({ value: this.state.value + 10 })
    }

    render() {
        return (
            <div>
                <N />
                <div style={{ margin: 10 }}>
                    <div className='row' style={{ marginBottom: 10 }}>
                        <h3 style={{ marginLeft: 20, colosr: '#d8b1d6' }}>문제 제안 목록</h3>
                        <Button href='/proposeQuiz' style={{ marginLeft: 30, backgroundColor: '#fff', borderColor: '#d8b1d6', color: '#d8b1d6' }}>문제 제안</Button>
                    </div>
                    <ListGroup variant='flush'>
                        <ProposeList title='불타오르네 vs 상남자' date='7일' user='최또르' value={this.state.value} onClick={this.onSubmit} />
                        <ProposeList title='내가 7억 vs 최애가 7억' date='5일' user='포엠엘' />
                        <ProposeList title='으르렁 vs Love Shot' date='7일' user='쏘' />
                        <hr />
                    </ListGroup>
                </div>
            </div>
        )
    }
}