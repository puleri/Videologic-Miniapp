import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import ListGroup from 'react-bootstrap/ListGroup'
// import Button from 'react-bootstrap/Button'
import icon from '../Header/icon.png';
import './Footer.css';

const Footer = props => {
  return (
    <footer>
    <Navbar expand="md" className="Footer">
    <div className="footercolor"><div className="top-accent-blue"></div><div className="top-accent-red"></div><div className="top-accent-purple"></div><div className="top-accent-green"></div><div className="top-accent-yellow"></div></div>

      <Navbar.Brand className="footer_logo" href="#">
        Videologic<img id="footer-icon"src={icon} alt="icon"/>
    </Navbar.Brand>
      <Link to='/Support' className="Footer_button F1">Support</Link>
      <ListGroup.Item className="Footer_Nav F2">
        About
      </ListGroup.Item>
      <ListGroup.Item className="Footer_Nav F3">
        Solutions
      </ListGroup.Item>
      <ListGroup.Item className="Footer_Nav F4">
      Terms of Use
      </ListGroup.Item>
      <ListGroup.Item className="Footer_Nav F5">
        Admin
      </ListGroup.Item>
      <ListGroup.Item className="Footer_c">© Videologic 2021</ListGroup.Item>
    </Navbar>
    </footer>
  )
}

export default withRouter(Footer)
