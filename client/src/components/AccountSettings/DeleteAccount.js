import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import "./Profile.css";

export default function DeleteAccount() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.persist()
    console.log(e.target.name)
  }

  const signIn = event =>
  {
    event.preventDefault()
    // const { user, setUser } = this.props
    // creating a new form data object will let us send the data to php easier
    var login = new FormData();
    // here we are appending data to the form object we just created
    login.append('Login', 'Credentials');
    login.append('email', email)
    login.append('password', password)
    fetch(`http://localhost:9000/docroot/admin_login.php`, {
      method: 'POST',
      body: login
    })
    // .then(console.log(login.get('email')))
    .then(res => res.json())
    .then(response => {
      console.log(response.substring(0,13))
      // create an object with a uniqid and abstract this logic away from the front end
      if (response.substring(0,13) === "Logging in..."){
        this.props.setUser(email, response.substring(13, 53))
        this.props.history.push('/')
        // localStorage.setItem('user', email)
        const loggedIn = localStorage.getItem('token')
        console.log("logged in user in storage is, ", loggedIn);
        // next delete local storage user on logout
    } else {
      throw Error("Cannot log in");
    }
    })
    // .then(console.log(this.props))
    .catch(err => {
      this.setState({ errAlert: 'Whoops! There has been a problem, please try again later.' })
      console.log(err.toString())
    } );


  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <>

      <Modal className="pw-modal" show={show} onHide={handleClose}>
        <Modal.Header className="modal-header">
          <Modal.Title>Danger! You are about to delete your account. Sign in again to delete account.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Email</label>
          <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="old-pass"
          placeholder="email..."/>
          <label>Password</label>
          <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="old-pass"
          placeholder="password..."/>
        </Modal.Body>
        <Modal.Footer>
          <button className="modal-close" onClick={handleClose}>
            Cancel
          </button>
          <button className="modal-submit" name="delete-account" onClick={handleSubmit}>
            Delete Account
          </button>
        </Modal.Footer>
      </Modal>

      <div className="profile-card-container">
      <i className="account-cogs fas fa-cogs"></i>
        <h3 className="account-header">Delete Account</h3>
        <p>Deleting your account removes all your credentials and info. <br />Creating a new profile will require an administrator.</p>
        <button onClick={handleShow} className="delete-account">Delete Account</button>
      </div>
      </>
    )
  }
