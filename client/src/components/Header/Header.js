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
    this.props.logOut()
    // console.log("logging out")
    this.props.history.push('/')
  }

  render() {
    // ternary for if user is set and returning auth vs unauth header
    // Authenticated
    if (localStorage.getItem('user')) {
      // const loggedIn = localStorage.getItem('user')
      return (
        <>
        <div className="colorheader"><div className="top-accent-blue"></div><div className="top-accent-red"></div><div className="top-accent-purple"></div><div className="top-accent-green"></div><div className="top-accent-yellow"></div></div>
        <div className="Nav-containter">
          <div className="brand">
            <h4>Videologic</h4><img id="Nav-icon" src={icon} alt="Videologic Logo"/>
          </div>
          <div className="calendar">
            <Link style={{ textDecoration: 'none' }} to="/"><i className="fas fa-home"/><div className="icon-text">Home</div></Link>
          </div>
          <div className="calendar">
            <Link style={{ textDecoration: 'none' }} to="/AdminPanel"><i className="fas fa-adjust"/><div className="icon-text">Administrator</div></Link>
          </div>
          <div className="calendar">
            <Link style={{ textDecoration: 'none' }} to="/Support"><i className="far fa-comment-alt"/><div className="icon-text">Support</div></Link>
          </div>
          <div className="calendar">
            <button className="logout-header" onClick={this.logOut}><i class="logout-icon fas fa-sign-out-alt" /><br/><div className="icon-text">Log out</div></button>
          </div>
        </div>
        <div id="Navbar-bottomline"></div>
        </>

      )
    }
    // Not Authenticated
    return (
      <>
      <div className="colorheader"><div className="top-accent-blue"></div><div className="top-accent-red"></div><div className="top-accent-purple"></div><div className="top-accent-green"></div><div className="top-accent-yellow"></div></div>
      <div className="Nav-containter">
        <div className="brand">
          <h4>Videologic</h4><img id="Nav-icon" src={icon} alt="Videologic Logo"/>
        </div>
        <div className="calendar">
          <Link style={{ textDecoration: 'none' }} to="/"><i className="fas fa-home"/><div className="icon-text">Home</div></Link>
        </div>
        <div className="calendar">
          <Link style={{ textDecoration: 'none' }} to="/login"><i className="fas fa-user-friends"/><div className="icon-text">Log in</div></Link>
        </div>
      </div>
      <div id="Navbar-bottomline"></div>
      </>
    )
  }
}

export default withRouter(Header);
