import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import "./Profile.css";

export default function DeleteAccount() {
  const [show, setShow] = useState(false);

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
          <input className="old-pass" placeholder="email..."/>
          <label>Password</label>
          <input className="old-pass" placeholder="password..."/>
        </Modal.Body>
        <Modal.Footer>
          <button className="modal-close" onClick={handleClose}>
            Cancel
          </button>
          <button className="modal-submit" onClick={handleClose}>
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
