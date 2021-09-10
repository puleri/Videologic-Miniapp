import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import "./Profile.css";

export default function Credentials() {
  const [show, setShow] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.persist()
    // validate old password then update if password matches
    // console.log("Old password is: ", oldPassword,"\nNew password is: ", newPassword)
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <>
        <Modal className="pw-modal" show={show} onHide={handleClose}>
          <Modal.Header className="modal-header">
            <Modal.Title>Please enter your current password followed by your new password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>Old Password</label>
            <input onChange={(e) => setOldPassword(e.target.value)} type="password" className="old-pass" placeholder="old password..."/>
            <label>New Password</label>
            <input onChange={(e) => setNewPassword(e.target.value)} type="password" name="new-password" className="old-pass" placeholder="new password..."/>
          </Modal.Body>
          <Modal.Footer>
            <button className="modal-close" onClick={handleClose}>
              Cancel
            </button>
            <button className="modal-submit-pass" name="password-change" onClick={handleSubmit}>
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
