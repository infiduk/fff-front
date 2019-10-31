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
              <Nav.Link href='/' style={{ color: '#ff9500' }}>게임 목록</Nav.Link>
            </Nav>
            <Nav>         
              <Nav.Link href='/signIn' style={{ color: '#ff9500' }}>로그인</Nav.Link>
              <Nav.Link href='/signUp' style={{ color: '#ff9500' }}>회원가입</Nav.Link>
              <Nav.Link href='/myPage' style={{ color: '#ff9500' }}>내 정보</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}