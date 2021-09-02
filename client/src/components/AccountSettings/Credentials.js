import React, { Component } from 'react';

import "./Profile.css";

class Credentials extends Component {

  render() {
    return (
      <>
        <div className="profile-card-container">
        <i className="account-cogs fas fa-cogs"></i>
          <h3 className="account-header">Change Password</h3>
          <p>Update your password with your credentials</p>
          <button className="change-password">Change Password</button>
        </div>
      </>
    )
  }
}
export default Credentials
