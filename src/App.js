import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Game from './Game';
import GameResult from './GameResult';

import Main from './Main';

import SignIn from './SignIn';
import SignUp from './SignUp';
import MyPage from './MyPage';

import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Switch>
          {/* 메인 */}
          <Route exact path='/' component={Main} />
          {/* 회원가입, 로그인, 마이페이지 */}
          <Route path='/signUp' component={SignUp} />
          <Route path='/signIn' component={SignIn} />
          <Route path='/myPage' component={MyPage} />
          {/* 게임, 게임 결과 */}
          <Route path='/game' component={Game} />
          <Route path='/gameResult' component={GameResult} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;