import React, { Component } from 'react';

import "./Profile.css";

class Permissions extends Component {
  render() {
    return (
      <>
        <div className="profile-card-container">
        <i className="account-cogs fas fa-cogs"></i>
          <h3 className="account-header">Your Permissions</h3>
          <div className="permissions-card-container">
          <div>
          <p className="profile-info">Hello, here are <br/> your permissions:</p>
          </div>
          <div>
          <p>-Create<br/></p>
          </div>
          </div>
        </div>
      </>
    )
  }
}
export default Permissions
