import './App.css';
import { v4 as uuid } from 'uuid'
import React, { Component } from 'react';
import AuthenticatedRoute from './components/AuthRoute/Authroute.js';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login.js';
import Header from './components/Header/Header.js';
import AdminPanel from './components/AdminPanel/AdminPanel.js'
import Support from './components/Support/Support.js'
import ThankYou from './components/ThankYou/ThankYou.js'
import Footer from './components/Footer/Footer.js'
import UserView from './components/UserView/Userview.js';
import JCLDAP from './components/JCLDAP/JCLDAP.js'
import DBUserLogin from './components/DBUserLogin/DBUserLogin.js'
import LandingPage from './components/LandingPage/LandingPage.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      msgAlerts: []
    }
  }
  setUser = user => {
    localStorage.setItem('user', user);
    this.setState({ user })
  }


  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }
  render() {
    const { user } = this.state
  return (
    <div className="App">
      <div className="main-content">
      <Route path='/' render={() => (
        <Header setUser={this.setUser}/>
      )}/>
      <Route exact path='/' render={() => (
      <LandingPage />
      )}/>
      <Route exact path='/Support' render={() => (
        <Support />
      )} />
      <Route path='/login' render={() => (
        <Login setUser={this.setUser}/>
      )}/>
      <Route exact path='/ThankYou' render={() => (
        <ThankYou />
      )} />

      <Route path='/AdminPanel' render={() => (
        <AdminPanel />
      )} />

      <Route path="/DBUserLogin" component={DBUserLogin} />
      <Route path="/JCLDAP" component={JCLDAP} />


      <AuthenticatedRoute user={user} path='/UserView' render={() => (
            <UserView msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
      <Route path='/' render={() => (
          <Footer />
        )}/>
      </div>
    </div>
  );
}
}

export default App;
