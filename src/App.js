import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { CookiesProvider } from 'react-cookie'

import Game from './pages/Game'
import GameResult from './pages/GameResult'

import Main from './pages/Main'
import Result from './pages/Result'
import History from './pages/History'
import Winner from './pages/Winner'

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
    <CookiesProvider>
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
          {/* 투표 목록, 투표, 투표 결과, 히스토리, 당첨자 조회 */}
          <Route path='/game/:id' component={Game} />
          <Route path='/gameResult/:id' component={GameResult} />
          <Route path='/history/:id' component={History} />
          <Route path='/winner/:id' component={Winner} />
          {/* 문제 제안 리스트 */}
          <Route path='/propose' component={Propose} />
        </Switch>
      </div>
    </Router>
    </CookiesProvider>
  )
}

export default App