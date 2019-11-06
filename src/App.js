import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Game from './pages/Game';
import GameResult from './pages/GameResult';

import Main from './pages/Main';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';
import ProposeQuiz from './pages/ProposeQuiz';

import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Switch>
          {/* 메인 */}
          <Route exact path='/' component={Main} />
          {/* 회원가입, 로그인, 마이페이지, 문제 제안 */}
          <Route path='/signUp' component={SignUp} />
          <Route path='/signIn' component={SignIn} />
          <Route path='/myPage' component={MyPage} />
          <Route path='/proposeQuiz' component={ProposeQuiz} />
          {/* 게임, 게임 결과 */}
          <Route path='/game' component={Game} />
          <Route path='/gameResult' component={GameResult} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;