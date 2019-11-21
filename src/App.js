import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import Game from './pages/Game'
import GameResult from './pages/GameResult'

import Main from './pages/Main'
import Result from './pages/Result'
import History from './pages/History'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import MyPage from './pages/MyPage'
import ProposeQuiz from './pages/ProposeQuiz'

import Propose from './pages/ProposeList'

import Navbar from './Navbar'

function App() {
  let [logged, setLogged] = useState('')

  useEffect(() => {
    try {
      const id = window.sessionStorage.getItem('name')
      id ? setLogged(true) : setLogged(false)
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <Router>
      <div>
        {logged && <Navbar />}
        <Switch>
          {/* 메인 */}
          <Route exact path='/' component={Main} />
          <Route path='/result' component={Result} />
          {/* 회원가입, 로그인, 마이페이지, 문제 제안 */}
          <Route path='/signUp' component={SignUp} />
          <Route path='/signIn' component={SignIn} />
          <Route path='/myPage' component={MyPage} />
          <Route path='/proposeQuiz' component={ProposeQuiz} />
          {/* 투표 목록, 투표, 투표 결과, 히스토리 */}
          <Route path='/game' component={Game} />
          <Route path='/gameResult' component={GameResult} />
          <Route path='/history' component={History} />
          {/* 문제 제안 리스트 */}
          <Route path='/propose' component={Propose} />
        </Switch>
      </div>
    </Router>
  )
}

export default App