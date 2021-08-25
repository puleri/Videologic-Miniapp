import React, { Component } from 'react';

import "./Profile.css";

class DeleteAccount extends Component {
  render() {
    return (
      <>
      <div className="profile-card-container">
      <i className="account-cogs fas fa-cogs"></i>
        <h3 className="account-header">Delete Account</h3>
        <p>Deleting your account removes all your credentials and info. <br />Creating a new profile will require an administrator.</p>
        <button className="change-password">Delete Account</button>
      </div>
      </>
    )
  }
}
export default DeleteAccount
