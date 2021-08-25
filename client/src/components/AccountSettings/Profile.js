import React, { Component } from 'react';

import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <>
        <div className="profile-card-container">
        <i className="account-cogs fas fa-cogs"></i>
          <h3 className="account-header">Your Profile</h3>
          <h5 className="profile-info" >Name</h5>
          <p>Matt Puleri</p>
          <h5 className="profile-info" >Email</h5>
          <p>mpuleri@vectorventures.com</p>
        </div>
      </>
    )
  }
}
export default Profile
