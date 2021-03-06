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
import UserView from './components/UserView/Userview.js';
import JCLDAP from './components/JCLDAP/JCLDAP.js'
import DBUserLogin from './components/DBUserLogin/DBUserLogin.js'
import LandingPage from './components/LandingPage/LandingPage.js';
import AccountSettings from './components/AccountSettings/AccountSettings.js';
import Testing from './components/Testing/Testing.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      token: null,
      msgAlerts: []
    }
  }
// clearing local storage for when working on the same dev port as other projects
  // componentDidMount() {
  //   localStorage.clear()
  // }

  // This function is passed to the header and the login form
  // and is excecuted on the App component in order to update
  // State in both the login form and the header component
  setUser = (user, token) => {
    localStorage.setItem('user', user);
    localStorage.setItem('token', token);
    this.setState({ user: user, token: token })
    // console.log(localStorage.getItem('token'))
  }


  logOut = () => {
    const user = localStorage.getItem('user');
    var fd = new FormData();
    fd.append('email', user);
    fetch(`http://localhost:9000/docroot/admin_logout.php`, {
      method: 'POST',
      body: fd
    })
    // .then(response => console.log(response))
    .catch(err => console.err)

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    this.setState({ user: null, token:null })
  }

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

  isAuth = () => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('user');
    var fd = new FormData();
    fd.append('email', user);
    fd.append('token', token);
    fetch(`http://localhost:9000/docroot/is_auth.php`, {
      method: 'POST',
      body: fd
    })
    // .then(response => console.log(response))
    .catch(err => console.err)
  }
  render() {
    const { user } = this.state
  return (
    <div className="App">
      <div className="main-content">
      <Route path='/' render={() => (
        <Header logOut={this.logOut} setUser={this.setUser}/>
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

      <Route path='/Testing' render={() => (
        <Testing />
      )} />

      <Route path='/AccountSettings' render={() => (
        <AccountSettings isAuth={this.isAuth}/>
      )} />

      <Route path="/DBUserLogin" component={DBUserLogin} />
      <Route path="/JCLDAP" component={JCLDAP} />


      <AuthenticatedRoute user={user} path='/UserView' render={() => (
            <UserView msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
      </div>
    </div>
  );
}
}

export default App;
