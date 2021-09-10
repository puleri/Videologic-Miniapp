import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import "./Profile.css";

export default function Credentials() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <>
        <Modal className="pw-modal" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Please enter your current password followed by your new password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>Old Password</label>
            <input className="old-pass" placeholder="old password..."/>
            <label>New Password</label>
            <input className="old-pass" placeholder="new password..."/>
          </Modal.Body>
          <Modal.Footer>
            <button className="modal-close" onClick={handleClose}>
              Cancel
            </button>
            <button className="modal-submit" onClick={handleClose}>
              Update Password
            </button>
          </Modal.Footer>
        </Modal>

        <div className="profile-card-container">
          <i className="account-cogs fas fa-cogs"></i>
          <h3 className="account-header">Change Password</h3>
          <p>Update your password with your credentials</p>
          <button onClick={handleShow} className="change-password">Change Password</button>
        </div>
      </>
    )
  }
