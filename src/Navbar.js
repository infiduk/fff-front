import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import logo from './assets/qnq.jpg';

export default class NavbarClass extends Component {
  render() {
    return (
      <div>
        <Navbar expand='lg' style={{ backgroundColor: '#fff' }}>
          <Navbar.Brand href='/'>
            <img
              alt='QnQ'
              src={logo}
              height='65px'
              className='d-inline-block align-top'
              style={{ marginLeft: 10 }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/' style={{ color: '#d5aad4' }}>게임 목록</Nav.Link>
            </Nav>
            <Nav>         
              <Nav.Link href='/result' style={{ color: '#d5aad4' }}>게임 결과 목록</Nav.Link>
              <Nav.Link href='/myPage' style={{ color: '#d5aad4' }}>내 정보</Nav.Link>
              <Nav.Link href='/proposeQuiz' style={{ color: '#d5aad4' }}>문제 제안</Nav.Link>
              <Nav.Link href='/propose' style={{ color: '#d5aad4' }}>문제 제안리스트</Nav.Link>
              <Nav.Link href='/history' style={{ color: '#d5aad4' }}>투표 이력</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}