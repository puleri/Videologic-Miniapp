import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import icon from './icon.png';


class Header extends Component {
  render() {
    return (
      <>
      <div className="top-accent-blue"></div><div className="top-accent-red"></div><div className="top-accent-purple"></div><div className="top-accent-green"></div><div className="top-accent-yellow"></div>
      <div className="Nav-containter">
        <div className="brand">
          <h4>Videologic</h4><img id="Nav-icon" src={icon} alt="Videologic Logo"/>
        </div>
        <div className="calendar">
          <Link to="/"><i class="fas fa-home"></i></Link>
        </div>
        <div className="calendar">          
          <Link to="/"><i class="fas fa-user-friends"></i></Link>
        </div>
        <div className="calendar">
          <Link to="/AdminPanel"><i class="fas fa-adjust"></i></Link>
        </div>
        <div className="calendar">
          <Link to="/"><i class="far fa-comment-alt"></i></Link>
        </div>
      </div>
      <div id="Navbar-bottomline"></div>
      </>
    )
  }
}

export default withRouter(Header);
