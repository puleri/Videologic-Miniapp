import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import './Footer.css';

const Footer = props => {
  return (
    <>
    <Navbar expand="md" className="Footer">
      <Navbar.Brand className="footer_logo" href="#">
        Videologic
    </Navbar.Brand>
      <Button href='#' className="Footer_button F1">Support</Button>
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
        FAQ
      </ListGroup.Item>
      <ListGroup.Item className="Footer_c">© Connect The Dots 2021</ListGroup.Item>
    </Navbar>
    <div className="footercolor"><div className="top-accent-blue"></div><div className="top-accent-red"></div><div className="top-accent-purple"></div><div className="top-accent-green"></div><div className="top-accent-yellow"></div></div>
    </>
  )
}

export default Footer
