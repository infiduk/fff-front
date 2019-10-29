import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class NavbarClass extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
    return (
      <div>
        <Navbar expand='lg' style={{ backgroundColor: '#ff9500' }}>
          <Navbar.Brand href='/'>
            <img
              className='d-inline-block align-top'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/' style={{ color: '#ffffff' }}>게임 목록</Nav.Link>              
              <Nav.Link href='/signIn' style={{ color: '#ffffff' }}>로그인</Nav.Link>
              <Nav.Link href='/signUp' style={{ color: '#ffffff' }}>회원가입</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}