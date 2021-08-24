import React, { Component } from 'react';

import "./AccountSettings.css";

import { withRouter, Link } from 'react-router-dom';

class AccountSettings extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return (
      <>
        <div className="settings-container">
          <div className="tab-container">
            <div>
            <Link className="profile-tab">
              Profile
            </Link>
            </div>
            <div className="settings-side-bar">
              <i className="settings-icon-header fas fa-cogs"></i>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(AccountSettings);
