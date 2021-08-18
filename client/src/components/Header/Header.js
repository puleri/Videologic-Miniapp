import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import icon from './icon.png';
import "./Header.css";


class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null
    }

  }
  logOut = event => {
    event.preventDefault()
    // console.log("logging out")
    localStorage.removeItem("user")
    this.props.history.push('/')
  }
  
  render() {
    // ternary for if user is set and returning auth vs unauth header
    if (localStorage.getItem('user')) {
      const loggedIn = localStorage.getItem('user')
      return (
        <>
        <div className="colorheader"><div className="top-accent-blue"></div><div className="top-accent-red"></div><div className="top-accent-purple"></div><div className="top-accent-green"></div><div className="top-accent-yellow"></div></div>
        <div className="Nav-containter">
          <div className="brand">
            <h4>Videologic</h4><img id="Nav-icon" src={icon} alt="Videologic Logo"/>
          </div>
          <div className="calendar">
            <Link to="/"><i className="fas fa-home"></i></Link>
          </div>
          <div className="calendar">
            <Link to="/login"><i className="fas fa-user-friends"></i></Link>
          </div>
          <div className="calendar">
            <Link to="/AdminPanel"><i className="fas fa-adjust"></i></Link>
          </div>
          <div className="calendar">
            <Link to="/Support"><i className="far fa-comment-alt"></i></Link>
          </div>
          <div className="calendar">
            <button className="logout-header" onClick={this.logOut}>Logout {loggedIn}</button>
          </div>
        </div>
        <div id="Navbar-bottomline"></div>
        </>

      )
    }
    return (
      <>
      <div className="colorheader"><div className="top-accent-blue"></div><div className="top-accent-red"></div><div className="top-accent-purple"></div><div className="top-accent-green"></div><div className="top-accent-yellow"></div></div>
      <div className="Nav-containter">
        <div className="brand">
          <h4>Videologic</h4><img id="Nav-icon" src={icon} alt="Videologic Logo"/>
        </div>
        <div className="calendar">
          <Link to="/"><i className="fas fa-home"></i></Link>
        </div>
        <div className="calendar">
          <Link to="/login"><i className="fas fa-user-friends"></i></Link>
        </div>
        <div className="calendar">
          <Link to="/AdminPanel"><i className="fas fa-adjust"></i></Link>
        </div>
        <div className="calendar">
          <Link to="/Support"><i className="far fa-comment-alt"></i></Link>
        </div>
      </div>
      <div id="Navbar-bottomline"></div>
      </>
    )
  }
}

export default withRouter(Header);
